<?php
// Enqueue Vite-built assets. Prefer manifest.json; fallback to parsing dist/index.html.

function niveau_enqueue_assets() {
    $theme_dir = get_stylesheet_directory();
    $dist_dir = $theme_dir . '/dist';
    $manifest_path = $dist_dir . '/manifest.json';
    $dist_uri = get_stylesheet_directory_uri() . '/dist';

    $entry_js = null;
    $entry_css = [];

    // Try manifest.json first
    if (file_exists($manifest_path)) {
        $json = file_get_contents($manifest_path);
        $manifest = is_string($json) ? json_decode($json, true) : null;

        if (is_array($manifest)) {
            foreach ($manifest as $entry) {
                if (is_array($entry) && isset($entry['isEntry']) && $entry['isEntry'] === true && isset($entry['file'])) {
                    $entry_js = $entry['file'];
                    if (!empty($entry['css']) && is_array($entry['css'])) {
                        $entry_css = array_merge($entry_css, $entry['css']);
                    }
                    break;
                }
            }
            // Fallback: first .js file
            if (!$entry_js) {
                foreach ($manifest as $entry) {
                    if (is_array($entry) && isset($entry['file'])) {
                        $f = $entry['file'];
                        if (substr($f, -3) === '.js') {
                            $entry_js = $f;
                            if (!empty($entry['css']) && is_array($entry['css'])) {
                                $entry_css = array_merge($entry_css, $entry['css']);
                            }
                            break;
                        }
                    }
                }
            }
        }
    }

    // If no manifest or not found, parse dist/index.html
    if (!$entry_js) {
        $index_html = $dist_dir . '/index.html';
        if (file_exists($index_html)) {
            $html = file_get_contents($index_html);
            if (is_string($html)) {
                if (preg_match('/<script[^>]*type=\"module\"[^>]*src=\"([^\"]+)\"/i', $html, $m)) {
                    $entry_js = $m[1];
                }
                if (preg_match_all('/<link[^>]*rel=\"stylesheet\"[^>]*href=\"([^\"]+)\"/i', $html, $matches)) {
                    foreach ($matches[1] as $href) {
                        $entry_css[] = $href;
                    }
                }
            }
        }
    }

    if (!$entry_js) {
        echo "<!-- niveau-theme: no entry JS found (manifest/index.html missing). -->";
        return;
    }

    // Enqueue CSS files
    $i = 0;
    foreach (array_unique($entry_css) as $css) {
        $css = ltrim($css, '/');
        wp_enqueue_style('niveau-style-' . $i, $dist_uri . '/' . $css, [], null);
        $i++;
    }

    // Enqueue JS as module
    $entry_js = ltrim($entry_js, '/');
    wp_enqueue_script('niveau-app', $dist_uri . '/' . $entry_js, [], null, true);
}
add_action('wp_enqueue_scripts', 'niveau_enqueue_assets');

// Ensure our main script is loaded as type="module"
add_filter('script_loader_tag', function ($tag, $handle, $src) {
    if ($handle === 'niveau-app') {
        return '<script type="module" src="' . esc_url($src) . '" id="' . esc_attr($handle) . '-js"></script>';
    }
    return $tag;
}, 10, 3);

// Inject import map and other preconnect/head extras from dist/index.html so external deps resolve
add_action('wp_head', function () {
    $theme_dir = get_stylesheet_directory();
    $index_html = $theme_dir . '/dist/index.html';
    if (!file_exists($index_html)) {
        return;
    }
    $html = file_get_contents($index_html);
    if (!is_string($html)) {
        return;
    }
    if (preg_match('/<script[^>]*type=\"importmap\"[^>]*>[\s\S]*?<\/script>/i', $html, $m)) {
        echo $m[0];
    }
    if (preg_match_all('/<link[^>]*rel=\"preconnect\"[^>]*>/i', $html, $links)) {
        foreach ($links[0] as $linkTag) {
            echo $linkTag;
        }
    }
    if (preg_match('/<script[^>]*src=\"https:\/\/cdn\.tailwindcss\.com[^\"]*\"[^>]*><\/script>/i', $html, $tw)) {
        echo $tw[0];
    }
}, 5);

// Theme supports
add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
});

