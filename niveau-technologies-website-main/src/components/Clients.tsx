
import React from 'react';
import type { Client } from '../types';

const MachConsultantsLogo: React.FC = () => (
  <svg height="40" viewBox="0 0 125 34" className="text-zinc-500 fill-current">
    <text x="0" y="25" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold">MACH</text>
    <text x="75" y="15" fontFamily="Arial, sans-serif" fontSize="10">CONSULTANTS</text>
    <text x="75" y="28" fontFamily="Arial, sans-serif" fontSize="10">WORLDWIDE</text>
  </svg>
);

const TFSLogo: React.FC = () => (
    <svg height="40" viewBox="0 0 100 40" className="text-zinc-500 fill-current">
        <rect x="0" y="0" width="40" height="40" className="fill-zinc-800" />
        <text x="10" y="28" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="white">TFS</text>
        <text x="45" y="18" fontFamily="Arial" fontSize="12">FINTECH</text>
        <text x="45" y="32" fontFamily="Arial" fontSize="12">SOFTWARE</text>
    </svg>
);

const CrownLogo: React.FC = () => (
    <svg height="40" viewBox="0 0 40 40" className="text-zinc-500 fill-current">
      <path d="M5 15 L10 25 L20 15 L30 25 L35 15 L20 30 Z" className="fill-zinc-800 stroke-zinc-800" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="5" cy="13" r="3" className="fill-zinc-800" />
      <circle cx="20" cy="13" r="3" className="fill-zinc-800" />
      <circle cx="35" cy="13" r="3" className="fill-zinc-800" />
    </svg>
);

const ConquerLogo: React.FC = () => (
    <svg height="40" viewBox="0 0 150 40" className="text-zinc-500 fill-current">
        <circle cx="20" cy="20" r="18" strokeWidth="3" stroke="currentColor" fill="none"/>
        <path d="M20 2 L20 38 M2 20 L38 20" stroke="currentColor" strokeWidth="1"/>
        <text x="50" y="28" fontFamily="serif" fontSize="24" fontWeight="bold">CONQUER</text>
    </svg>
);

const FlashProLogo: React.FC = () => (
    <svg height="40" viewBox="0 0 120 40" className="text-zinc-500 fill-current">
        <text x="40" y="28" fontFamily="sans-serif" fontSize="24" fontWeight="bold">FlashPro</text>
        <path d="M20 5 L5 20 L20 20 L20 35 L35 20 L20 20 Z" fill="currentColor"/>
    </svg>
);


const clients: Client[] = [
  { name: 'FlashPro', logo: <FlashProLogo /> },
  { name: 'MACH Consultants', logo: <MachConsultantsLogo /> },
  { name: 'TFS Fintech', logo: <TFSLogo /> },
  { name: 'Crown', logo: <CrownLogo /> },
  { name: 'Conquer', logo: <ConquerLogo /> },
];

const Clients: React.FC = () => {
  const repeatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-12 bg-white">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {repeatedClients.map((client, index) => (
            <li key={index} className="flex-shrink-0">
              {client.logo}
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
           {repeatedClients.map((client, index) => (
            <li key={index} className="flex-shrink-0">
              {client.logo}
            </li>
          ))}
        </ul>
      </div>
      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Clients;
