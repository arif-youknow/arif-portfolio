import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { personalInfo } = portfolioData;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-slate-100 rounded-xl p-6 sm:p-8 text-center border border-slate-200 shadow-sm">
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 active:scale-95 shadow-sm text-sm"
            >
              ✉️ Send Mail
            </a>
          )}

          {/* WhatsApp Button */}
          {personalInfo.whatsapp && (
            <a
              href={`https://wa.me/${personalInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 active:scale-95 shadow-sm text-sm"
            >
              💬 WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;