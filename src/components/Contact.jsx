import { CONTACT } from "../constants";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub, FaTwitter } from "react-icons/fa6";
import contact from "../assets/projects/contact.png";

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
  hidden: { opacity: 0, x: -100, rotateY: 90 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
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

const iconVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      bounce: 0.5,
    },
  },
  hover: {
    scale: 1.4,
    rotate: 15,
    color: "#ec4899",
    filter: "drop-shadow(0 0 8px rgba(236, 72, 153, 0.5))",
    transition: { duration: 0.3 },
  },
};

const Contact = () => {
  // Mouse position for interactive background
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const background = useTransform(
    [x, y],
    ([x, y]) => `radial-gradient(circle at ${x}px ${y}px, rgba(236, 72, 153, 0.3), rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.1))`
  );

  return (
    <section
      id="contact"
      className="pt-20 pb-24 relative"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
      }}
    >
      {/* Holographic Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ background }}
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Interactive Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${i % 2 === 0 ? "rounded-full" : "star"} bg-gradient-to-r from-pink-300/50 to-purple-300/50`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${6 + Math.random() * 10}px`,
              height: `${6 + Math.random() * 10}px`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
              x: [0, Math.random() * 20 - 10],
              y: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Glassmorphism Container */}
      <div className="relative mx-auto max-w-screen-xl px-6">
        <Tilt
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          perspective={1200}
          scale={1.03}
          className="rounded-3xl bg-white/60 backdrop-blur-xl shadow-2xl shadow-purple-100/30 ring-1 ring-purple-100/60 p-6 sm:p-10 overflow-hidden"
        >
          {/* Gradient Accent Lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400/60 to-transparent"></div>

          {/* Animated Title with Soundwave Effect */}
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="my-12 text-center text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-900 via-pink-800 to-blue-800 relative"
          >
            Let Connect
            <motion.span
              className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400"
              animate={{ scaleX: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.h2>

          {/* Contact Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:flex justify-center items-center gap-16 lg:px-20 lg:mx-20 relative"
          >
            {/* Subtle Vertical Accent Line */}
            <div className="hidden lg:block absolute -left-10 top-0 h-full w-1 bg-gradient-to-b from-transparent via-purple-400/60 to-transparent"></div>

            {/* Contact Image with Flip Effect */}
            <motion.div
              variants={childVariants}
              className="flex justify-center mb-10 lg:mb-0 lg:w-1/2 perspective-1000"
            >
              <motion.div
                className="w-40 lg:w-full max-w-md rounded-2xl bg-white/20 backdrop-blur-sm shadow-lg shadow-purple-100/30"
                whileHover={{ rotateY: 180, transition: { duration: 0.6 } }}
              >
                <img
                  src={contact}
                  alt="Digital communication illustration"
                  className="w-full object-contain rounded-2xl"
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backface-hidden"
                  initial={{ rotateY: 180 }}
                  whileHover={{ rotateY: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-lg text-white font-semibold">Reach Out!</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Information with Flip Cards */}
            <div className="text-center lg:text-left">
              <motion.div
                variants={childVariants}
                className="mb-6 perspective-1000"
                whileHover={{ rotateY: 180, transition: { duration: 0.6 } }}
              >
                <div className="p-6 rounded-xl bg-white/20 backdrop-blur-sm shadow-lg shadow-purple-100/30 backface-hidden">
                  <p className="text-lg lg:text-xl text-gray-700 tracking-tight leading-relaxed">
                    {CONTACT.address}
                  </p>
                </div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl backface-hidden"
                  initial={{ rotateY: 180 }}
                  whileHover={{ rotateY: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-lg text-white font-semibold">Find Me Here</p>
                </motion.div>
              </motion.div>
              <motion.div
                variants={childVariants}
                className="mb-6 perspective-1000"
                whileHover={{ rotateY: 180, transition: { duration: 0.6 } }}
              >
                <div className="p-6 rounded-xl bg-white/20 backdrop-blur-sm shadow-lg shadow-purple-100/30 backface-hidden">
                  <p className="text-lg lg:text-xl text-gray-700 tracking-tight leading-relaxed">
                    {CONTACT.phoneNo}
                  </p>
                </div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl backface-hidden"
                  initial={{ rotateY: 180 }}
                  whileHover={{ rotateY: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-lg text-white font-semibold">Call Me</p>
                </motion.div>
              </motion.div>
              <motion.div
                variants={childVariants}
                className="mb-6 perspective-1000"
                whileHover={{ rotateY: 180, transition: { duration: 0.6 } }}
              >
                <div className="p-6 rounded-xl bg-white/20 backdrop-blur-sm shadow-lg shadow-purple-100/30 backface-hidden">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-lg lg:text-xl text-gray-700 tracking-tight leading-relaxed hover:underline"
                  >
                    {CONTACT.email}
                  </a>
                </div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl backface-hidden"
                  initial={{ rotateY: 180 }}
                  whileHover={{ rotateY: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-lg text-white font-semibold">Send an Email</p>
                </motion.div>
              </motion.div>
              {/* Social Media Icons */}
              <motion.div
                variants={containerVariants}
                className="flex justify-center lg:justify-start gap-8 mt-8 text-3xl text-gray-700"
              >
                <motion.a
                  href={CONTACT.linkedin || "https://www.linkedin.com/in/karthickronin"}
                  aria-label="Visit Karthick's LinkedIn profile"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href={CONTACT.github || "https://github.com/karthickronin"}
                  aria-label="Visit Karthick's GitHub profile"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href={CONTACT.instagram || "https://www.instagram.com/karthick_ronin_/"}
                  aria-label="Visit Karthick's Instagram profile"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  href={CONTACT.twitter || "https://x.com/karthickronin"}
                  aria-label="Visit Karthick's Twitter/X profile"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <FaTwitter />
                </motion.a>
              </motion.div>
              {/* Contact Form Teaser */}
              <motion.div
                variants={childVariants}
                className="mt-10 p-6 rounded-xl bg-white/20 backdrop-blur-sm cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 12px rgba(236, 72, 153, 0.4)" }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg text-gray-600 italic">
                  Want to send a message? Contact form coming soon...
                </p>
              </motion.div>
            </div>
          </motion.div>
        </Tilt>
      </div>

      {/* Custom Animations and Styles */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .star {
          clip-path: polygon(
            50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%,
            50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%
          );
        }
        @keyframes sparkle {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.8); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Contact;