import profilePic from "../assets/raviKumarProfile.webp";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};
const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36 pt-20">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              width={550}
              height={550}
              src={profilePic}
              alt="Karthick S"
              className="border border-stone-900 rounded-3xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-20">
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2 variants={childVariants} className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              KARTHICK S
            </motion.h2>
            <motion.span variants={childVariants} className="bg-gradient-to-r from-slate-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>
            <motion.p variants={childVariants} className="my-2 max-w-lg py-6 text-xl tracking-tighter leading-relaxed">
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/resume.pdf"
              download
              className="bg-white text-stone-800 mb-10 text-sm p-4 rounded-full hover:bg-stone-700 hover:text-stone-100"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
