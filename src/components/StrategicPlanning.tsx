import React from 'react';
import { MapPin, Compass, BarChart3, Rocket } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const StrategicPlanning: React.FC = () => {
  const heroAnimation = useScrollAnimation({ delay: 100 });
  const methodologyAnimation = useStaggeredAnimation(4, 120);
  const benefitsAnimation = useStaggeredAnimation(3, 120);
  const ctaAnimation = useScrollAnimation({ delay: 150 });
  return (
    <section className="py-20 md:py-32 geometric-bg-horizontal relative bg-zinc-50 theme-blue">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div
          ref={heroAnimation.elementRef}
          className={`text-center mb-16 scroll-hidden ${heroAnimation.isVisible ? 'scroll-visible' : ''}`}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-zinc-800 mb-6">
            Strategic Planning &
            <span className="block text-[#02446d]">Execution</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-zinc-600 max-w-3xl mx-auto">
            Our Plan Target methodology ensures clear goal-setting, strategic planning, and flawless execution for achieving your business objectives.
          </p>
        </div>

  {/* Plan Target Methodology */}
  <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-[#0272b7] mb-16">
          <h3 className="text-3xl font-bold text-zinc-800 text-center mb-12">Plan Target Excellence</h3>
          
          <div
            ref={methodologyAnimation.containerRef}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            <div className={`text-center scroll-scale ${methodologyAnimation.visibleItems.has(0) ? 'scroll-visible' : ''}`}>
              <div className="bg-[#02446d]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-[#02446d]" />
              </div>
              <h4 className="text-lg font-semibold text-zinc-800 mb-2">Define</h4>
              <p className="text-zinc-600 text-sm">Clear goal identification and scope definition</p>
            </div>
            
            <div className={`text-center scroll-scale ${methodologyAnimation.visibleItems.has(1) ? 'scroll-visible' : ''}`}>
              <div className="bg-[#02446d]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="w-8 h-8 text-[#02446d]" />
              </div>
              <h4 className="text-lg font-semibold text-zinc-800 mb-2">Plan</h4>
              <p className="text-zinc-600 text-sm">Strategic roadmap and resource allocation</p>
            </div>
            
            <div className={`text-center scroll-scale ${methodologyAnimation.visibleItems.has(2) ? 'scroll-visible' : ''}`}>
              <div className="bg-[#02446d]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-[#02446d]" />
              </div>
              <h4 className="text-lg font-semibold text-zinc-800 mb-2">Execute</h4>
              <p className="text-zinc-600 text-sm">Systematic implementation and monitoring</p>
            </div>
            
            <div className={`text-center scroll-scale hover-pop-border ${methodologyAnimation.visibleItems.has(3) ? 'scroll-visible' : ''}`}>
              <div className="bg-[#02446d]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-[#02446d]" />
              </div>
              <h4 className="text-lg font-semibold text-zinc-800 mb-2">Optimize</h4>
              <p className="text-zinc-600 text-sm">Continuous improvement and results analysis</p>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div
          ref={benefitsAnimation.containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <div
            className={`bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-none hover-scale hover-pop-border scroll-slide-left ${benefitsAnimation.visibleItems.has(0) ? 'scroll-visible' : ''}`}
            style={{ border: '4px solid #0272b7' }}
            onMouseEnter={e => e.currentTarget.style.border = '0'}
            onMouseLeave={e => e.currentTarget.style.border = '4px solid #0272b7'}
          >
            <h4 className="text-xl font-semibold text-zinc-800 mb-3">Goal Achievement</h4>
            <p className="text-zinc-600">95% of our clients achieve their strategic objectives within the planned timeline.</p>
          </div>
          
          <div
            className={`bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-none hover-scale hover-pop-border scroll-scale ${benefitsAnimation.visibleItems.has(1) ? 'scroll-visible' : ''}`}
            style={{ border: '4px solid #0272b7' }}
            onMouseEnter={e => e.currentTarget.style.border = '0'}
            onMouseLeave={e => e.currentTarget.style.border = '4px solid #0272b7'}
          >
            <h4 className="text-xl font-semibold text-zinc-800 mb-3">Risk Mitigation</h4>
            <p className="text-zinc-600">Comprehensive risk assessment and mitigation strategies for secure execution.</p>
          </div>
          
          <div
            className={`bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-none hover-scale hover-pop-border scroll-slide-right ${benefitsAnimation.visibleItems.has(2) ? 'scroll-visible' : ''}`}
            style={{ border: '4px solid #0272b7' }}
            onMouseEnter={e => e.currentTarget.style.border = '0'}
            onMouseLeave={e => e.currentTarget.style.border = '4px solid #0272b7'}
          >
            <h4 className="text-xl font-semibold text-zinc-800 mb-3">Scalable Framework</h4>
            <p className="text-zinc-600">Flexible methodology that adapts to organizations of any size and complexity.</p>
          </div>
        </div>

        {/* CTA */}
        <div
          ref={ctaAnimation.elementRef}
          className={`text-center scroll-scale ${ctaAnimation.isVisible ? 'scroll-visible' : ''}`}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-[#02446d] text-white font-semibold rounded-lg hover:bg-[#02446d]/80 transition-colors hover-scale hover:shadow-[#02446d]/20"
          >
            Start Strategic Planning
          </a>
        </div>
      </div>
    </section>
  );
};

export default StrategicPlanning;