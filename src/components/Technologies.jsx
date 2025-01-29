import { FaNodeJs,  FaReact } from "react-icons/fa6";
import { SiDjango, SiFlask, SiMongodb, SiMysql, SiPython } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

const iconvariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div id="skills" className="pb-24">
      <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Skills
      </motion.h2>
      <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex gap-4 flex-wrap items-center justify-center">
        <motion.div initial="initial" animate="animate" variants={iconvariants(2.5)}className="p-4">
        <SiPython className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconvariants(3.5)}className="p-4">
        <SiDjango className="text-7xl text-green-800" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconvariants(4.5)}className="p-4">
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconvariants(3)} className="p-4">
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconvariants(5)} className="p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconvariants(2)} className="p-4">
          <SiMysql className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconvariants(6)} className="p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={iconvariants(4)} className="p-4">
          <SiFlask className="text-7xl text-white" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
