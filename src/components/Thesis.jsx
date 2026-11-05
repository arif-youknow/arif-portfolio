import { portfolioData } from '../data/portfolioData';
import { FaFilePdf } from 'react-icons/fa';

const Thesis = () => {
  const { academicThesis } = portfolioData;

  // Hide the section if there is no thesis
  if (!academicThesis || academicThesis.length === 0) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Section heading */}
      <h2 className="text-base font-bold uppercase tracking-wider text-slate-500 mb-6 border-b border-[#00A1E0]/20 pb-2">
        Academic Thesis
      </h2>

      {/* Thesis list */}
      <div className="space-y-8">

        {academicThesis.map((thesis, index) => (
          <article
            key={index}
            className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_144px] gap-5 sm:gap-8 items-start"
          >

            {/* Left side: Thesis information */}
            <div className="min-w-0">

              {/* Thesis title */}
              <h3 className="text-base font-semibold text-slate-900">
                {thesis.title}
              </h3>

              {/* Thesis description */}
              {thesis.description && (
                <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-line">
                  {thesis.description}
                </p>
              )}

            </div>

            {/* Right side: PDF cover preview */}
            <div className="flex justify-start sm:justify-end">

              {thesis.pdfUrl ? (
                <a
                  href={thesis.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read ${thesis.title} PDF`}
                  title={`Read ${thesis.title}`}
                  className="group flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 border border-slate-300 bg-transparent overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0176D3]"
                >

                  {thesis.coverImage ? (
                    <img
                      src={thesis.coverImage}
                      alt={`${thesis.title} cover`}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <FaFilePdf
                      className="text-4xl text-[#0176D3]"
                      aria-hidden="true"
                    />
                  )}

                </a>
              ) : (

                /* Show cover without a link if PDF URL is missing */
                <div className="flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 border border-slate-300 bg-transparent overflow-hidden">

                  {thesis.coverImage ? (
                    <img
                      src={thesis.coverImage}
                      alt={`${thesis.title} cover`}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <FaFilePdf
                      className="text-4xl text-slate-400"
                      aria-hidden="true"
                    />
                  )}

                </div>
              )}

            </div>

          </article>
        ))}

      </div>
    </section>
  );
};

export default Thesis;