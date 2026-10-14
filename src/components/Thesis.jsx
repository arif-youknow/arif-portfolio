import { portfolioData } from '../data/portfolioData';

const Thesis = () => {
  const { projects } = portfolioData;

  if (!projects || projects.length === 0) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-base font-bold uppercase tracking-wider text-slate-500 mb-6 border-b border-[#00A1E0]/20 pb-2">
        Academic Thesis
      </h2>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="space-y-1.5">
            <h3 className="text-base font-bold text-slate-900 flex flex-wrap items-baseline gap-2">
              <span>{project.title}</span>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-normal text-blue-600 hover:underline break-all"
                >
                  ({project.link})
                </a>
              )}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Thesis;