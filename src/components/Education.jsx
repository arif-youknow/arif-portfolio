import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  if (!education || education.length === 0) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-slate-200">
      <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">
        Education
      </h2>

      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="space-y-0.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-base font-bold text-slate-900">
                {edu.degree}
              </h3>
              <span className="text-sm text-slate-500 font-medium">
                ({edu.duration})
              </span>
            </div>
            <p className="text-sm text-slate-600 font-medium">
              {edu.institution}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;