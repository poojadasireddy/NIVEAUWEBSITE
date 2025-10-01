
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Services from './components/Services';
import BusinessEfficiency from './components/BusinessEfficiency';
import StrategicPlanning from './components/StrategicPlanning';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import CertifiedTeam from './components/CertifiedTeam';
import SmartSolutions from './components/SmartSolutions';
import ContactSection from './components/ContactSection';
// Removed post-contact modules
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="geometric-bg text-zinc-800 font-sans antialiased">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <WhoWeAre />
        <Services />
        <BusinessEfficiency />
        <StrategicPlanning />
        <AboutUs />
        <WhyChooseUs />
        <CertifiedTeam />
        <SmartSolutions />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
