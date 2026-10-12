
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500 bg-white">
      <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;