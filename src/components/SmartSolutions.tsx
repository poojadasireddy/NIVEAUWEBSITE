import React from 'react';
import { Brain, Cpu, Database, Cloud, Smartphone, Shield } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
const SmartSolutions: React.FC = () => {
  const heroAnimation = useScrollAnimation({ delay: 100 });
  const technologyAnimation = useStaggeredAnimation(6, 150);
  const approachAnimation = useStaggeredAnimation(3, 200);
  const metricsAnimation = useStaggeredAnimation(4, 100);

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
    <section className="py-20 md:py-32 geometric-bg relative bg-zinc-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div 
          ref={heroAnimation.elementRef}
          className={`text-center mb-16 scroll-hidden ${heroAnimation.isVisible ? 'scroll-visible' : ''}`}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-zinc-800 mb-6">
            Smart
            <span className="block text-[#02446d]">Solutions</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-zinc-600 max-w-3xl mx-auto">
            Cutting-edge technology offerings and innovative approaches that leverage AI, cloud computing, and advanced analytics to solve complex business challenges.
          </p>
        </div>

        {/* Technology Stack */}
        <div 
          ref={technologyAnimation.containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: Brain,
              title: "AI & Machine Learning",
              description: "Intelligent automation, predictive analytics, and machine learning models that adapt and improve over time.",
              features: ["Predictive Analytics", "Process Automation", "Natural Language Processing", "Computer Vision"]
            },
            {
              icon: Cloud,
              title: "Cloud Solutions",
              description: "Scalable, secure, and cost-effective cloud infrastructure that grows with your business needs.",
              features: ["Multi-Cloud Architecture", "Serverless Computing", "Cloud Migration", "DevOps Integration"]
            },
            {
              icon: Database,
              title: "Data Analytics",
              description: "Transform raw data into actionable insights with advanced analytics and real-time reporting capabilities.",
              features: ["Real-time Dashboards", "Big Data Processing", "Business Intelligence", "Data Visualization"]
            },
            {
              icon: Smartphone,
              title: "Mobile Solutions",
              description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
              features: ["iOS & Android Apps", "Cross-platform Development", "Mobile Analytics", "Offline Capabilities"]
            },
            {
              icon: Shield,
              title: "Cybersecurity",
              description: "Comprehensive security solutions to protect your digital assets and ensure regulatory compliance.",
              features: ["Threat Detection", "Security Audits", "Compliance Management", "Incident Response"]
            },
            {
              icon: Cpu,
              title: "IoT Integration",
              description: "Connect and optimize your devices and systems with Internet of Things technology solutions.",
              features: ["Device Management", "Sensor Networks", "Edge Computing", "Real-time Monitoring"]
            }
          ].map((solution, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-xl border-4 border-[#0272b7] hover-lift hover-glow scroll-scale ${
                technologyAnimation.visibleItems.has(index) ? 'scroll-visible' : ''
              }`}
            >
              <div className="bg-[#02446d]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 hover-scale hover:shadow-[#02446d]/20">
                <solution.icon className="w-8 h-8 text-[#02446d]" />
              </div>
              <h3 className="text-2xl font-semibold text-zinc-800 mb-4">{solution.title}</h3>
              <p className="text-lg text-zinc-600 mb-4">{solution.description}</p>
              <ul className="text-base text-zinc-500 space-y-1">
                {solution.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Innovation Approach */}
          <div 
          ref={approachAnimation.containerRef}
          className="bg-[#0272b7] rounded-3xl p-8 md:p-12 mb-16 scroll-scale scroll-visible shadow-[0_8px_64px_0_rgba(0,0,0,0.7)]"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Innovation Approach</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              {
                step: "01",
                title: "Research & Discovery",
                description: "Deep analysis of your business needs and market opportunities to identify the best technology solutions."
              },
              {
                step: "02",
                title: "Prototype & Test",
                description: "Rapid prototyping and iterative testing to validate concepts before full-scale implementation."
              },
              {
                step: "03",
                title: "Scale & Optimize",
                description: "Seamless deployment and continuous optimization to ensure maximum performance and ROI."
              }
            ].map((approach, index) => (
              <div 
                key={index}
                className={`text-center bg-white rounded-2xl px-8 py-10 scroll-scale hover-scale ${
                  approachAnimation.visibleItems.has(index) ? 'scroll-visible' : ''
                }`}
              >
                <div className="text-4xl font-bold text-[#02446d] mb-4 hover-scale">{approach.step}</div>
                <h4 className="text-xl font-semibold text-zinc-800 mb-3">{approach.title}</h4>
                <p className="text-zinc-600">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
            <div 
          ref={metricsAnimation.containerRef}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { value: "85%", label: "Faster Processing" },
            { value: "60%", label: "Cost Reduction" },
            { value: "99.9%", label: "System Uptime" },
            { value: "24/7", label: "Smart Monitoring" }
          ].map((metric, index) => (
              <div 
              key={index}
                className={`text-center p-6 bg-white border-4 border-[#0272b7] rounded-2xl hover-lift hover-scale scroll-scale hover:shadow-[#02446d]/20 ${
                metricsAnimation.visibleItems.has(index) ? 'scroll-visible' : ''
              }`}
            >
              <div className="text-3xl font-bold text-[#02446d] mb-2">{metric.value}</div>
              <div className="text-zinc-600">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Button with scroll animation */}
        <div className="text-center mt-10" ref={ctaSectionRef}>
          <style>{`
            .smart-cta-btn {
              opacity: 0;
              transform: translate3d(0, 80px, 0) scale(0.8);
              transition: transform 800ms cubic-bezier(0.165, 0.84, 0.44, 1), opacity 800ms cubic-bezier(0.165, 0.84, 0.44, 1);
              transition-delay: 300ms;
            }
            .smart-cta-btn.is-visible {
              opacity: 1;
              transform: translate3d(0, 0, 0) scale(1);
            }
            .smart-cta-btn.is-exiting {
              opacity: 0;
              transform: translate3d(0, 60px, 0) scale(0.9);
              transition: transform 600ms cubic-bezier(0.55, 0.055, 0.675, 0.19), opacity 600ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
            }
            @media (prefers-reduced-motion: reduce) {
              .smart-cta-btn {
                transition: none;
                opacity: 1;
                transform: none;
              }
            }
          `}</style>
          <button
            ref={ctaButtonRef}
            className="smart-cta-btn inline-block px-8 py-4 bg-[#02446d] text-white font-bold rounded-2xl shadow-lg hover:bg-[#0272b7] transition-colors duration-300 text-xl"
            onClick={() => {
              const contact = document.getElementById('contact');
              if (contact) contact.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Solutions
          </button>
        </div>
      </div>
    </section>
  );
};
export default SmartSolutions;