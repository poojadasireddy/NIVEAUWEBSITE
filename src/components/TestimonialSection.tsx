import React from 'react';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    quote: 'The team delivered beyond expectations. Our KPIs improved across the board.',
    author: 'Avery, COO',
  },
  {
    quote: 'Incredible velocity and attention to detail. A true partner.',
    author: 'Jordan, Product Lead',
  },
  {
    quote: 'Rock-solid delivery with delightful UX. Highly recommended.',
    author: 'Riley, Founder',
  },
];

const TestimonialSection: React.FC = () => {
  const animation = useStaggeredAnimation(testimonials.length, 150);
  return (
    <section className="py-16 md:py-24 geometric-bg-diagonal-left relative bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800">What Clients Say</h2>
          <p className="text-zinc-600 mt-3">Trusted by teams of all sizes</p>
        </div>

        <div
          ref={animation.containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover-lift hover-glow scroll-scale ${
                animation.visibleItems.has(index) ? 'scroll-visible' : ''
              }`}
            >
              <p className="text-zinc-700">“{t.quote}”</p>
              <p className="mt-4 font-semibold text-zinc-900">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;