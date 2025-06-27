import profilePic from "../assets/karthee.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
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

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36 pt-32">
      <div className="flex flex-wrap lg:flex-row-reverse items-center">
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <div className="flex justify-center lg:p-8 relative">
            {/* Decorative elements */}
            <div className="absolute -z-10 w-72 h-72 bg-gradient-to-br from-pink-200/30 to-pink-100/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-64 h-64 border border-pink-200/40 rounded-full"></div>
            
            {/* Image with frame effect */}
            <div className="relative p-2 rounded-3xl bg-gradient-to-br from-white via-pink-50 to-pink-100 shadow-xl shadow-pink-100/30">
              <motion.img
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 } 
                }}
                width={500}
                height={500}
                src={profilePic}
                alt="Karthick S"
                className="rounded-2xl object-cover"
              />
              
              {/* Subtle corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-pink-300/70 rounded-tl-xl"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-pink-300/70 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-pink-300/70 rounded-bl-xl"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-pink-300/70 rounded-br-xl"></div>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="w-full lg:w-1/2 lg:pl-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="flex flex-col items-center lg:items-start mt-10 relative">
            {/* Subtle accent line */}
            <div className="hidden lg:block absolute -left-10 top-0 h-full w-1 bg-gradient-to-b from-transparent via-pink-300/60 to-transparent"></div>
            
            <motion.h2 
              variants={childVariants} 
              className="pb-2 text-4xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800"
            >
              Karthick S
            </motion.h2>
            
            <motion.span 
              variants={childVariants} 
              className="text-pink-500 text-2xl font-medium tracking-tight"
            >
              Full Stack Developer
            </motion.span>
            
            <motion.p 
              variants={childVariants} 
              className="my-2 max-w-lg py-6 text-lg leading-relaxed text-gray-700"
            >
              {HERO_CONTENT}
            </motion.p>
            
            <motion.a
              variants={childVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(236, 72, 153, 0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              href="src/public/Karthick_profile.pdf"
              download
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium mb-10 px-8 py-4 rounded-full transition-all duration-300 shadow-md shadow-pink-200/50 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;