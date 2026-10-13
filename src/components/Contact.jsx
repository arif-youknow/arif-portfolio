import { portfolioData } from '../data/portfolioData';
import { SiGmail, SiWhatsapp } from 'react-icons/si';
import gmailLogo from '../assets/images/gmail.svg';

const Contact = () => {
  const { personalInfo } = portfolioData;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <div className="bg-[#00A1E0]/10 p-6 sm:p-8 text-center border border-[#00A1E0]/20">


        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
          Let's Work Together
        </h2>
        <p className="text-sm text-slate-600 mb-6 max-w-md mx-auto">
          Have a project in mind or want to discuss job opportunities? Feel free to reach out directly.
        </p>

        {/* Action Buttons: Send Mail & WhatsApp */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Send Mail Button */}
          {personalInfo.email && (
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#00A1E0]/30 text-white font-medium px-4 py-3 transition-all duration-200 active:scale-95 shadow-sm text-sm"
            >
              <img src={gmailLogo} alt="Gmail" className="w-7 h-7" />
              Send Mail
            </a>
          )}

          {/* WhatsApp Button */}
          {personalInfo.whatsapp && (
            <a
              href={`https://wa.me/${personalInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#00A1E0]/30 text-white font-medium px-4 py-3 transition-all duration-200 active:scale-95 shadow-sm text-sm"
            >
              <SiWhatsapp size={28} color="#25D366" />
              WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;