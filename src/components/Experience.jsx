import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  if (!experience || experience.length === 0) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-slate-200">
      <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">
        Professional Experience
      </h2>

      <div className="space-y-8">
        {experience.map((exp, index) => (
          <div key={index} className="space-y-2">
            {/* Role & Company Header */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {exp.role},{' '}
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <span>{exp.company}</span>
                )}
              </h3>
              <span className="text-sm text-slate-500 font-medium">
                ({exp.duration})
              </span>
            </div>

            {/* Location */}
            {exp.location && (
              <p className="text-xs text-slate-500 font-medium">
                📍 {exp.location}
              </p>
            )}

            {/* Bullet Points */}
            {exp.bullets && exp.bullets.length > 0 && (
              <ul className="list-disc list-outside pl-5 space-y-1.5 text-sm text-slate-700 pt-1">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;