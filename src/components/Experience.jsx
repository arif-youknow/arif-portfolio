import { portfolioData } from '../data/portfolioData';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const { experience } = portfolioData;

  // Hide section if no experience is available
  if (!experience || experience.length === 0) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Section heading */}
      <h2 className="text-base font-bold border-b border-[#00A1E0]/20 pb-2 uppercase tracking-wider text-slate-500 mb-6">
        Professional Experience
      </h2>

      {/* Experience list */}
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="grid grid-cols-[90px_minmax(0,1fr)] sm:grid-cols-[140px_minmax(0,1fr)] gap-3 sm:gap-5"
          >

            {/* Left column: Duration */}
            <div className="pt-0.5">
              <span className="block text-xs sm:text-sm text-slate-500 font-medium">
                {exp.durationYear || exp.duration}
              </span>
            </div>

            {/* Right column: Experience details */}
            <div className="min-w-0 border-l-2 border-slate-400 pl-3 sm:pl-5">

              {/* Job title */}
              <h3 className="text-base font-semibold text-slate-900">
                {exp.role}
              </h3>

              {/* Company logo and name */}
              <div className="flex items-center gap-3 mt-2">

                {/* Square logo frame */}
                <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-slate-300 rounded-none bg-transparent overflow-hidden">

                  {exp.companyLogo ? (
                    <img
                      src={exp.companyLogo}
                      alt={`${exp.company} logo`}
                      loading="lazy"
                      className="w-full h-full object-contain p-1"
                    />
                  ) : (
                    <FaBriefcase
                      className="text-slate-500 text-lg"
                      aria-hidden="true"
                    />
                  )}

                </div>

                {/* Company name */}
                <div className="min-w-0 text-sm font-medium">
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

              </div>

              {/* Company location */}
              {exp.location && (
                <div className="flex items-center gap-1 mt-2 text-xs sm:text-sm text-slate-500">
                  <FaMapMarkerAlt
                    className="shrink-0"
                    aria-hidden="true"
                  />
                  <span>{exp.location}</span>
                </div>
              )}

              {/* Experience description */}
              {exp.description && (
                <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-line">
                  {exp.description}
                </p>
              )}

              {/* Experience bullet points */}
              {exp.bullets?.length > 0 && (
                <ul className="list-disc list-outside pl-5 mt-4 space-y-1.5 text-sm sm:text-base text-slate-700">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="leading-relaxed"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Experience;