import Hero from './components/Hero';
import Overview from './components/Overview';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Thesis from './components/Thesis';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans flex flex-col justify-between">
      <div>
        {/* Hero Section */}
        <Hero />

        {/* Main Content Area */}
        <main>
          <Overview />
          <Experience />
          <Skills />
          <Education />
          <Thesis />
          <Projects />
          <Contact />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;