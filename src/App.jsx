
import { useState } from 'react';

const skills = [
  'Salesforce',
  'ERP Solutions',
  'Linux / Ubuntu',
  'Git & GitHub',
  'Docker',
  'Docker Hub',
  'Jenkins',
  'CI/CD Fundamentals',
  'Kubernetes',
  'Kind',
  'React',
  'JavaScript',
  'Vagrant',
];

const experiences = [
  {
    role: 'ERP Solutions Trainee',
    company: 'BJIT Group',
    period: 'Present',
    description:
      'Building knowledge of ERP solutions while learning Salesforce and developing an understanding of business processes and enterprise technology.',
  },
  {
    role: 'Executive, Mobile App',
    company: 'Betopia Group',
    period: 'Previous Experience',
    description:
      'Professional experience in a mobile application-related role, contributing to my understanding of technology and business environments.',
  },
];

const projects = [
  {
    name: 'Portfolio Website',
    type: 'WEB DEVELOPMENT',
    description:
      'Developed a responsive React portfolio and packaged the application into a Docker image for deployment.',
    stack: 'React · JavaScript · Docker · Docker Hub',
  },
  {
    name: 'Jenkins CI/CD Environment',
    type: 'DEVOPS & AUTOMATION',
    description:
      'Set up Jenkins in an Ubuntu virtual machine using Vagrant and explored the foundations of automated application delivery.',
    stack: 'Jenkins · Ubuntu · Vagrant',
  },
  {
    name: 'Kubernetes Deployment',
    type: 'CONTAINER ORCHESTRATION',
    description:
      'Deployed a containerized portfolio application to Kubernetes using Kind and accessed the application through port forwarding.',
    stack: 'Kubernetes · Kind · Docker',
  },
];

