import React, { useEffect, useRef } from 'react';

const WhoWeAre: React.FC = () => {
  // Refs to target elements for animation
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  // useEffect hook to set up the Intersection Observer
  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;

    // Graceful fallback for browsers that do not support Intersection Observer.
    if (!('IntersectionObserver' in window) || !section || !heading || !paragraph) {
      heading?.classList.add('is-visible');
      paragraph?.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heading.classList.add('is-visible');
            paragraph.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    // Cleanup observer on component unmount
    return () => {
      observer.unobserve(section);
    };
  }, []);

  return (
    <>
      <style>{`
        .who-we-are-heading,
        .who-we-are-paragraph {
          opacity: 0;
          will-change: transform, opacity;
          transition: transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      opacity 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .who-we-are-heading {
          transform: translate3d(-100px, 0, 0);
        }

        .who-we-are-paragraph {
          transform: translate3d(100px, 0, 0);
          transition-delay: 250ms;
        }

        .who-we-are-heading.is-visible,
        .who-we-are-paragraph.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        @media (prefers-reduced-motion: reduce) {
          .who-we-are-heading,
          .who-we-are-paragraph {
            transition: none;
            opacity: 1;
            transform: none;
          }
        }
        
        /* 
          Design Decision:
          - A pseudo-element creates a subtle, professional background pattern.
          - The thin diagonal lines symbolize connection and progress, fitting for a client services company.
          - It's created using a data URI SVG for performance (no extra HTTP requests).
          - The color and opacity are chosen to be minimal and not distract from the main content.
        */
        #who-we-are::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3e%3cline x1='0' y1='40' x2='40' y2='0' stroke='%23d4d4d8' stroke-width='1' /%3e%3c/svg%3e");
          background-repeat: repeat;
          background-size: 40px 40px;
          opacity: 0.5;
          z-index: 0;
        }
      `}</style>
      <section
        ref={sectionRef}
        id="who-we-are"
        className="min-h-screen bg-gradient-to-br from-white to-zinc-100 flex items-center justify-center relative overflow-hidden"
        aria-labelledby="who-we-are-heading"
      >
        <div className="container mx-auto px-5 max-w-4xl text-center relative z-10">
          <h2
            ref={headingRef}
            id="who-we-are-heading"
            className="who-we-are-heading text-6xl md:text-7xl lg:text-8xl font-bold text-zinc-900"
          >
            Who We Are?
          </h2>
          <p
            ref={paragraphRef}
            className="who-we-are-paragraph mt-8 text-xl md:text-2xl text-zinc-700 leading-relaxed"
          >
            We operate at the intersection of strategy and technology. Our expertise is in developing robust, scalable, and AI-powered frameworks that solve the most complex challenges faced by modern enterprises. By integrating artificial intelligence directly into our solutions, we deliver tangible outcomes that drive sustainable growth and create long-term value.
          </p>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;