import React from 'react';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';
const challengesData = [{
  icon: '⚡️',
  title: 'Rapid Tech Evolution',
  description: 'Keeping up with the latest technologies and platforms.'
}, {
  icon: '👥',
  title: 'User Experience Gap',
  description: 'Creating intuitive, engaging, and accessible digital products.'
}, {
  icon: '📈',
  title: 'Scaling for Growth',
  description: 'Building robust systems that can handle increasing demand.'
}, {
  icon: '🔒',
  title: 'Data Security & Privacy',
  description: 'Ensuring user data is protected and compliant with regulations.'
}];
const ChallengeCard: React.FC<{
  icon: string;
  title: string;
  description: string;
}> = ({
  icon,
  title,
  description
}) => <div className="p-6 bg-white rounded-2xl shadow-md hover-lift hover-glow scroll-scale">
  <div className="text-3xl mb-3">{icon}</div>
  <h4 className="text-lg font-semibold text-zinc-800 mb-2">{title}</h4>
  <p className="text-zinc-600 text-sm">{description}</p>
</div>;
const Challenges: React.FC = () => {
  const animation = useStaggeredAnimation(challengesData.length, 120);
  return (
    <section className="py-20 md:py-32 geometric-bg relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800">Challenges We Solve</h2>
          <p className="text-zinc-600 mt-3">From scale to security, we have you covered</p>
        </div>

        <div
          ref={animation.containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {challengesData.map((c, index) => (
            <div key={index} className={animation.visibleItems.has(index) ? 'scroll-visible' : ''}>
              <ChallengeCard {...c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Challenges;