import React from 'react';
import { Shield, Clock, Trophy, ThumbsUp, Zap, Users } from 'lucide-react';
const WhyChooseUs: React.FC = () => {
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
    <section id="why-us" className="py-20 md:py-32 geometric-bg-diagonal-right relative bg-zinc-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-zinc-800 mb-6">
            Why Choose
            <span className="block text-[#02446d]">Niveau Technologies?</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-zinc-600 max-w-3xl mx-auto">
            We build enduring partnerships by combining deep industry expertise with a disciplined approach to solving the complex challenges that matter most to our clients' success.
          </p>
        </div>

        {/* Main Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          <div className="group h-full">
            <div className="flex h-full items-start space-x-4 animate-fade-in bg-white rounded-2xl p-6 border-4 border-[#02446d] transition-all duration-300 group-hover:border-0 min-h-[200px]">
              <div className="bg-[#02446d]/10 p-3 rounded-lg hover-scale hover:shadow-[#02446d]/20">
                <Trophy className="w-6 h-6 text-[#02446d]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-800 mb-2">Strategic Partnership</h3>
                <p className="text-zinc-600">We work alongside our clients as a unified team, aligning our expertise with their strategic vision to achieve shared success.</p>
              </div>
            </div>
          </div>
          <div className="group h-full">
            <div className="flex h-full items-start space-x-4 animate-fade-in bg-white rounded-2xl p-6 border-4 border-[#02446d] transition-all duration-300 group-hover:border-0 min-h-[200px]">
              <div className="bg-[#02446d]/10 p-3 rounded-lg hover-scale hover:shadow-[#02446d]/20">
                <Zap className="w-6 h-6 text-[#02446d]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-800 mb-2">Value Creation</h3>
                <p className="text-zinc-600">Our primary measure of success is the tangible, long-term value we create for our clients' businesses and their customers.</p>
              </div>
            </div>
          </div>
          <div className="group h-full">
            <div className="flex h-full items-start space-x-4 animate-fade-in bg-white rounded-2xl p-6 border-4 border-[#02446d] transition-all duration-300 group-hover:border-0 min-h-[200px]">
              <div className="bg-[#02446d]/10 p-3 rounded-lg hover-scale hover:shadow-[#02446d]/20">
                <Shield className="w-6 h-6 text-[#02446d]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-800 mb-2">Executional Excellence</h3>
                <p className="text-zinc-600">Our reputation is built on a disciplined process that ensures quality, reliability, and measurable impact in every engagement.</p>
              </div>
            </div>
          </div>
          <div className="group h-full">
            <div className="flex h-full items-start space-x-4 animate-fade-in bg-white rounded-2xl p-6 border-4 border-[#02446d] transition-all duration-300 group-hover:border-0 min-h-[200px]">
              <div className="bg-[#02446d]/10 p-3 rounded-lg hover-scale hover:shadow-[#02446d]/20">
                <Clock className="w-6 h-6 text-[#02446d]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-800 mb-2">Digital Innovation</h3>
                <p className="text-zinc-600">We explore and apply emerging technologies to create new value streams and competitive advantages, helping our partners lead change.</p>
              </div>
            </div>
          </div>
          <div className="group h-full">
            <div className="flex h-full items-start space-x-4 animate-fade-in bg-white rounded-2xl p-6 border-4 border-[#02446d] transition-all duration-300 group-hover:border-0 min-h-[200px]">
              <div className="bg-[#02446d]/10 p-3 rounded-lg hover-scale hover:shadow-[#02446d]/20">
                <Users className="w-6 h-6 text-[#02446d]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-800 mb-2">Corporate Integrity</h3>
                <p className="text-zinc-600">Every decision is guided by a commitment to ethical principles and a deep sense of responsibility to our clients and communities.</p>
              </div>
            </div>
          </div>
          <div className="group h-full">
            <div className="flex h-full items-start space-x-4 animate-fade-in bg-white rounded-2xl p-6 border-4 border-[#02446d] transition-all duration-300 group-hover:border-0 min-h-[200px]">
              <div className="bg-[#02446d]/10 p-3 rounded-lg hover-scale hover:shadow-[#02446d]/20">
                <ThumbsUp className="w-6 h-6 text-[#02446d]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-800 mb-2">Long-Term Vision</h3>
                <p className="text-zinc-600">We focus on building resilient, secure, and future-proof solutions that provide lasting value, not just short-term fixes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Stats */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16 animate-scale-in hover-pop-border">
          <h3 className="text-3xl font-bold text-zinc-800 text-center mb-12">Success Stories by Numbers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#02446d] mb-4">40%</div>
              <div className="text-lg font-semibold text-zinc-800 mb-2">Average Efficiency Increase</div>
              <div className="text-zinc-600">Clients report significant productivity improvements within 3 months</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#02446d] mb-4">95%</div>
              <div className="text-lg font-semibold text-zinc-800 mb-2">Goal Achievement Rate</div>
              <div className="text-zinc-600">Strategic objectives met within planned timelines</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#02446d] mb-4">6 Months</div>
              <div className="text-lg font-semibold text-zinc-800 mb-2">Average ROI Timeline</div>
              <div className="text-zinc-600">Most clients see full return on investment within 6 months</div>
            </div>
          </div>
        </div>

        {/* Industries Served */}

        {/* CTA Button with scroll animation */}
        <div className="text-center mt-10" ref={ctaSectionRef}>
          <style>{`
            .whyus-cta-btn {
              opacity: 0;
              transform: translate3d(0, 80px, 0) scale(0.8);
              transition: transform 800ms cubic-bezier(0.165, 0.84, 0.44, 1), opacity 800ms cubic-bezier(0.165, 0.84, 0.44, 1);
              transition-delay: 300ms;
            }
            .whyus-cta-btn.is-visible {
              opacity: 1;
              transform: translate3d(0, 0, 0) scale(1);
            }
            .whyus-cta-btn.is-exiting {
              opacity: 0;
              transform: translate3d(0, 60px, 0) scale(0.9);
              transition: transform 600ms cubic-bezier(0.55, 0.055, 0.675, 0.19), opacity 600ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
            }
            @media (prefers-reduced-motion: reduce) {
              .whyus-cta-btn {
                transition: none;
                opacity: 1;
                transform: none;
              }
            }
          `}</style>
          <button
            ref={ctaButtonRef}
            className="whyus-cta-btn inline-block px-8 py-4 bg-[#02446d] text-white font-bold rounded-2xl shadow-lg hover:bg-[#0272b7] transition-colors duration-300 text-xl"
            onClick={() => {
              const contact = document.getElementById('contact');
              if (contact) contact.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See Why
          </button>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;