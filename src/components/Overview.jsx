import { useState, useRef, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi";
import { portfolioData } from "../data/portfolioData";

const Overview = () => {
  const { myStory } = portfolioData;

  // Track whether the full story is visible
  const [expanded, setExpanded] = useState(false);

  // Store the actual height of the story
  const [contentHeight, setContentHeight] = useState(0);

  // Reference to the story content
  const contentRef = useRef(null);

  // Measure the story height and update it when the content changes
  useEffect(() => {
    const element = contentRef.current;

    if (!element) return;

    const updateHeight = () => {
      setContentHeight(element.scrollHeight);
    };

    // Measure the height when the component loads
    updateHeight();

    // Update the height when the content size changes
    const observer = new ResizeObserver(updateHeight);
    observer.observe(element.firstElementChild);

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, [myStory]);

  // Do not display the section if there is no story
  if (!myStory) return null;

  // Convert **bold text** into React strong elements
  const renderFormattedText = (text) => {
    return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-semibold text-slate-800">
            {part.slice(2, -2)}
          </strong>
        );
      }

      return part;
    });
  };

  // Split the story into separate paragraphs
  const paragraphs = myStory
    .trim()
    .split(/\r?\n\s*\n|\r?\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Section heading */}
      <h2 className="text-base font-bold uppercase tracking-wider text-slate-500 mb-3 pb-2">
        My Story
      </h2>

      {/* Story content */}
      <div
        id="my-story-content"
        ref={contentRef}
        style={{
          maxHeight: expanded ? `${contentHeight}px` : undefined,
        }}
        className={`relative pb-2 overflow-hidden transition-[max-height] duration-700 ease-in-out motion-reduce:transition-none ${expanded ? "" : "max-h-44 sm:max-h-52"
          }`}
      >
        {/* Display each paragraph separately */}
        <div className="space-y-2">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal"
            >
              {renderFormattedText(paragraph)}
            </p>
          ))}
        </div>
      </div>

      {/* Expand or collapse the story */}
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        aria-controls="my-story-content"
        aria-label={expanded ? "Show less" : "Read full story"}
        className="w-full flex items-center justify-center bg-transparent text-[#0176D3] h-2 sm:h-4 mt-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0176D3]"
      >
        {/* Rotate the arrow based on the story state */}
        <HiChevronDown
          className={`text-xl sm:text-2xl transition-transform duration-500 ease-in-out motion-reduce:transition-none ${expanded ? "rotate-180" : "rotate-0"
            }`}
        />
      </button>
    </section>
  );
};

export default Overview;
