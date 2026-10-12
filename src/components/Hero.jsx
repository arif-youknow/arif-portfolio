import { portfolioData } from '../data/portfolioData';
import heroBg from '../assets/images/hero.jpg';

const Hero = () => {
  const { personalInfo } = portfolioData;

  return (
    <header className="relative bg-slate-900 text-white min-h-95 flex items-center justify-center overflow-hidden py-12 px-4 sm:px-6 lg:px-8">

        
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 scale-105 transition-transform duration-700"
        style={{ backgroundImage: `url(${heroBg})`}}
      />
  
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl w-full text-center sm:text-left">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase pb-1">
          {personalInfo.name}
        </h1>
        
        <p className="text-xl sm:text-2xl text-slate-300 font-medium mt-2">
          {personalInfo.title}
        </p>

        {/* Contact Info & External Links */}
        <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-6 text-sm text-slate-300">
          {personalInfo.phone && (
            <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors">
              📞 {personalInfo.phone}
            </a>
          )}

          {personalInfo.email && (
            <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
              ✉️ {personalInfo.email}
            </a>
          )}

          {personalInfo.linkedin && (
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors underline decoration-slate-500 underline-offset-4"
            >
              🔗 LinkedIn
            </a>
          )}

          {personalInfo.github && (
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors underline decoration-slate-500 underline-offset-4"
            >
              💻 GitHub
            </a>
          )}

          {personalInfo.location && (
            <span className="text-slate-400">
              📍 {personalInfo.location}
            </span>
          )}
        </div>

        {/* Action Button: Download CV */}
        <div className="mt-6 flex justify-center sm:justify-start">
          <a
            href={personalInfo.resumePdf}
            download={`${personalInfo.name.replace(/\s+/g, '_')}_CV.pdf`}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
          >
            <span>📄</span> Download CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;