import React from 'react';
import LightBlueBackground from './LightBlueBackground';
import { CheckCircle, TrendingUp, Target, Zap } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const BusinessEfficiency: React.FC = () => {
  const heroAnimation = useScrollAnimation({ delay: 100 });
  const statsAnimation = useStaggeredAnimation(3, 150);
  const solutionsAnimation = useStaggeredAnimation(4, 200);
  const ctaAnimation = useScrollAnimation({ delay: 300 });

  return (
    <section className="py-20 md:py-32 relative min-h-screen overflow-hidden" style={{background: 'linear-gradient(120deg, #e3f2fd 0%, #b3e5fc 100%)'}}>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div
          ref={heroAnimation.elementRef}
          className={`text-center mb-32 scroll-hidden bg-white bg-opacity-90 rounded-2xl shadow-lg z-10 relative px-14 py-14 max-w-5xl mx-auto ${heroAnimation.isVisible ? 'scroll-visible' : ''}`}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-10 mt-4">
            Business Efficiency
            <span className="block text-[#0272b7]">Solutions</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-zinc-600 max-w-3xl mx-auto mb-4">
            Custom solutions and operational optimization services designed to streamline your business operations and deliver measurable results.
          </p>
        </div>

        {/* Stats Section */}
        <div
          ref={statsAnimation.containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {[ 
            { value: "99.9%", label: "Client Satisfaction Rate" },
            { value: "2000+", label: "Successful Business Cases" },
            { value: "24/7", label: "Customer Support" }
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center p-12 bg-white rounded-2xl shadow-lg border-4 border-blue-200 ${
                statsAnimation.visibleItems.has(index) ? 'scroll-visible' : ''
              }`}
            >
              <div className="text-4xl font-bold text-[#0272b7] mb-2">{stat.value}</div>
              <div className="text-zinc-600">{stat.label}</div>
            </div>
          ))}
        </div>
                    {/* Solutions Grid */}
                    <div
                      ref={solutionsAnimation.containerRef}
                      className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
                    >
                      <div className="space-y-8">
                        {[ 
                          {
                            icon: TrendingUp,
                            title: "Operational Streamlining",
                            description: "Eliminate inefficiencies and optimize workflows to boost productivity by up to 40%."
                          },
                          {
                            icon: Target,
                            title: "Custom Solutions",
                            description: "Tailored business solutions designed specifically for your industry and operational needs."
                          }
                        ].map((solution, index) => (
                          <div
                            key={index}
                            className={`flex items-start space-x-4 scroll-slide-left rounded-2xl border-4 border-blue-300 bg-white px-12 py-10 max-w-3xl mx-auto ${
                              solutionsAnimation.visibleItems.has(index) ? 'scroll-visible' : ''
                            }`}
                          >
                            <div className="bg-[#02446d]/10 p-3 rounded-lg hover-scale hover-pop-border hover:shadow-[#0272b7]/20">
                              <solution.icon className="w-6 h-6 text-[#0272b7]" />
                            </div>
                            <div>
                              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">{solution.title}</h3>
                              <p className="text-lg md:text-xl text-zinc-700">{solution.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-8">
                        {[ 
                          {
                            icon: CheckCircle,
                            title: "Measurable Results",
                            description: "Track performance improvements with detailed analytics and reporting systems."
                          },
                          {
                            icon: Zap,
                            title: "Rapid Implementation",
                            description: "Quick deployment with minimal disruption to your existing operations."
                          }
                        ].map((solution, index) => (
                          <div
                            key={index}
                            className={`flex items-start space-x-4 scroll-slide-right rounded-2xl border-4 border-blue-300 bg-white px-12 py-10 max-w-3xl mx-auto ${
                              solutionsAnimation.visibleItems.has(index) ? 'scroll-visible' : ''
                            }`}
                          >
                            <div className="bg-[#02446d]/10 p-3 rounded-lg hover-scale hover:shadow-[#0272b7]/20">
                              <solution.icon className="w-6 h-6 text-[#0272b7]" />
                            </div>
                            <div>
                              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">{solution.title}</h3>
                              <p className="text-lg md:text-xl text-zinc-700">{solution.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
        {/* CTA */}
        <div
          ref={ctaAnimation.elementRef}
          className={`text-center scroll-scale ${ctaAnimation.isVisible ? 'scroll-visible' : ''}`}
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-[#0272b7] text-white font-semibold rounded-lg hover:bg-[#02446d] transition-colors hover-lift hover-glow animate-bounce-subtle"
          >
            Optimize Your Business Today
          </a>
        </div>
      </div>
    </section>
  );
}

export default BusinessEfficiency;