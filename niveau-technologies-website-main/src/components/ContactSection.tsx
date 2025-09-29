import React from 'react';
import { Mail, Phone, Send, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContactSection: React.FC = () => {
  const heroAnimation = useScrollAnimation({ delay: 100 });
  const formAnimation = useScrollAnimation({ delay: 200 });
  const infoAnimation = useScrollAnimation({ delay: 300 });

  return (
  <section id="contact" className="py-20 md:py-32 relative min-h-screen overflow-hidden" style={{background: 'linear-gradient(120deg, #b3e5fc 0%, #e3f2fd 100%)'}}>
  <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div 
          ref={heroAnimation.elementRef}
          className={`text-center mb-16 scroll-hidden border-4 border-blue-300 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg px-14 py-14 max-w-5xl mx-auto ${heroAnimation.isVisible ? 'scroll-visible' : ''}`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-800 mb-8">
            Get Started
            <span className="block text-[#0272b7]">Today</span>
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto mb-4">
            Ready to transform your business? Connect with our experts and discover how Niveau Technologies can drive your success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div 
            ref={formAnimation.elementRef}
            className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border-4 border-blue-300 scroll-slide-left ${
              formAnimation.isVisible ? 'scroll-visible' : ''
            }`}
          >
            <h3 className="text-2xl font-bold text-zinc-800 mb-6">Start Your Journey</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">First Name</label>
                <input 
                    type="text" 
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-[#0272b7] focus:border-[#0272b7] transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-[#0272b7] focus:border-[#0272b7] transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-[#0272b7] focus:border-[#0272b7] transition-colors"
                  placeholder="your.email@company.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">Company</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-[#0272b7] focus:border-[#0272b7] transition-colors"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">Service Interest</label>
                <select className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-[#0272b7] focus:border-[#0272b7] transition-colors">
                  <option value="">Select a service</option>
                  <option value="business-efficiency">Business Efficiency Solutions</option>
                  <option value="strategic-planning">Strategic Planning & Execution</option>
                  <option value="smart-solutions">Smart Solutions</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-[#0272b7] focus:border-[#0272b7] transition-colors"
                  placeholder="Tell us about your project and goals..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#0272b7] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#02446d] transition-colors flex items-center justify-center space-x-2 hover-lift hover-glow animate-bounce-subtle"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div 
            ref={infoAnimation.elementRef}
            className={`space-y-8 scroll-slide-right ${infoAnimation.isVisible ? 'scroll-visible' : ''}`}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-blue-300 hover-lift">
              <h3 className="text-2xl font-bold text-zinc-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", primary: "+91 89771 45035" },
                  { icon: Mail, label: "Email", primary: "Info@niveaugroup.com" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4 hover-scale">
                    <div className="bg-[#0272b7]/10 p-3 rounded-lg hover-scale">
                      <contact.icon className="w-6 h-6 text-[#0272b7]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900">{contact.label}</h4>
                      <p className="mt-1 text-black whitespace-pre-line font-medium">{contact.primary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-[#0272b7]/5 to-[#02446d]/5 rounded-3xl p-8 border-4 border-blue-300 hover-lift">
              <h3 className="text-xl font-bold text-zinc-800 mb-4">Quick Actions</h3>
              <div className="space-y-4">
                {[
                  { icon: MessageCircle, text: "Connect with an Expert" },
                  { icon: Phone, text: "Client Support Portal" },
                  { icon: Mail, text: "Explore Our Case Studies" }
                ].map((action, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow hover-lift hover-glow"
                  >
                    <action.icon className="w-5 h-5 text-[#0272b7]" />
                    <span className="font-medium text-zinc-800">{action.text}</span>
                  </a>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;