import React, { useEffect, useRef } from 'react';

const WhoWeAre: React.FC = () => {
  // Refs to target elements for animation
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // useEffect hook to set up the Intersection Observer
  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    const button = buttonRef.current;

    // Graceful fallback for browsers that do not support Intersection Observer.
    if (!('IntersectionObserver' in window) || !section || !heading || !paragraph || !button) {
      heading?.classList.add('is-visible');
      paragraph?.classList.add('is-visible');
      button?.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heading.classList.add('is-visible');
            paragraph.classList.add('is-visible');
            button.classList.add('is-visible');
          } else {
            // Add exit animations when leaving viewport
            heading.classList.remove('is-visible');
            paragraph.classList.remove('is-visible');
            button.classList.remove('is-visible');
            heading.classList.add('is-exiting');
            paragraph.classList.add('is-exiting');
            button.classList.add('is-exiting');

            // Remove exit class after animation
            setTimeout(() => {
              heading.classList.remove('is-exiting');
              paragraph.classList.remove('is-exiting');
              button.classList.remove('is-exiting');
            }, 800);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -20% 0px'
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
        .who-we-are-paragraph,
        .who-we-are-button {
          opacity: 0;
          will-change: transform, opacity;
          transition: transform 800ms cubic-bezier(0.165, 0.84, 0.44, 1),
                      opacity 800ms cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .who-we-are-heading {
          transform: translate3d(-150px, 0, 0) scale(0.8);
          transition-delay: 200ms;
        }

        .who-we-are-paragraph {
          transform: translate3d(150px, 0, 0) scale(0.8);
          transition-delay: 500ms;
        }

        .who-we-are-button {
          transform: translate3d(0, 80px, 0) scale(0.8);
          transition-delay: 700ms;
        }

        .who-we-are-heading.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
        }

        .who-we-are-paragraph.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
        }

        .who-we-are-button.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
        }

        /* Exit animations */
        .who-we-are-heading.is-exiting {
          opacity: 0;
          transform: translate3d(-100px, -50px, 0) scale(0.9);
          transition: transform 600ms cubic-bezier(0.55, 0.055, 0.675, 0.19),
                      opacity 600ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }

        .who-we-are-paragraph.is-exiting {
          opacity: 0;
          transform: translate3d(100px, -50px, 0) scale(0.9);
          transition: transform 600ms cubic-bezier(0.55, 0.055, 0.675, 0.19),
                      opacity 600ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
          transition-delay: 200ms;
        }

        .who-we-are-button.is-exiting {
          opacity: 0;
          transform: translate3d(0, 60px, 0) scale(0.9);
          transition: transform 600ms cubic-bezier(0.55, 0.055, 0.675, 0.19),
                      opacity 600ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
          transition-delay: 400ms;
        }

        @media (prefers-reduced-motion: reduce) {
          .who-we-are-heading,
          .who-we-are-paragraph,
          .who-we-are-button {
            transition: none;
            opacity: 1;
            transform: none;
          }
        }
        
        /* Removed conflicting background pattern to avoid overlap */
      `}</style>
      <section
        ref={sectionRef}
        id="who-we-are"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        aria-labelledby="who-we-are-heading"
        style={{background: 'linear-gradient(120deg, #e3f2fd 0%, #b3e5fc 100%)'}}
      >
        <div className="container mx-auto px-5 max-w-4xl text-center relative z-10">
          <h2
            ref={headingRef}
            id="who-we-are-heading"
            className="who-we-are-heading text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-900 leading-tight"
          >
            Who We <span className="text-[#0272b7]">Are</span>?
          </h2>
          <p
            ref={paragraphRef}
            className="who-we-are-paragraph mt-6 text-lg md:text-xl lg:text-2xl text-black leading-relaxed"
          >
            We operate at the intersection of strategy and technology. Our expertise is in developing robust, scalable, and AI-powered frameworks that solve the most complex challenges faced by modern enterprises. By integrating artificial intelligence directly into our solutions, we deliver tangible outcomes that drive sustainable growth and create long-term value.
          </p>
          <div className="mt-10">
            <button
              ref={buttonRef}
              className="who-we-are-button inline-block px-8 py-4 bg-[#0272b7] text-white font-bold rounded-2xl shadow-lg hover:bg-[#02446d] transition-colors duration-300 text-xl"
              onClick={() => {
                const contact = document.getElementById('contact');
                if (contact) contact.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;