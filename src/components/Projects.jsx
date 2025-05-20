import { FaDesktop, FaGithub } from "react-icons/fa6";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  return (
    <div id="projects" className="pb-24 relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[5%] left-[10%] w-72 h-72 rounded-full bg-gradient-to-br from-pink-200/30 to-pink-100/10 blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[15%] w-64 h-64 rounded-full bg-gradient-to-tr from-pink-200/30 to-pink-100/10 blur-3xl"></div>
        {/* Subtle Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-pink-200/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Glassmorphism Container */}
      <div className="relative mx-auto max-w-screen-xl px-6">
        <div className="rounded-3xl bg-white/60 backdrop-blur-xl shadow-xl shadow-pink-100/20 ring-1 ring-pink-100/60 p-6 sm:p-10 overflow-hidden">
          {/* Gradient Accent Lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-300/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-300/60 to-transparent"></div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="my-12 text-center text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800"
          >
            Projects
          </motion.h2>

          {/* Project Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {PROJECTS.map((project, index) => (
              <div
                key={index}
                className="flex flex-wrap justify-center items-center gap-6 lg:gap-12"
              >
                {/* Project Image */}
                <motion.div
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="w-full lg:w-1/3 relative"
                >
                  <div className="relative p-2 rounded-2xl bg-gradient-to-br from-white via-pink-50 to-pink-100 shadow-xl shadow-pink-100/30">
                    <motion.img
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 },
                      }}
                      src={project.image}
                      width={300}
                      height={300}
                      alt={project.title}
                      className="rounded-xl object-cover"
                    />
                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-pink-300/70 rounded-tl-xl"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-pink-300/70 rounded-tr-xl"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-pink-300/70 rounded-bl-xl"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-pink-300/70 rounded-br-xl"></div>
                  </div>
                </motion.div>

                {/* Project Details */}
                <motion.div
                  variants={childVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="w-full lg:w-2/3 max-w-2xl"
                >
                  <h3 className="mb-3 text-2xl lg:text-3xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full bg-gradient-to-r from-pink-600 to-pink-500 text-white px-3 py-1 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6 justify-center lg:justify-start text-2xl">
                    <motion.a
                      whileHover={{
                        scale: 1.2,
                        color: "#ec4899",
                        boxShadow: "0 8px 20px rgba(236, 72, 153, 0.3)",
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      href={project.githubLink}
                      className="text-gray-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      whileHover={{
                        scale: 1.2,
                        color: "#ec4899",
                        boxShadow: "0 8px 20px rgba(236, 72, 153, 0.3)",
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      href={project.deployedLink}
                      className="text-gray-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaDesktop />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Reuse Global Animations from App.jsx */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(8px, -8px); }
        }
      `}</style>
    </div>
  );
};

export default Projects;