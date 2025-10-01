
import React from 'react';

const Process: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center items-center h-96">
            <img 
              src="https://picsum.photos/seed/laptop1/400/250" 
              alt="Dark themed website on a laptop" 
              className="absolute z-10 w-3/4 max-w-md rounded-lg shadow-2xl transform -translate-x-10 -translate-y-10 -rotate-12"
            />
            <img 
              src="https://picsum.photos/seed/laptop2/400/250" 
              alt="Light themed website on a laptop" 
              className="absolute w-3/4 max-w-md rounded-lg shadow-2xl transform translate-x-10 translate-y-10 rotate-6"
            />
          </div>
          <div className="space-y-12">
            <div>
              <span className="text-sm font-bold text-indigo-600">Step 1</span>
              <h3 className="mt-2 text-3xl font-bold text-zinc-900">Share Your Vision</h3>
              <p className="mt-3 text-lg text-zinc-600">
                Tell us about your goals and project requirements—just reach out for a free consultation.
              </p>
            </div>
            <div>
              <span className="text-sm font-bold text-indigo-600">Step 2</span>
              <h3 className="mt-2 text-3xl font-bold text-zinc-900">Collaborate on a Solution</h3>
              <p className="mt-3 text-lg text-zinc-600">
                We work together to define the scope and strategy. You review and approve the plan before we begin.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-2xl p-8 shadow-sm">
              <span className="text-sm font-bold text-indigo-600">Step 3</span>
              <h3 className="mt-2 text-3xl font-bold text-zinc-900">Watch Your Idea Come to Life</h3>
              <p className="mt-3 text-lg text-zinc-600">
                Our expert team gets to work, keeping you in the loop with consistent updates. Most projects are delivered promptly, ready for launch!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
