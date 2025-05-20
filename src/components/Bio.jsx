import { BIO } from "../constants";
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

const Bio = () => {
  return (
    <section id="bio" className="pt-20 pb-24 relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-gradient-to-br from-pink-200/30 to-pink-100/10 blur-3xl"></div>
        <div className="absolute bottom-[15%] right-[10%] w-48 h-48 rounded-full bg-gradient-to-tr from-pink-200/30 to-pink-100/10 blur-3xl"></div>
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
            Bio
          </motion.h2>

          {/* Bio Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8 lg:px-20 lg:mx-20 relative"
          >
            {/* Subtle Vertical Accent Line */}
            <div className="hidden lg:block absolute -left-10 top-0 h-full w-1 bg-gradient-to-b from-transparent via-pink-300/60 to-transparent"></div>

            {BIO.map((bio, index) => (
              <div key={index}>
                {[bio.bio1, bio.bio2, bio.bio3, bio.bio4].map(
                  (paragraph, pIndex) =>
                    paragraph && (
                      <motion.p
                        key={pIndex}
                        variants={childVariants}
                        whileHover={{
                          scale: 1.02,
                          textShadow: "0 0 8px rgba(236, 72, 153, 0.3)",
                          transition: { duration: 0.3 },
                        }}
                        className="py-4 text-lg lg:text-xl text-gray-700 tracking-tight leading-relaxed"
                      >
                        {paragraph}
                      </motion.p>
                    )
                )}
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
    </section>
  );
};

export default Bio;