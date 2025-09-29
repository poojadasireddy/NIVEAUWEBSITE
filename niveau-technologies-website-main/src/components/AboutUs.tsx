import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const AboutUs: React.FC = () => {
  const heroAnimation = useScrollAnimation({ delay: 100 });
  const storyAnimation = useScrollAnimation({ delay: 150 });
  const valuesAnimation = useStaggeredAnimation(4, 120);
  const statsAnimation = useStaggeredAnimation(4, 120);
  const ctaAnimation = useScrollAnimation({ delay: 150 });
  return (
    <section id="about" className="py-20 md:py-32 relative min-h-screen overflow-hidden" style={{background: 'linear-gradient(120deg, #e3f2fd 0%, #b3e5fc 100%)'}}>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div
          ref={heroAnimation.elementRef}
          className={`text-center mb-16 scroll-hidden border-4 border-blue-300 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg px-14 py-14 max-w-5xl mx-auto ${heroAnimation.isVisible ? 'scroll-visible' : ''}`}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-zinc-800 mb-6">
            About
            <span className="block text-[#0272b7]">Niveau Technologies</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-zinc-600 max-w-3xl mx-auto">
            A cutting-edge technology solutions provider dedicated to transforming businesses through innovation, efficiency, and strategic excellence.
          </p>
        </div>

        {/* Company Story */}
        <div
          ref={storyAnimation.elementRef}
          className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl mb-16 scroll-scale border-4 border-blue-300 ${storyAnimation.isVisible ? 'scroll-visible' : ''}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-8">Our Commitment</h3>
              <p className="text-base md:text-lg lg:text-xl text-black mb-4">
                Guided by a commitment to delivering excellence, Niveau Technologies was founded to bridge the gap between technology and business success. Our purpose is to be a trusted global partner, empowering organizations to achieve unprecedented efficiency and growth.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-black mb-4">
                We operate at the intersection of strategy and technology, delivering innovative and scalable solutions that create long-term value. Our expert team turns complexity into opportunity, enabling our clients to enhance productivity and drive meaningful, sustainable change.
              </p>
              <div className="flex items-center space-x-4 text-[#0272b7] font-semibold">
                <Heart className="w-5 h-5" />
                <span>"Customer First" - Our Guiding Motto</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#0272b7]/5 p-6 rounded-2xl border-4 border-blue-200">
                <h4 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-3">Vision</h4>
                <p className="text-base md:text-lg lg:text-xl text-black">To be the global leader in business transformation technology, empowering organizations to achieve unprecedented efficiency and growth.</p>
              </div>
              
              <div className="bg-[#0272b7]/5 p-6 rounded-2xl border-4 border-blue-200">
                <h4 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-3">Mission</h4>
                <p className="text-base md:text-lg lg:text-xl text-black">Delivering innovative, scalable solutions that streamline operations, enhance productivity, and drive sustainable business success.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-zinc-800 text-center mb-12">Core Values</h3>
          <div
            ref={valuesAnimation.containerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <div className="group">
              <div className={`flex flex-col items-center justify-center text-center bg-white border-4 border-[#0272b7] rounded-2xl px-8 py-8 shadow-lg transition-all duration-300 group-hover:border-0 ${valuesAnimation.visibleItems.has(0) ? 'scroll-visible' : ''}`}>
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-[#e3f2fd] rounded-full w-20 h-20 flex items-center justify-center">
                    <Users className="w-10 h-10 text-[#0272b7]" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-zinc-800 mb-3">Collaboration</h4>
                <p className="text-zinc-600 text-base">Working together to achieve exceptional results</p>
              </div>
            </div>
            
            <div className="group">
              <div className={`flex flex-col items-center justify-center text-center bg-white border-4 border-[#0272b7] rounded-2xl px-8 py-8 shadow-lg transition-all duration-300 group-hover:border-0 ${valuesAnimation.visibleItems.has(1) ? 'scroll-visible' : ''}`}>
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-[#e3f2fd] rounded-full w-20 h-20 flex items-center justify-center">
                    <Award className="w-10 h-10 text-[#0272b7]" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-zinc-800 mb-3">Excellence</h4>
                <p className="text-zinc-600 text-base">Commitment to the highest standards of quality</p>
              </div>
            </div>
            
            <div className="group">
              <div className={`flex flex-col items-center justify-center text-center bg-white border-4 border-[#0272b7] rounded-2xl px-8 py-8 shadow-lg transition-all duration-300 group-hover:border-0 ${valuesAnimation.visibleItems.has(2) ? 'scroll-visible' : ''}`}>
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-[#e3f2fd] rounded-full w-20 h-20 flex items-center justify-center">
                    <Globe className="w-10 h-10 text-[#0272b7]" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-zinc-800 mb-3">Innovation</h4>
                <p className="text-zinc-600 text-base">Pioneering solutions for tomorrow's challenges</p>
              </div>
            </div>
            
            <div className="group">
              <div className={`flex flex-col items-center justify-center text-center bg-white border-4 border-[#0272b7] rounded-2xl px-8 py-8 shadow-lg transition-all duration-300 group-hover:border-0 ${valuesAnimation.visibleItems.has(3) ? 'scroll-visible' : ''}`}>
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-[#e3f2fd] rounded-full w-20 h-20 flex items-center justify-center">
                    <Heart className="w-10 h-10 text-[#0272b7]" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-zinc-800 mb-3">Integrity</h4>
                <p className="text-zinc-600 text-base">Transparent, honest, and ethical in all we do</p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-white rounded-2xl border-4 border-blue-200 shadow-lg px-10 py-10 mt-8 mb-8">
          <div
            ref={statsAnimation.containerRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div className={`hover-scale scroll-slide-left ${statsAnimation.visibleItems.has(0) ? 'scroll-visible' : ''}`}>
              <div className="text-3xl font-bold text-[#0272b7] mb-2">2000+</div>
              <div className="text-zinc-600">Successful Projects</div>
            </div>
            <div className={`hover-scale scroll-scale ${statsAnimation.visibleItems.has(1) ? 'scroll-visible' : ''}`}>
              <div className="text-3xl font-bold text-[#0272b7] mb-2">99.9%</div>
              <div className="text-zinc-600">Client Satisfaction</div>
            </div>
            <div className={`hover-scale scroll-scale ${statsAnimation.visibleItems.has(2) ? 'scroll-visible' : ''}`}>
              <div className="text-3xl font-bold text-[#0272b7] mb-2">15+</div>
              <div className="text-zinc-600">Industries Served</div>
            </div>
            <div className={`hover-scale scroll-slide-right ${statsAnimation.visibleItems.has(3) ? 'scroll-visible' : ''}`}>
              <div className="text-3xl font-bold text-[#0272b7] mb-2">24/7</div>
              <div className="text-zinc-600">Support Available</div>
            </div>
          </div>
        </div>

        {/* CTA Button with scroll animation */}
        <div
          ref={ctaAnimation.elementRef}
          className={`text-center scroll-scale mt-12 ${ctaAnimation.isVisible ? 'scroll-visible' : ''}`}
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-[#0272b7] text-white font-semibold rounded-lg hover:bg-[#0272b7]/80 transition-colors hover-scale hover:shadow-[#0272b7]/20"
          >
            Know More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;