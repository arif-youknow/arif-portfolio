import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { technicalSkills, software, projectManagement } = portfolioData;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Technical Skills */}
      {technicalSkills && technicalSkills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-base font-bold uppercase tracking-wider text-slate-500 mb-3 border-b border-[#00A1E0]/20 pb-2">
            Technical Skills
          </h2>

          <div className="flex flex-wrap gap-2">
            {technicalSkills.map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="inline-flex items-center border border-[#0176D3] px-3 py-1.5 text-sm text-[#0176D3] font-medium bg-transparent transition-colors duration-200 hover:border-slate-300 hover:text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}


      {/* Software */}
      {software && software.length > 0 && (
        <div className="mb-6">
          <h2 className="text-base font-bold uppercase tracking-wider text-slate-500 mb-3 border-b border-[#00A1E0]/20 pb-2">
            Software
          </h2>

          <div className="flex flex-wrap gap-2">
            {software.map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="inline-flex items-center border border-[#0176D3] px-3 py-1.5 text-sm text-[#0176D3] font-medium bg-transparent transition-colors duration-200 hover:border-slate-300 hover:text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Project Management Skills */}
      {projectManagement && projectManagement.length > 0 && (
        <div>
          <h2 className="text-base font-bold uppercase tracking-wider text-slate-500 mb-3 border-b border-[#00A1E0]/20 pb-2">
            Project Management
          </h2>

          <div className="flex flex-wrap gap-2">
            {projectManagement.map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="inline-flex items-center border border-[#0176D3] px-3 py-1.5 text-sm text-[#0176D3] font-medium bg-transparent transition-colors duration-200 hover:border-slate-300 hover:text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;