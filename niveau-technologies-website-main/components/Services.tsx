
import React from 'react';
import type { Service } from '../types';

const servicesData: Service[] = [
  { title: 'Web Development', images: ['https://picsum.photos/seed/webdev1/200/120', 'https://picsum.photos/seed/webdev2/200/120'] },
  { title: 'App Development', images: ['https://picsum.photos/seed/appdev1/200/120', 'https://picsum.photos/seed/appdev2/200/120'] },
  { title: 'AI Applications', images: ['https://picsum.photos/seed/ai1/200/120', 'https://picsum.photos/seed/ai2/200/120'] },
  { title: 'Data Driven Products', images: ['https://picsum.photos/seed/data1/200/120', 'https://picsum.photos/seed/data2/200/120'] },
  { title: 'UI/UX', images: ['https://picsum.photos/seed/uiux1/200/120', 'https://picsum.photos/seed/uiux2/200/120'] },
  { title: 'Logo Designing', images: ['https://picsum.photos/seed/logo1/200/120', 'https://picsum.photos/seed/logo2/200/120'] },
  { title: 'Blockchain Technology', images: ['https://picsum.photos/seed/block1/200/120', 'https://picsum.photos/seed/block2/200/120'] },
  { title: 'Rapid Prototyping and MVPs', images: ['https://picsum.photos/seed/mvp1/200/120', 'https://picsum.photos/seed/mvp2/200/120'] },
  { title: 'Digital Marketing & SEO', images: ['https://picsum.photos/seed/seo1/200/120', 'https://picsum.photos/seed/seo2/200/120'] },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
    <div className="relative h-32 w-full flex justify-center items-center mb-4">
      <img src={service.images[0]} alt={service.title} className="absolute w-40 h-auto object-cover rounded-lg shadow-md transform -rotate-12 group-hover:rotate-0 transition-transform duration-300"/>
      <img src={service.images[1]} alt={service.title} className="absolute w-40 h-auto object-cover rounded-lg shadow-lg transform rotate-6 group-hover:rotate-0 transition-transform duration-300"/>
    </div>
    <h3 className="mt-4 font-semibold text-lg text-zinc-800">{service.title}</h3>
  </div>
);

const Services: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-zinc-50">
       <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900">Solutions Tailored for Your Growth</h2>
          <p className="mt-4 text-lg text-zinc-600">
            Discover our full-service offerings — crafted to deliver reliability, scalability, and results
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
