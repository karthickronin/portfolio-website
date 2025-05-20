import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub, FaTwitter } from "react-icons/fa6";
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const Footer = () => {
  return (
    <footer className="pt-20 pb-24 relative">
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

          {/* Footer Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center gap-8 lg:px-20 lg:mx-20"
          >
            {/* Social Media Icons */}
            <div className="flex items-center justify-center gap-6 text-3xl text-gray-700">
              <motion.a
                href="https://www.linkedin.com/in/karthickronin"
                aria-label="Visit Karthick's LinkedIn profile"
                variants={childVariants}
                whileHover={{
                  scale: 1.2,
                  color: "#ec4899",
                  transition: { duration: 0.3 },
                }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com/karthickronin"
                aria-label="Visit Karthick's GitHub profile"
                variants={childVariants}
                whileHover={{
                  scale: 1.2,
                  color: "#ec4899",
                  transition: { duration: 0.3 },
                }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/karthick_ronin_/"
                aria-label="Visit Karthick's Instagram profile"
                variants={childVariants}
                whileHover={{
                  scale: 1.2,
                  color: "#ec4899",
                  transition: { duration: 0.3 },
                }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://x.com/karthickronin"
                aria-label="Visit Karthick's Twitter/X profile"
                variants={childVariants}
                whileHover={{
                  scale: 1.2,
                  color: "#ec4899",
                  transition: { duration: 0.3 },
                }}
              >
                <FaTwitter />
              </motion.a>
            </div>

            {/* Copyright Notice */}
            <motion.p
              variants={childVariants}
              className="text-center text-sm lg:text-base text-gray-700 tracking-tight leading-relaxed"
            >
              © KarthickRonin. All rights reserved.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Reuse Global Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(8px, -8px); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;