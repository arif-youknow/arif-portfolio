import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { coreSkills, additionalSkills } = portfolioData;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Core Skills */}
      {coreSkills && coreSkills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-base font-bold uppercase tracking-wider text-slate-500 mb-3 border-b border-slate-200 pb-2">
            Core Skills
          </h2>
          <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
            {coreSkills.join('  •  ')}
          </p>
        </div>
      )}

      {/* Additional Skills */}
      {additionalSkills && additionalSkills.length > 0 && (
        <div>
          <h2 className="text-base font-bold uppercase tracking-wider text-slate-500 mb-3 border-b border-slate-200 pb-2">
            Additional Skills
          </h2>
          <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
            {additionalSkills.join('  •  ')}
          </p>
        </div>
      )}
    </section>
  );
};

export default Skills;