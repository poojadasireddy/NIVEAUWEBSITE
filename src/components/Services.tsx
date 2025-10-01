import React from 'react';
import type { Service } from '../types';
import ScrollingCards from './ScrollingCards';
const servicesData: Service[] = [{
  title: 'Brand Marketing',
  images: ['/brand marketing.jpg', '/niveau-logo.png']
}, {
  title: 'Business Strategy',
  images: ['/business strategy.jpg', '/niveau-logo.png']
}, {
  title: 'Financial Planning',
  images: ['/financial planning.jpg', '/niveau-logo.png']
}, {
  title: 'Growth Strategy',
  images: ['/growth strategy.jpg', '/niveau-logo.png']
}, {
  title: 'IT Consulting',
  images: ['/IT councelling.jpg', '/niveau-logo.png']
}, {
  title: 'Project Management',
  images: ['/project management.jpg', '/niveau-logo.png']
}, {
  title: 'Blockchain Technology',
  images: ['/niveau-logo.png', '/niveau-logo.png']
}, {
  title: 'Rapid Prototyping and MVPs',
  images: ['/niveau-logo.png', '/niveau-logo.png']
}, {
  title: 'Digital Marketing & SEO',
  images: ['/niveau-logo.png', '/niveau-logo.png']
}];
const ServiceCard: React.FC<{
  service: Service;
}> = ({
  service
}) => <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
    <div className="relative h-32 w-full flex justify-center items-center mb-4">
      <img src={service.images[0]} alt={service.title} className="absolute w-40 h-auto object-cover rounded-lg shadow-md transform -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
      <img src={service.images[1]} alt={service.title} className="absolute w-40 h-auto object-cover rounded-lg shadow-lg transform rotate-6 group-hover:rotate-0 transition-transform duration-300" />
    </div>
    <h3 className="mt-4 font-semibold text-lg text-zinc-800">{service.title}</h3>
  </div>;
const Services: React.FC = () => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const sectionRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    const section = sectionRef.current;
    const button = buttonRef.current;
    if (!('IntersectionObserver' in window) || !section || !button) {
      button?.classList.add('is-visible');
      return;
    }
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          button.classList.add('is-visible');
        } else {
          button.classList.remove('is-visible');
          button.classList.add('is-exiting');
          setTimeout(() => {
            button.classList.remove('is-exiting');
          }, 800);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -20% 0px' });
    observer.observe(section);
    return () => observer.unobserve(section);
  }, []);
  return <>
    <style>{`
      .services-cta-btn {
        opacity: 0;
        transform: translate3d(0, 80px, 0) scale(0.8);
        transition: transform 800ms cubic-bezier(0.165, 0.84, 0.44, 1), opacity 800ms cubic-bezier(0.165, 0.84, 0.44, 1);
        transition-delay: 300ms;
      }
      .services-cta-btn.is-visible {
        opacity: 1;
        transform: translate3d(0, 0, 0) scale(1);
      }
      .services-cta-btn.is-exiting {
        opacity: 0;
        transform: translate3d(0, 60px, 0) scale(0.9);
        transition: transform 600ms cubic-bezier(0.55, 0.055, 0.675, 0.19), opacity 600ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
      @media (prefers-reduced-motion: reduce) {
        .services-cta-btn {
          transition: none;
          opacity: 1;
          transform: none;
        }
      }
    `}</style>
    <section id="services" className="py-20 md:py-28 geometric-bg-horizontal" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-zinc-900 mx-0 text-center">Our <span className="text-[#02446d]">Expertise</span></h2>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-center text-zinc-700">We build intelligent digital solutions that deliver tangible business results. Our expertise combines custom AI and machine learning with expert software development and scalable cloud architecture. We unite this technical strength with strategic product design to create solutions that are powerful, user-friendly, and engineered for long-term value.</p>
          <div className="mt-10">
            <button
              ref={buttonRef}
              className="services-cta-btn inline-block px-8 py-4 bg-[#02446d] text-white font-bold rounded-2xl shadow-lg hover:bg-[#0272b7] transition-colors duration-300 text-xl"
              onClick={() => {
                const contact = document.getElementById('contact');
                if (contact) contact.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <ScrollingCards />
    </section>
  </>;
};
export default Services;