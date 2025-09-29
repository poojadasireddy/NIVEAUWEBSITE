import React from 'react';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';
import { Lightbulb, Workflow, Wrench, CheckCircle2 } from 'lucide-react';

const steps = [
  { icon: Lightbulb, title: 'Discover', desc: 'Understand goals, constraints, and success criteria.' },
  { icon: Workflow, title: 'Design', desc: 'Define architecture, UX flows, and milestones.' },
  { icon: Wrench, title: 'Build', desc: 'Iterate quickly with continuous feedback.' },
  { icon: CheckCircle2, title: 'Launch', desc: 'Deploy, monitor, and optimize for impact.' },
];

const Process: React.FC = () => {
  const stepsAnimation = useStaggeredAnimation(steps.length, 120);
  return (
    <section className="py-20 md:py-32 geometric-bg-horizontal relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800">Our Process</h2>
          <p className="text-zinc-600 mt-3">A clear, outcome-driven delivery framework</p>
        </div>

        <div
          ref={stepsAnimation.containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg text-center hover-lift hover-glow scroll-scale ${
                stepsAnimation.visibleItems.has(index) ? 'scroll-visible' : ''
              }`}
            >
              <div className="bg-zinc-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale">
                <step.icon className="w-8 h-8 text-zinc-700" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-2">{step.title}</h3>
              <p className="text-zinc-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;