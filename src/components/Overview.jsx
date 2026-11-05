import { portfolioData } from '../data/portfolioData';

const Overview = () => {
  const { myStory } = portfolioData;

  if (!myStory) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-base font-bold uppercase tracking-wider text-slate-500 mb-3">
        My Story
      </h2>
      <p className="text-slate-700 text-base sm:text-md leading-relaxed font-normal">
        {myStory}
      </p>
    </section>
  );
};

export default Overview;