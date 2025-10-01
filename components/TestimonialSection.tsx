
import React from 'react';

const TestimonialSection: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-white relative">
            <div 
                className="absolute inset-0 bg-center bg-repeat"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 25px 25px, rgba(228, 228, 231, 0.4) 1px, transparent 0),
                        radial-gradient(circle at 75px 75px, rgba(228, 228, 231, 0.4) 1px, transparent 0)
                    `,
                    backgroundSize: `100px 100px`,
                }}
            ></div>
            <div className="container mx-auto px-4 text-center relative z-10">
                <img 
                    src="https://picsum.photos/id/1027/80/80" 
                    alt="Vasanta Kumar" 
                    className="w-20 h-20 rounded-full mx-auto shadow-lg"
                />
                <blockquote className="mt-8 max-w-3xl mx-auto text-3xl md:text-4xl font-semibold text-zinc-800">
                    "It's not the lines we type, it's the solutions they unlock."
                </blockquote>
                <p className="mt-4 text-zinc-600">- CTO, Vasanta Kumar</p>
            </div>
        </section>
    );
};

export default TestimonialSection;
