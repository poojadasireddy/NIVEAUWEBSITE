import React from 'react';
import { GraduationCap, Award, Star, Users, BookOpen, Target } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
const CertifiedTeam: React.FC = () => {
  const heroAnimation = useScrollAnimation({ delay: 100 });
  const statsAnimation = useStaggeredAnimation(4, 150);
  const expertiseAnimation = useStaggeredAnimation(3, 200);
  const commitmentAnimation = useScrollAnimation({ delay: 200 });

  const ctaButtonRef = React.useRef<HTMLButtonElement>(null);
  const ctaSectionRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const section = ctaSectionRef.current;
    const button = ctaButtonRef.current;
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
  return (
    <section className="py-20 md:py-32 relative min-h-screen overflow-hidden" style={{background: 'radial-gradient(circle at 60% 40%, #b3e5fc 0%, #e3f2fd 100%)'}}>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div 
          ref={heroAnimation.elementRef}
          className={`text-center mb-16 scroll-hidden border-4 border-blue-300 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg px-14 py-14 max-w-5xl mx-auto ${heroAnimation.isVisible ? 'scroll-visible' : ''}`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-800 mb-8">
            Certified Expert
            <span className="block text-[#0272b7]">Team</span>
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto mb-4">
            Our greatest asset is our team of dedicated professionals. We translate deep industry knowledge and technical excellence into tangible, long-term value for our clients. We are a destination for top talent dedicated to solving the industry's most complex challenges.
          </p>
        </div>

        {/* Team Stats */}
        <div 
          ref={statsAnimation.containerRef}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { icon: Users, value: "50+", label: "Expert Professionals" },
            { icon: GraduationCap, value: "200+", label: "Certifications Held" },
            { icon: BookOpen, value: "15+", label: "Years Average Experience" },
            { icon: Star, value: "", label: "Commitment to Client Success", description: "Our primary measure of success is the value we create for our partners." }
          ].map((stat, index) => (
            <div 
              key={index}
              className={`text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover-lift hover-glow scroll-scale border-4 border-blue-300 ${
                statsAnimation.visibleItems.has(index) ? 'scroll-visible' : ''
              }`}
            >
              <div className="bg-[#0272b7]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale hover:shadow-[#0272b7]/20">
                <stat.icon className="w-8 h-8 text-[#0272b7]" />
              </div>
              {stat.value ? (
                <div className="text-3xl font-bold text-[#0272b7] mb-2">{stat.value}</div>
              ) : null}
              <div className="text-zinc-600 font-semibold">{stat.label}</div>
              {stat.description ? (
                <div className="text-zinc-600 text-sm mt-1">{stat.description}</div>
              ) : null}
            </div>
          ))}
        </div>

        {/* Expertise Areas */}
        <div 
          ref={expertiseAnimation.containerRef}
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl mb-16 scroll-scale border-4 border-blue-300 scroll-visible"
        >
          <h3 className="text-3xl font-bold text-zinc-800 text-center mb-12">Core Expertise Areas</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Strategic Consulting",
                description: "Business strategy, digital transformation, and organizational optimization specialists."
              },
              {
                icon: GraduationCap,
                title: "Technology Architecture", 
                description: "Cloud architects, system designers, and infrastructure optimization experts."
              },
              {
                icon: Award,
                title: "Process Engineering",
                description: "Business process optimization, automation, and efficiency improvement specialists."
              }
            ].map((expertise, index) => (
              <div 
                key={index}
                className={`text-center p-6 rounded-2xl hover-lift hover-glow scroll-scale ${
                  expertiseAnimation.visibleItems.has(index) ? 'scroll-visible' : ''
                }`}
              >
                <div className="bg-[#0272b7]/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 hover-scale hover:shadow-[#0272b7]/20">
                  <expertise.icon className="w-10 h-10 text-[#0272b7]" />
                </div>
                <h4 className="text-xl font-semibold text-zinc-800 mb-3">{expertise.title}</h4>
                <p className="text-zinc-600 text-sm">{expertise.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        

        {/* Team Commitment */}
        <div 
          ref={commitmentAnimation.elementRef}
          className={`text-center mb-16 scroll-scale hover-scale ${commitmentAnimation.isVisible ? 'scroll-visible' : ''}`}
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_12px_48px_0_rgba(2,68,109,0.7)]">
            <h3 className="text-3xl font-bold text-zinc-800 mb-6">Our Commitment to Excellence</h3>
            <p className="text-lg text-zinc-600 max-w-4xl mx-auto mb-8">
              Every team member undergoes continuous training and certification to stay at the forefront of technology and industry best practices. We invest heavily in our people because we believe that exceptional results come from exceptional talent.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-[#0272b7] font-semibold">
              {["Continuous Learning", "Industry Leadership", "Client Success Focus", "Innovation Mindset"].map((tag, index) => (
                <span 
                  key={index}
                  className="bg-[#e3f2fd] text-[#0272b7] px-4 py-2 rounded-full font-semibold hover-scale hover-glow"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button with scroll animation */}
        <div className="text-center mt-10" ref={ctaSectionRef}>
          <style>{`
            .certified-cta-btn {
              opacity: 0;
              transform: translate3d(0, 80px, 0) scale(0.8);
              transition: transform 800ms cubic-bezier(0.165, 0.84, 0.44, 1), opacity 800ms cubic-bezier(0.165, 0.84, 0.44, 1);
              transition-delay: 300ms;
            }
            .certified-cta-btn.is-visible {
              opacity: 1;
              transform: translate3d(0, 0, 0) scale(1);
            }
            .certified-cta-btn.is-exiting {
              opacity: 0;
              transform: translate3d(0, 60px, 0) scale(0.9);
              transition: transform 600ms cubic-bezier(0.55, 0.055, 0.675, 0.19), opacity 600ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
            }
            @media (prefers-reduced-motion: reduce) {
              .certified-cta-btn {
                transition: none;
                opacity: 1;
                transform: none;
              }
            }
          `}</style>
          <button
            ref={ctaButtonRef}
            className="certified-cta-btn inline-block px-8 py-4 bg-[#0272b7] text-white font-bold rounded-2xl shadow-lg hover:bg-[#02446d] transition-colors duration-300 text-xl"
            onClick={() => {
              const contact = document.getElementById('contact');
              if (contact) contact.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Meet Our Team
          </button>
        </div>
      </div>
    </section>
  );
};
export default CertifiedTeam;