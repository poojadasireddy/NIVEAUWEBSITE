import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const rootDir = path.resolve(process.cwd());
const distDir = path.join(rootDir, 'dist');
const themeDir = path.join(rootDir, 'wp-theme');
const themeDistDir = path.join(themeDir, 'dist');
const outZip = path.join(rootDir, 'niveau-technologies-theme.zip');

function rimraf(targetPath) {
  if (fs.existsSync(targetPath)) {
    fs.rmSync(targetPath, { recursive: true, force: true });
  }
}

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(s, d);
    } else if (entry.isFile()) {
      fs.copyFileSync(s, d);
    }
  }
}

function main() {
  if (!fs.existsSync(themeDir)) {
    throw new Error('wp-theme directory not found');
  }
  if (!fs.existsSync(distDir)) {
    throw new Error('dist directory not found. Run "npm run build" first.');
  }

  // Clean previous dist inside theme
  rimraf(themeDistDir);
  fs.mkdirSync(themeDistDir, { recursive: true });

  // Copy build output into theme/dist
  copyRecursive(distDir, themeDistDir);

  // Create zip
  if (fs.existsSync(outZip)) fs.unlinkSync(outZip);

  const cwd = rootDir;
  // Cross-platform zip using Powershell on Windows, zip on Unix
  try {
    if (process.platform === 'win32') {
      const ps = `Compress-Archive -Path "${themeDir}/*" -DestinationPath "${outZip}" -Force`;
      execSync(`powershell -NoLogo -NoProfile -Command "${ps}"`, { stdio: 'inherit', cwd });
    } else {
      execSync(`zip -r "${outZip}" "wp-theme"`, { stdio: 'inherit', cwd });
    }
  } catch (e) {
    console.error('Failed to create zip. Ensure zip or PowerShell Compress-Archive is available.');
    throw e;
  }

  console.log('Theme packaged at:', outZip);
}

main();


