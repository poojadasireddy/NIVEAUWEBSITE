import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ServiceCard {
  title: string;
  description: string;
}

const cardsData: ServiceCard[] = [
  {
    title: "Business Strategy",
    description: "Our focus is on deeply understanding customer needs and embedding them into practical business environments. Through succession planning and innovative approaches, we transform goals into realities while ensuring adaptability to evolving markets."
  },
  {
    title: "Financial Planning", 
    description: "We provide comprehensive financial solutions tailored to individual needs. By offering strategic advice, risk reduction methods, and revenue optimization, we guide clients toward sustainable financial growth and stability."
  },
  {
    title: "Project Management",
    description: "Our project management expertise ensures seamless coordination, resource distribution, and timely delivery. With careful planning and flexible execution, we guarantee efficient processes and exceptional outcomes."
  },
  {
    title: "IT Consulting",
    description: "We deliver expert guidance to help businesses leverage technology effectively. Our scalable, secure, and cost-efficient IT solutions are designed to align with your business goals and drive digital transformation."
  },
  {
    title: "Brand Strategy",
    description: "We strengthen and build unique brand identities that resonate with audiences. Our strategic branding solutions enhance recognition, trust, and long-term business growth."
  },
  {
    title: "Growth Strategy", 
    description: "Through detailed market analysis and opportunity identification, we design and implement growth roadmaps that ensure long-term business success and competitive advantage."
  }
];

const ScrollingCards: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1.5; // Increased speed for better visibility

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset scroll position when reaching the end
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation after a brief delay
    const timer = setTimeout(() => {
      animationId = requestAnimationFrame(animate);
    }, 1000); // Reduced delay

    // Pause animation on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth / 2;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Double the cards for infinite scroll effect
  const doubledCards = [...cardsData, ...cardsData];

  return (
    <div 
      ref={containerRef}
      className="relative w-full bg-gradient-to-b from-zinc-50 to-white py-16 md:py-20 opacity-0 translate-y-8 transition-all duration-1000 overflow-hidden"
    >
      {/* Background decoration for visual movement reference */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-100/50 via-transparent to-zinc-100/50 opacity-30"></div>
      {/* Navigation Arrows */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6 text-zinc-700" />
      </button>
      
      <button
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6 text-zinc-700" />
      </button>

      {/* Scrolling Container */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-hidden px-4 md:px-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {doubledCards.map((card, index) => (
          <div
            key={`${card.title}-${index}`}
            className="flex-none w-[400px] md:w-[480px] bg-white rounded-2xl shadow-lg transition-all duration-300 p-10 border border-zinc-100 hover-scale hover-pop-border"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
              backdropFilter: 'blur(10px)'
            }}
          >
            {/* Show actual image from public folder based on card title */}
            <div className="w-full h-48 bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-xl mb-8 relative overflow-hidden hover-pop-border">
              {(() => {
                const imageMap: Record<string, string> = {
                  'Brand Strategy': '/brand marketing.jpg',
                  'Business Strategy': '/business strategy.jpg',
                  'Financial Planning': '/financial planning.jpg',
                  'Growth Strategy': '/growth strategy.jpg',
                  'IT Consulting': '/IT councelling.jpg',
                  'Project Management': '/project management.jpg',
                };
                const imgSrc = imageMap[card.title];
                return imgSrc ? (
                  <img src={imgSrc} alt={card.title} className="absolute inset-0 w-full h-full object-cover rounded-xl" />
                ) : (
                  <img src="/niveau-logo.png" alt="Niveau Logo" className="absolute inset-0 w-full h-full object-contain opacity-60" />
                );
              })()}
            </div>
            
            <h3 className="text-2xl font-bold text-zinc-900 mb-4 bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text">
              {card.title}
            </h3>
            
            <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ScrollingCards;