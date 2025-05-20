import { FaNodeJs, FaReact } from "react-icons/fa6";
import { SiDjango, SiFlask, SiMongodb, SiMysql, SiPython } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: 0, scale: 1 },
  animate: {
    y: [10, -10],
    scale: [1, 1.05],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      staggerChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const Technologies = () => {
  return (
    <div id="skills" className="pb-24 relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[10%] left-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-pink-200/30 to-pink-100/10 blur-3xl"></div>
        <div className="absolute bottom-[15%] right-[20%] w-48 h-48 rounded-full bg-gradient-to-tr from-pink-200/30 to-pink-100/10 blur-3xl"></div>
        {/* Subtle Floating Particles */}
        {[...Array(6)].map((_, i) => (
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
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="my-12 text-center text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800"
          >
            Skills
          </motion.h2>

          {/* Icons Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center"
          >
            {[
              { icon: SiPython, color: "text-yellow-500", duration: 2.5 },
              { icon: SiDjango, color: "text-green-800", duration: 3.5 },
              { icon: FaReact, color: "text-cyan-400", duration: 4.5 },
              { icon: TbBrandNextjs, color: "text-gray-800", duration: 3 },
              { icon: SiMongodb, color: "text-green-500", duration: 5 },
              { icon: SiMysql, color: "text-orange-500", duration: 2 },
              { icon: FaNodeJs, color: "text-green-500", duration: 6 },
              { icon: SiFlask, color: "text-gray-200", duration: 4 },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial="initial"
                animate="animate"
                variants={iconVariants(tech.duration)}
                whileHover={{
                  scale: 1.2,
                  color: "#ec4899",
                  boxShadow: "0 8px 20px rgba(236, 72, 153, 0.3)",
                  transition: { duration: 0.3 },
                }}
                className="p-4 flex justify-center"
              >
                <tech.icon className={`text-6xl ${tech.color}`} />
              </motion.div>
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

export default Technologies;