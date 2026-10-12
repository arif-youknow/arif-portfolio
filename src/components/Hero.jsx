import { portfolioData } from '../data/portfolioData';
import heroBg from '../assets/images/hero.jpg';
import { FaEnvelope, FaLinkedinIn, FaGithub} from 'react-icons/fa';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

const Hero = () => {
  const { personalInfo } = portfolioData;

  return (

    <header className="relative bg-linear-to-r from-[#032D60] via-[#0176D3] to-[#00A1E0] text-white min-h-95 flex items-center justify-center overflow-hidden py-12 px-4 sm:px-6 lg:px-8">



      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 scale-105 transition-transform duration-700"
        style={{ backgroundImage: `url(${heroBg})` }}
      />


      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl w-full text-center sm:text-left">
        <h1 className="text-lg sm:text-5xl font-semibold tracking-tight uppercase">
          {personalInfo.name}
        </h1>

        <p className="text-base sm:text-lg text-slate-300 font-thin mt-1">
          {personalInfo.title}
        </p>



        {/* Contact Info & External Links */}
        <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-3 text-sm text-slate-300">

          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="flex items-center justify-center w-10 h-10 rounded-full text-gray-500 hover:bg-[#00A1E0] transition-all duration-400 bg-black/20"
            >
              <FaLinkedinIn size={20} />
            </a>
          )}

          {personalInfo.github && (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="flex items-center justify-center w-10 h-10 rounded-full text-gray-500 hover:bg-[#00A1E0] transition-all duration-400 bg-black/20"
            >
              <FaGithub size={21} />
            </a>
          )}


               {personalInfo.email && (
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              title={personalInfo.email}
              className="flex items-center justify-center w-10 h-10 rounded-full text-gray-500 hover:bg-[#00A1E0] transition-all duration-400 bg-black/20"
            >
              <FaEnvelope size={20} />
            </a>
          )}

        </div>



        {/* Action Button: Download CV */}
        <div className="mt-6 flex justify-center sm:justify-start">
          <a
            href={personalInfo.resumePdf}
            download={`${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`}
            className="inline-flex items-center gap-1 bg-[#00A1E0] hover:bg-[#00A1E0]/20 text-white font-semibold px-4 py-2 rounded-none shadow-md hover:shadow-lg transition-all duration-400 active:scale-95"
          >
            Resume
            <HiOutlineDocumentDownload size={18} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;