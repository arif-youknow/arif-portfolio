import { portfolioData } from '../data/portfolioData';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';


const Experience = () => {

  const { experience } = portfolioData;

  if (!experience || experience.length === 0) return null;


  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
      <h2 className="text-sm font-bold border-b border-slate-200 pb-2 uppercase tracking-wider text-slate-500 mb-6">
        Professional Experience
      </h2>


      <div className="space-y-8">
        {experience.map((exp, index) => (
          <div key={index} className="space-y-2">

            {/* Designation & Duration */}
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                {exp.role}
              </h3>

              <span className="text-sm text-slate-500 font-medium text-right shrink-0">
                {exp.duration}
              </span>
            </div>

            {/* Company & Location */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 min-w-0 text-sm font-medium">
                <FaBriefcase className="text-slate-500 shrink-0" />

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
                  <span className="text-slate-700">
                    {exp.company}
                  </span>
                )}
              </div>

              {exp.location && (
                <span className="flex items-center gap-1 text-xs sm:text-sm text-slate-500 text-right shrink-0">
                  <FaMapMarkerAlt className="text-slate-500 shrink-0" />
                  {exp.location}
                </span>
              )}
            </div>

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