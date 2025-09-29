
import React from 'react';

const TestimonialCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`absolute bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-4 text-sm text-zinc-700 max-w-xs ${className}`}>
    <span className="absolute -top-3 -left-3 text-5xl text-zinc-200/50">“</span>
    {children}
  </div>
);

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white shadow-sm rounded-full px-4 py-2 mb-6 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Only 2 open slots available!
          <span className="text-zinc-400">→</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-zinc-900">Welcome to Niveau</h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-zinc-900 mt-2">
          Your Digital <span className="inline-flex items-center gap-2">Success<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-1.42 2.882a1 1 0 01-.762.55l-3.192.464a1 1 0 00-.554 1.705l2.31 2.252a1 1 0 01.287.884l-.546 3.179a1 1 0 001.451 1.054L10 13.4l2.854 1.5a1 1 0 001.451-1.054l-.546-3.179a1 1 0 01.287-.884l2.31-2.252a1 1 0 00-.554-1.705l-3.192-.464a1 1 0 01-.762-.55L10.894 2.553z" /></svg></span> Starts Here
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-600">
          Trusted by startups and enterprises to design, build, and scale products that perform globally.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#" className="flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-zinc-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            Book a 30-Min call
          </a>
        </div>
        
        <div className="mt-8 flex justify-center items-center gap-4">
          <div className="flex -space-x-2">
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/id/1005/100/100" alt="User"/>
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/id/1011/100/100" alt="User"/>
            <div className="h-10 w-10 rounded-full ring-2 ring-white bg-zinc-200 flex items-center justify-center font-semibold text-zinc-600 text-sm">+30</div>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <p className="text-sm text-zinc-500">From 30+ reviews</p>
          </div>
        </div>
        
        {/* Floating Testimonials */}
        <TestimonialCard className="hidden lg:block top-10 left-10 transform -rotate-6">
          "Niveau turned the impossible into possible and redefined our expectations of technology partners."
          <p className="font-bold mt-2">- Narasimha Reddy, CEO, TFS</p>
        </TestimonialCard>
        
        <TestimonialCard className="hidden lg:block top-20 right-10 transform rotate-3">
          "Niveau didn't just help us build our vision - they helped us build our future."
          <p className="font-bold mt-2">- Sujith Reddy Gopu, CEO, Fluent Pro</p>
        </TestimonialCard>
      </div>
    </section>
  );
};

export default Hero;
