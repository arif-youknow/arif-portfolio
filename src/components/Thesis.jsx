import { portfolioData } from '../data/portfolioData';
import { FaFilePdf } from 'react-icons/fa';

// PDF cover size in pixels
// Change these values to resize the cover
const PDF_WIDTH = 240;
const PDF_HEIGHT = 300;

const Thesis = () => {
  const { academicThesis } = portfolioData;

  // Hide the section if no thesis is available
  if (!academicThesis || academicThesis.length === 0) return null;

  // Convert **text** into bold React elements
  const renderFormattedText = (text) => {
    return text.split(/(\*\*[\s\S]*?\*\*)/g).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong
            key={index}
            className="font-semibold text-slate-800"
          >
            {part.slice(2, -2)}
          </strong>
        );
      }

      return part;
    });
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Section heading */}
      <h2 className="text-base font-bold uppercase tracking-wider text-slate-500 mb-6 border-b border-[#00A1E0]/20 pb-2">
        Academic Thesis
      </h2>

      {/* Thesis list */}
      <div className="space-y-8">

        {academicThesis.map((thesis, index) => {

          // Use a link if PDF URL exists, otherwise use a div
          const CoverElement = thesis.pdfUrl ? 'a' : 'div';

          // Add link properties only when PDF URL exists
          const linkProps = thesis.pdfUrl
            ? {
              href: thesis.pdfUrl,
              target: '_blank',
              rel: 'noopener noreferrer',
              'aria-label': `Read ${thesis.title} PDF`,
              title: `Read ${thesis.title}`,
            }
            : {};

          return (
            <article
              key={index}
              className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-start"
            >

              {/* Left side: Thesis information */}
              <div className="min-w-0 flex-1">

                {/* Thesis title */}
                <h3 className="text-base font-semibold text-slate-900">
                  {thesis.title}
                </h3>

                {/* Thesis description with bold formatting */}
                {thesis.description && (
                  <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-line">
                    {renderFormattedText(thesis.description)}
                  </p>
                )}

              </div>

              {/* Right side: PDF cover */}
              <div className="w-full sm:w-auto sm:shrink-0">

                {/* PDF cover container */}
                <CoverElement
                  {...linkProps}
                  style={{
                    width: `${PDF_WIDTH}px`,
                    height: `${PDF_HEIGHT}px`,
                    maxWidth: '100%',
                  }}
                  className="flex items-center justify-center border border-slate-300 bg-transparent overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0176D3]"
                >

                  {/* Show cover image if available */}
                  {thesis.coverImage ? (
                    <img
                      src={thesis.coverImage}
                      alt={`${thesis.title} cover`}
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  ) : (

                    /* Show PDF icon if cover image is missing */
                    <FaFilePdf
                      className="text-4xl text-[#0176D3]"
                      aria-hidden="true"
                    />

                  )}

                </CoverElement>

              </div>

            </article>
          );
        })}

      </div>

    </section>
  );
};

export default Thesis;