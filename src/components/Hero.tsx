import React from 'react';

const TestimonialCard: React.FC<{ children: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ children, className, style }) => (
  <div className={`absolute bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-4 text-sm text-zinc-700 max-w-xs animate-float ${className}`} style={style}>
    <span className="absolute -top-3 -left-3 text-5xl text-zinc-200/50">"</span>
    {children}
  </div>
);

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-zinc-900">Where <span style={{color:'#0A4F6D'}}>Vision</span> Meets<br></br> <span style={{color:'#0078D4'}}>Flawless Execution.</span></h1>
        <p className="mt-6 max-w-3xl mx-auto text-xl text-black">
          At Niveau Technologies, we believe great ideas deserve brilliant technology. We are more than a development agency we are a dedicated partner in your success, committed to transforming complex challenges into elegant, high-performance digital products.
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-xl text-black">
          Because at Niveau, it’s not just about building software it's about building the engine for your global growth.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#contact" className="flex items-center gap-2 bg-[#0272b7] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#02446d] transition-colors hover-lift hover-glow">
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
      </div>
    </section>
  );
};

export default Hero;