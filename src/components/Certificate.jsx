import { useRef, useState, useEffect } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaCertificate,
} from 'react-icons/fa';

import { portfolioData } from '../data/portfolioData';

const Certificate = () => {
  const { certificates } = portfolioData;

  // Reference to the horizontal scroll container
  const scrollRef = useRef(null);

  // Track whether scrolling is possible in each direction
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Check the current scroll position
  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    setCanScrollLeft(scrollLeft > 1);

    setCanScrollRight(
      scrollLeft + clientWidth < scrollWidth - 1
    );
  };

  // Update navigation buttons when the container size changes
  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const update = () => {
      updateScrollButtons();
    };

    update();

    const observer = new ResizeObserver(update);

    observer.observe(container);

    return () => observer.disconnect();
  }, [certificates]);

  // Scroll one certificate at a time
  const scrollCertificates = (direction) => {
    const container = scrollRef.current;

    if (!container) return;

    const firstCard = container.firstElementChild;

    if (!firstCard) return;

    // Calculate scroll distance using card width and gap
    const gap = parseFloat(
      window.getComputedStyle(container).columnGap
    ) || 0;

    const scrollAmount = firstCard.getBoundingClientRect().width + gap;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    container.scrollBy({
      left: direction * scrollAmount,
      behavior: reduceMotion ? 'instant' : 'smooth',
    });
  };

  // Hide the section if there are no certificates
  if (!certificates || certificates.length === 0) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Section heading */}
      <div className="flex items-center justify-between gap-4 mb-6 border-b border-[#00A1E0]/20 pb-2">

        <h2 className="text-base font-bold uppercase tracking-wider text-slate-500">
          Certifications
        </h2>

        {/* Horizontal navigation */}
        <div className="flex items-center gap-3">

          {/* Scroll left */}
          <button
            type="button"
            onClick={() => scrollCertificates(-1)}
            disabled={!canScrollLeft}
            aria-label="Previous certificates"
            className="flex items-center justify-center w-8 h-8 text-[#0176D3] disabled:text-slate-300 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0176D3]"
          >
            <FaChevronLeft size={14} />
          </button>

          {/* Scroll right */}
          <button
            type="button"
            onClick={() => scrollCertificates(1)}
            disabled={!canScrollRight}
            aria-label="Next certificates"
            className="flex items-center justify-center w-8 h-8 text-[#0176D3] disabled:text-slate-300 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0176D3]"
          >
            <FaChevronRight size={14} />
          </button>

        </div>
      </div>

      {/* Horizontal certificate list */}
      <div
        ref={scrollRef}
        onScroll={updateScrollButtons}
        className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3"
        role="region"
        aria-label="Certificate gallery"
        tabIndex={0}
      >

        {certificates.map((certificate) => (

          <article
            key={certificate.id}
            className="flex-none w-[72%] sm:w-[45%] lg:w-[31%] snap-start"
          >

            {/* Certificate card */}
            {certificate.certificateUrl ? (

              <a
                href={certificate.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${certificate.title}`}
                className="block border border-slate-300 bg-transparent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0176D3]"
              >

                {/* Square image area */}
                <div className="aspect-square flex items-center justify-center overflow-hidden border-b border-slate-300">

                  {certificate.imageUrl ? (
                    <img
                      src={certificate.imageUrl}
                      alt={`${certificate.title} certificate`}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <FaCertificate
                      className="text-5xl text-slate-400"
                      aria-hidden="true"
                    />
                  )}

                </div>

                {/* Certificate name */}
                <div className="min-h-16 flex items-center justify-center px-3 py-3 text-center">
                  <h3 className="text-sm font-medium text-slate-700 leading-snug">
                    {certificate.title}
                  </h3>
                </div>

              </a>

            ) : (

              /* Display a non-clickable card if no link exists */
              <div className="border border-slate-300 bg-transparent">

                {/* Square image area */}
                <div className="aspect-square flex items-center justify-center overflow-hidden border-b border-slate-300">

                  {certificate.imageUrl ? (
                    <img
                      src={certificate.imageUrl}
                      alt={`${certificate.title} certificate`}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <FaCertificate
                      className="text-5xl text-slate-400"
                      aria-hidden="true"
                    />
                  )}

                </div>

                {/* Certificate name */}
                <div className="min-h-16 flex items-center justify-center px-3 py-3 text-center">
                  <h3 className="text-sm font-medium text-slate-700 leading-snug">
                    {certificate.title}
                  </h3>
                </div>

              </div>

            )}

          </article>

        ))}

      </div>

    </section>
  );
};

export default Certificate;