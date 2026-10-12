import { portfolioData } from '../data/portfolioData';

const Overview = () => {
  const { overview } = portfolioData;

  if (!overview) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-slate-200">
      <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
        Overview
      </h2>
      <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
        {overview}
      </p>
    </section>
  );
};

export default Overview;