import { FaUniversity, FaMapMarkerAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  if (!education || education.length === 0) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-base font-bold uppercase tracking-wider text-slate-500 mb-6  border-b border-[#00A1E0]/20 pb-2">
        Education
      </h2>

      <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="space-y-2">
      
                  {/* Degree & Passing Year */}
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-base sm:text-base font-semibold text-slate-900">
                      {edu.degree}
                    </h3>
      
                    <span className="text-sm text-slate-500 font-medium text-right shrink-0">
                      {edu.passingYear}
                    </span>
                  </div>
      
                  {/* Location */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 min-w-0 text-sm font-medium">
                      <FaUniversity className="text-slate-700 shrink-0" />
      
                      {edu.institutionUrl ? (
                        <a
                          href={edu.institutionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {edu.institution}
                        </a>
                      ) : (
                        <span className="text-slate-700">
                          {edu.institution}
                        </span>
                      )}
                    </div>
      
                    {edu.location && (
                      <span className="flex items-center gap-1 text-xs sm:text-sm text-slate-500 text-right shrink-0">
                        <FaMapMarkerAlt className="text-slate-500 shrink-0" />
                        {edu.location}
                      </span>
                    )}
                  </div> 
                </div>
              ))}
            </div>
    </section>
  );
};

export default Education;