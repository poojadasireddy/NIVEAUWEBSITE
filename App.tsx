
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import WhoWeAre from './components/WhoWeAre';
import Services from './components/Services';
import Process from './components/Process';
import TestimonialSection from './components/TestimonialSection';
import Challenges from './components/Challenges';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-zinc-50 text-zinc-800 font-sans antialiased">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Clients />
        <WhoWeAre />
        <Services />
        <Process />
        <Portfolio />
        <TestimonialSection />
        <Challenges />
      </main>
      <Footer />
    </div>
  );
};

export default App;
