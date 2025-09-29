
import React from 'react';
import type { PortfolioItem } from '../types';

const portfolioData: PortfolioItem[] = [
  { imageUrl: 'https://picsum.photos/seed/work1/500/700', quote: 'Niveau turned our vision into reality. Instant, personalized feedback changed student learning forever.', author: 'Sujith Reddy Gopu' },
  { imageUrl: 'https://picsum.photos/seed/work2/500/500', quote: 'We thought it was impossible. Niveau made it possible and changed how we see tech partners.', author: 'Narasimha Reddy' },
  { imageUrl: 'https://picsum.photos/seed/work3/500/600', quote: 'Niveau met our most ambitious requirements. Their team became a trusted extension, not just a vendor.', author: 'Abhishek' },
  { imageUrl: 'https://picsum.photos/seed/work4/500/800', quote: 'Proud to be your trusted partner.', author: 'Niveau' },
  { imageUrl: 'https://picsum.photos/seed/work5/500/600', quote: 'Grateful to set new standards together.', author: 'Niveau' },
  { imageUrl: 'https://picsum.photos/seed/work6/500/400', quote: 'Honored to drive lasting impact.', author: 'Niveau' },
];

const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => (
  <div className="mb-4 break-inside-avoid bg-white rounded-2xl shadow-sm overflow-hidden group">
    <div className="overflow-hidden">
        <img src={item.imageUrl} alt={item.author} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-6">
      <p className="text-zinc-700">"{item.quote}"</p>
      <p className="mt-4 font-semibold text-zinc-900">- {item.author}</p>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900">Our Work, Your Success</h2>
          <p className="mt-4 text-lg text-zinc-600">
            We take pride in the solutions we've delivered. Here's a glimpse of what we can achieve together.
          </p>
        </div>
        <div className="mt-16 sm:columns-2 lg:columns-3 gap-4">
          {portfolioData.map((item, index) => (
            <PortfolioCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
