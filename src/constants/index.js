import project1 from "../assets/projects/twitter-logo.jpg";
import project2 from "../assets/projects/task-logo.png";
import project3 from "../assets/projects/professional-portfolio.png";
import project4 from "../assets/projects/blog-logo.png";

export const NAVIGATION_LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const BIO = [
  {
    bio1:"Karthick S, Recent B. Tech Graduate in Information Technology",
    bio2:"He is a motivated and detail-oriented web developer with a Bachelor of Technology in Information Technology from St. Joseph College of Engineering. Proficient in modern web technologies including ReactJS, NodeJS, NextJS, MongoDB, PostgreSQL, and TailwindCSS, he has a strong foundation in both front-end and back-end development",
    bio3:"Karthick specializes in creating responsive and engaging user experiences, leveraging tools like Framer Motion for seamless animations.In addition to his technical skills, Karthick has completed various projects, including an Employee Payment Management System, a News Media Website, and a Cloud App for Pneumonia Detection using deep learning. His diverse skill set is complemented by certifications from Udemy and IIT Bombay, reflecting his commitment to continuous learning and professional development",
    bio4:"Karthick is currently seeking opportunities to contribute his expertise and passion for technology to innovative projects"}
];

export const EDUCATION = [
  {
    degree: "Master of Business and Administration",
    institution: "SRM IST, Chennai",
    duration: "September 2024 - June 2026",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  },
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "St. Joseph College of Engineering, Chennai",
    duration: "September 2020 - June 2024",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, React and Java. Completed a senior project on developing a Cloud App for Pnemonia Detection With Given X-Ray Images in Deep Learning. Graduated with a high GPA 7.88.",
  }]

export const PROJECTS = [
  {
    title: "Twitter-clone",
    image: project1,
    description:
      "A fully functional twitter-clone website with features like post listing, profile page, notification page and user authentication.",
    technologies: ["ReactJS", "NodeJS", "Expressjs", "MongoDB", "DaisyUI", "TailwindCSS", "Tanstack Query", "Cloudinary", "Jsonwebtoken"],
    githubLink : "https://github.com/karthickronin/twitter-clone",
    deployedLink : "https://twitter-clone-g7vs.onrender.com"
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "React", "MongoDB"],
    githubLink : "https://github.com/karthickronin/to-do-app",
    deployedLink : "https://to-do-app-7.onrender.com"
  },
  {
    title: "Personal Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "tailwindCSS", "FramerMotion"],
    githubLink : "https://github.com/karthickronin/portfolio",
    deployedLink : "https://karthicksportfolio.netlify.app"
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "NextJS", "ExpressJS", "Mongodb"],
    githubLink : "https://github.com/karthickronin/kareblog",
    deployedLink : null
  },
];

export const CONTACT = {
  address: "1/46, Cheyyar, Tiruvannamalai, 604-407 ",
  phoneNo: "+91 6382814636 ",
  email: "karthimad7707@gmail.com",
};
