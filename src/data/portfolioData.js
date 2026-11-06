import betopiaLogo from "../assets/images/betopia-limited.png";
import uitsLogo from "../assets/images/uits.png";

export const portfolioData = {
  personalInfo: {
    name: "MD ARIF KHAN",
    title: "Software Engineer",
    phone: "+8801626760256",
    email: "inbox.arifkhan@gmail.com",
    location: "Dhaka,Bangladesh",
    github: "https://github.com/arif-youknow",
    linkedin: "https://www.linkedin.com/in/arif-youknow/",
    whatsapp: "+8801626760256",
    resumePdf:
      "https://www.dropbox.com/scl/fi/1xitssanm782ojt34303m/md-arif-khan.pdf?rlkey=rlzi86e1hxlroiy49zm7kb3h5&st=xbdobszr&dl=1", // public/resume.pdf
  },

  myStory: `
The journey has never been limited to classrooms, assignments, and exams. During my university years, I tried to make the most of the opportunities around me. I was involved in university clubs and volunteered in different activities, where I learned to work with people, take responsibility, and understand the value of teamwork.
As a Computer Science student, I always dreamed of working at a leading software company. With that goal in mind, I started preparing myself early, improving my technical skills and learning beyond my academic coursework.
In early 2025, I applied for the **Star Coder program at Brain Station 23**. I made it through the first round but couldn't move beyond the second. Although it was disappointing, the experience helped me understand where I needed to improve. Instead of giving up, I continued learning and preparing for the next opportunity.
A few months later, in **August 2025, I received my first job offer as a Mobile App Developer**, even before completing my graduation. It was a special moment for me because the effort I had been putting into my career was finally starting to pay off. I spent the next year working in mobile application development, gaining practical experience and learning what it takes to build software in a professional environment.
In September 2026, I had another opportunity to take my career in a new direction when **I joined BJIT as an Enterprise Solutions Trainee**. Before joining BJIT, I had also applied for a Trainee Software Engineer position at **WellDev**. I passed the first round and received an invitation for a technical interview. However, since I had already committed to BJIT, I decided to honor that commitment and focus on the opportunity I had chosen.
Looking back, every experience has taught me something. Some opportunities worked out, while others didn't. But each one helped me grow, become more confident, and better understand what I want from my career.
Today, I feel much more confident than when I first started. I know there is still a lot for me to learn, but I trust my ability to face challenges, think through problems, and find solutions. I believe that with the right mindset, consistent effort, and a willingness to keep learning, I can contribute to solving real business problems, regardless of the technology involved.

**and there's a long way to go..**
  `,

  experience: [
    {
      company: "BJIT Group",
      role: "Enterprise Solutions Trainee",
      duration: "September 2026 - Present",
      durationYear: "2026 - Present",
      location: "Baridhara,Dhaka",
      companyUrl: "https://bjitgroup.com/",
      companyLogo: "https://bjitgroup.com/static/svg/common/bjit-logo2.svg",
      bullets: [
        "Gained hands on experience in enterprise solution development, focusing on business process automation, system configuration, and application development.",
        "Applied requirement analysis, data modeling, software engineering principles to implement business solutions.",
        "Learned project management practices, including task planning, and issue management using Jira and Redmine.",
      ],
    },

    {
      company: "Betopia Group",
      role: "Executive Mobile App",
      duration: "August 2025 - August 2026",
      durationYear: "2025 - 2026",
      location: "Gulshan,Dhaka",
      companyUrl: "https://betopiagroup.com/",
      companyLogo: betopiaLogo,
      bullets: [
        "Take ownership of end to end feature development from requirement analysis.",
        "Collaborate with cross functional teams and stakeholders to ensure timely project delivery and product quality.",
        "implement scalable application architecture following Clean Architecture principles.",
      ],
    },
  ],

  technicalSkills: [
    "OOP",
    "JavaScript",
    "APEX",
    "ABAP",
    "SOQL",
    "SQL",
    "Version Control (Git)",
    "Docker",
  ],

  software: ["Salesforce", "SAP", "Microsoft Excel"],

  projectManagement: ["Jira", "Redmine"],

  education: [
    {
      degree: "B.Sc. in Computer Science and Engineering (CSE)",
      institution: "University of Information Technology and Sciences (UITS)",
      duration: "2017 - 2020",
      passingYear: "2025",
      location: "Dhaka,Bangladesh",
      uitsLogo: uitsLogo,
      institutionUrl: "https://uits.ac.bd/",
    },
  ],


  //Academic Thesis

  academicThesis: [
    {
      title: "Title: Intelligent Lost & Found Platform using Machine Learning for Automated Item Matching",



      description: `Developed an intelligent Lost & Found platform that automates item matching using computer vision and natural language processing.
      The system integrates DINOv2 and SIFT for visual feature extraction, BGE-Reranker for multilingual semantic text matching, and XGBoost for ensemble-based match prediction. Built with a FastAPI backend, the platform supports English, Bangla, and Romanized Bangla descriptions. The proposed model achieved **80.98% accuracy**, demonstrating its effectiveness in matching lost and found items.
.`,

      // Dropbox PDF preview link
      pdfUrl: "https://www.dropbox.com/scl/fi/uz2f8v5a7sy0ivnq141ql/Intelligent_Lost___Found_Platform_using_Machine_Learning_for_Automated_Item_Matching__Latest_.pdf?rlkey=wy0sbq5xsy7mtn5ca23ox3woy&st=f4uwjjeb&dl=0",

      // Dropbox cover image direct link
      coverImage: "https://www.dropbox.com/scl/fi/r5s2x736c9v9zwp0tei03/thesis_cover.png?rlkey=dufnoovibr6asmyzhd0bx8hbn&raw=1",
    },
  ],


  //Certifications

  certificates: [
    {
      id: "certificate-1",
      title: "Certificate Name 1",
      imageUrl: "",
      certificateUrl: "",
    },
    {
      id: "certificate-2",
      title: "Certificate Name 2",
      imageUrl: "",
      certificateUrl: "",
    },
    {
      id: "certificate-3",
      title: "Certificate Name 3",
      imageUrl: "",
      certificateUrl: "",
    },
    {
      id: "certificate-3",
      title: "Certificate Name 3",
      imageUrl: "",
      certificateUrl: "",
    },

    {
      id: "certificate-3",
      title: "Certificate Name 3",
      imageUrl: "",
      certificateUrl: "",
    },
  ],

  projects: [
    {
      title: "AI Fitness Tracking Application",
      link: "https://portfolio.aidan.com/aift",
      description:
        "Birmingham University, situated in the vibrant city of Birmingham, UK, provides a dynamic learning atmosphere with a rich heritage and contemporary facilities.",
    },
    {
      title: "Legal review system - Design system",
      link: "https://portfolio.aidan.com/lgpsy",
      description:
        "Birmingham University, located in the lively city of Birmingham, UK, offers a stimulating learning environment with a rich history and modern amenities.",
    },
  ],
};