function App() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <style>{`
        :root {
          --sf-blue: #0176d3;
          --sf-blue-dark: #014486;
          --sf-blue-light: #eaf5fe;
          --ink: #181f27;
          --muted: #5d6875;
          --line: #e2e8ef;
          --paper: #ffffff;
          --background: #f7f9fc;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 24px;
        }

        body {
          margin: 0;
          background: var(--background);
          color: var(--ink);
          font-family: Inter, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
          font-size: 15px;
          line-height: 1.75;
          -webkit-font-smoothing: antialiased;
        }

        a {
          color: inherit;
          text-underline-offset: 4px;
        }

        a:focus-visible,
        input:focus-visible,
        textarea:focus-visible,
        button:focus-visible {
          outline: 3px solid #8acbff;
          outline-offset: 3px;
        }

        .page {
          width: min(100% - 40px, 850px);
          margin: 0 auto;
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding: 23px 0;
          border-bottom: 1px solid var(--line);
        }

        .brand {
          font-size: 16px;
          font-weight: 800;
          letter-spacing: -0.5px;
          text-decoration: none;
        }

        .brand span {
          color: var(--sf-blue);
        }

        .nav-links {
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
          font-size: 13px;
          color: var(--muted);
        }

        .nav-links a {
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .nav-links a:hover {
          color: var(--sf-blue);
        }

        .hero {
          padding: 82px 0 68px;
          border-bottom: 1px solid var(--line);
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin: 0 0 22px;
          color: var(--sf-blue-dark);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.8px;
          text-transform: uppercase;
        }

        .eyebrow::before {
          content: "";
          width: 23px;
          height: 2px;
          background: var(--sf-blue);
        }

        h1 {
          max-width: 720px;
          margin: 0;
          font-size: clamp(40px, 8vw, 68px);
          font-weight: 750;
          letter-spacing: -3.5px;
          line-height: 1.1;
        }

        .highlight {
          color: var(--sf-blue);
        }

        .hero-description {
          max-width: 625px;
          margin: 24px 0 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.95;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 20px;
          margin-top: 30px;
        }

        .primary-link,
        .submit-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 11px 19px;
          border: 1px solid var(--sf-blue);
          border-radius: 5px;
          background: var(--sf-blue);
          color: #fff;
          font-family: inherit;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          transition:
            background 0.2s ease,
            border-color 0.2s ease,
            transform 0.2s ease;
        }

        .primary-link:hover,
        .submit-button:hover {
          border-color: var(--sf-blue-dark);
          background: var(--sf-blue-dark);
          transform: translateY(-1px);
        }

        .text-link {
          color: var(--sf-blue-dark);
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
        }

        .text-link:hover {
          text-decoration: underline;
        }

        .section {
          padding: 52px 0;
          border-bottom: 1px solid var(--line);
        }

        .section-heading {
          margin: 0 0 23px;
          font-size: 24px;
          font-weight: 750;
          letter-spacing: -0.9px;
          line-height: 1.35;
        }

        .section-heading::after {
          display: block;
          width: 35px;
          height: 3px;
          margin-top: 12px;
          border-radius: 2px;
          background: var(--sf-blue);
          content: "";
        }

        .section-intro {
          max-width: 650px;
          margin: -7px 0 26px;
          color: var(--muted);
        }

        .body-copy {
          max-width: 730px;
          margin: 0;
          color: #4f5c69;
          line-height: 1.95;
        }

        .experience {
          padding: 23px 0;
          border-top: 1px solid var(--line);
        }

        .experience:first-of-type {
          padding-top: 0;
          border-top: 0;
        }

        .experience-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 8px 18px;
        }

        .experience h3,
        .project h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 750;
          letter-spacing: -0.4px;
          line-height: 1.5;
        }

        .company {
          margin: 3px 0 0;
          color: var(--sf-blue-dark);
          font-size: 14px;
          font-weight: 650;
        }

        .period {
          padding: 3px 9px;
          border-radius: 4px;
          background: var(--sf-blue-light);
          color: var(--sf-blue-dark);
          font-size: 11px;
          font-weight: 700;
        }

        .experience-description,
        .project-description {
          max-width: 690px;
          margin: 12px 0 0;
          color: var(--muted);
          line-height: 1.85;
        }

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .skill {
          padding: 6px 11px;
          border: 1px solid #d9e8f6;
          border-radius: 4px;
          background: #fff;
          color: #34495e;
          font-size: 12px;
          font-weight: 600;
        }

        .project {
          padding: 23px 0;
          border-top: 1px solid var(--line);
        }

        .project:first-of-type {
          padding-top: 0;
          border-top: 0;
        }

        .project-type {
          margin: 0 0 7px;
          color: var(--sf-blue);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .project-stack {
          margin: 12px 0 0;
          color: #34495e;
          font-size: 12px;
          font-weight: 700;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 42px;
          align-items: start;
        }

        .contact-note {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .contact-form {
          display: grid;
          gap: 16px;
        }

        .field {
          display: grid;
          gap: 6px;
        }

        .field label {
          font-size: 12px;
          font-weight: 700;
        }

        .field input,
        .field textarea {
          width: 100%;
          padding: 11px 12px;
          border: 1px solid #d5dfe9;
          border-radius: 4px;
          background: #fff;
          color: var(--ink);
          font: inherit;
          font-size: 14px;
          transition: border-color 0.2s ease;
        }

        .field input::placeholder,
        .field textarea::placeholder {
          color: #98a3af;
        }

        .field input:focus,
        .field textarea:focus {
          border-color: var(--sf-blue);
          outline: 2px solid #d6ecff;
        }

        .field textarea {
          min-height: 125px;
          resize: vertical;
        }

        .submit-button {
          justify-self: start;
        }

        .form-message {
          margin: 0;
          color: var(--sf-blue-dark);
          font-size: 13px;
        }

        .footer {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          padding: 25px 0 35px;
          color: #778391;
          font-size: 12px;
        }

        @media (max-width: 600px) {
          .page {
            width: min(100% - 32px, 850px);
          }

          .nav {
            align-items: flex-start;
          }

          .nav-links {
            gap: 9px 14px;
            font-size: 12px;
          }

          .hero {
            padding: 58px 0 46px;
          }

          h1 {
            font-size: clamp(38px, 10vw, 52px);
            letter-spacing: -2px;
          }

          .hero-description {
            font-size: 15px;
          }

          .section {
            padding: 39px 0;
          }

          .contact-layout {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .footer {
            flex-direction: column;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <main className="page">
        <header className="nav">
          <a className="brand" href="#home">
            Arif Khan<span>.</span>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="hero" id="home">
          <p className="eyebrow">ERP Solutions | Salesforce | Technology</p>

          <h4>
            Learning technology.
            <br />
            <span className="highlight">Building solutions.</span>
          </h4>

          <p className="hero-description">
            I’m Arif Khan, an ERP Solutions Trainee at BJIT Group,
            currently learning Salesforce and exploring how
            technology can solve business problems. I’m also
            building hands-on skills in DevOps, containers and
            application deployment.
          </p>

          <div className="hero-actions">
            <a className="primary-link" href="#projects">
              Explore my work ↗
            </a>
            <a className="text-link" href="#contact">
              Get in touch →
            </a>
          </div>
        </section>

        <section className="section" id="about">
          <h2 className="section-heading">About me</h2>

          <p className="body-copy">
            I’m a technology professional developing my knowledge
            across enterprise solutions, Salesforce and DevOps.
            In my current role at BJIT Group, I’m a trainee in ERP
            Solutions, while building my understanding of
            Salesforce and enterprise technology.
            <br />
            <br />
            Previously, I worked as an Executive in Mobile App at
            Betopia Group. Alongside my professional journey, I
            enjoy learning by building practical projects with
            React, Docker, Jenkins and Kubernetes. I’m focused on
            continuous learning, practical problem-solving and
            growing my technical capabilities.
          </p>
        </section>

        <section className="section" id="experience">
          <h2 className="section-heading">Experience</h2>

          {experiences.map((item) => (
            <article className="experience" key={item.company}>
              <div className="experience-top">
                <div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                </div>

                <span className="period">{item.period}</span>
              </div>

              <p className="experience-description">
                {item.description}
              </p>
            </article>
          ))}
        </section>

        <section className="section" id="skills">
          <h2 className="section-heading">Technical skills</h2>

          <p className="section-intro">
            Technologies and tools I’m learning and practising.
          </p>

          <div className="skill-list">
            {skills.map((skill) => (
              <span className="skill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <h2 className="section-heading">Selected projects</h2>

          <p className="section-intro">
            Hands-on projects exploring application development,
            automation and deployment.
          </p>

          {projects.map((project) => (
            <article className="project" key={project.name}>
              <p className="project-type">{project.type}</p>

              <h3>{project.name}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <p className="project-stack">{project.stack}</p>
            </article>
          ))}
        </section>

        <section className="section" id="contact">
          <div className="contact-layout">
            <div>
              <h2 className="section-heading">Get in touch</h2>

              <p className="contact-note">
                Interested in enterprise technology, Salesforce,
                DevOps or collaborating on a project? I’d be happy
                to connect.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your name"
                  required
                  onChange={() => setSubmitted(false)}
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  onChange={() => setSubmitted(false)}
                />
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  required
                  onChange={() => setSubmitted(false)}
                />
              </div>

              <button className="submit-button" type="submit">
                Send message ↗
              </button>

              {submitted && (
                <p className="form-message" role="status">
                  Your form is valid. A backend or form service is
                  needed to deliver your message.
                </p>
              )}
            </form>
          </div>
        </section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Arif Khan</span>
          <span>Learn. Build. Improve.</span>
        </footer>
      </main>
    </>
  );
}

export default App;
