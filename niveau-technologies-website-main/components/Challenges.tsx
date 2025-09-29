
import React from 'react';

const challengesData = [
  { icon: '⚡️', title: 'Rapid Tech Evolution', description: 'Keeping up with the latest technologies and platforms.' },
  { icon: '👥', title: 'User Experience Gap', description: 'Creating intuitive, engaging, and accessible digital products.' },
  { icon: '📈', title: 'Scaling for Growth', description: 'Building robust systems that can handle increasing demand.' },
  { icon: '🔒', title: 'Data Security & Privacy', description: 'Ensuring user data is protected and compliant with regulations.' },
];

const ChallengeCard: React.FC<{ icon: string, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
    <div className="text-4xl">{icon}</div>
    <h3 className="mt-4 font-bold text-xl text-zinc-900">{title}</h3>
    <p className="mt-2 text-zinc-600">{description}</p>
  </div>
);

const Challenges: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2">
            The Challenges Modern Businesses Face
          </h2>
          <div className="inline-flex items-center gap-2 bg-zinc-800 text-white px-4 py-2 rounded-full">
            Solutions Beyond Syntax
            <span className="w-2 h-4 bg-white/80 animate-pulse"></span>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {challengesData.map((challenge, index) => (
            <ChallengeCard key={index} {...challenge} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
