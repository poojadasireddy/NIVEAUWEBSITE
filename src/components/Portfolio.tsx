import React from 'react';
import type { PortfolioItem } from '../types';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
const portfolioData: PortfolioItem[] = [{
  imageUrl: 'https://picsum.photos/seed/work1/500/700',
  quote: 'Niveau turned our vision into reality. Instant, personalized feedback changed student learning forever.',
  author: 'Sujith Reddy Gopu'
}, {
  imageUrl: 'https://picsum.photos/seed/work2/500/500',
  quote: 'We thought it was impossible. Niveau made it possible and changed how we see tech partners.',
  author: 'Narasimha Reddy'
}, {
  imageUrl: 'https://picsum.photos/seed/work3/500/600',
  quote: 'Niveau met our most ambitious requirements. Their team became a trusted extension, not just a vendor.',
  author: 'Abhishek'
}, {
  imageUrl: 'https://picsum.photos/seed/work4/500/800',
  quote: 'Proud to be your trusted partner.',
  author: 'Niveau'
}, {
  imageUrl: 'https://picsum.photos/seed/work5/500/600',
  quote: 'Grateful to set new standards together.',
  author: 'Niveau'
}, {
  imageUrl: 'https://picsum.photos/seed/work6/500/400',
  quote: 'Honored to drive lasting impact.',
  author: 'Niveau'
}];
const PortfolioCard: React.FC<{
  item: PortfolioItem;
}> = ({
  item
}) => <div className="mb-4 break-inside-avoid bg-white rounded-2xl shadow-sm overflow-hidden group hover-lift hover-glow hover-pop-border scroll-scale">
    <div className="overflow-hidden hover-image-zoom">
        <img src={item.imageUrl} alt={item.author} className="w-full h-auto object-cover" />
    </div>
    <div className="p-6">
      <p className="text-zinc-700">"{item.quote}"</p>
      <p className="mt-4 font-semibold text-zinc-900">- {item.author}</p>
    </div>
  </div>;
const Portfolio: React.FC = () => {
  const heroAnimation = useScrollAnimation({ delay: 100 });
  const gridAnimation = useStaggeredAnimation(portfolioData.length, 100);
  return (
    <section id="our-work" className="py-20 md:py-32 geometric-bg relative theme-purple">
      <div className="container mx-auto px-4">
        <div
          ref={heroAnimation.elementRef}
          className={`text-center mb-12 scroll-hidden ${heroAnimation.isVisible ? 'scroll-visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800">Our Work</h2>
          <p className="text-zinc-600 mt-3">Snapshots from recent projects and partnerships</p>
        </div>

        <div
          ref={gridAnimation.containerRef}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]"
        >
          {portfolioData.map((item, index) => (
            <div key={index} className={gridAnimation.visibleItems.has(index) ? 'scroll-visible' : ''}>
              <PortfolioCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;