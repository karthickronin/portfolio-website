import { EDUCATION } from "../constants"
import { motion } from "framer-motion";


const Education = () => {
  return (
    <section id="education" className="pb-24 lg:mx20 lg:px-20">
       <motion.h2 whileInView={{opacity:1,y:0}}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">Education</motion.h2>
        {EDUCATION.map((edu,index)=>(
            <motion.div whileInView={{opacity:1,x:0}}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }} key={index} className="mb-6 p-10">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-lg">{edu.institution}</p>
                <p className="text-sm text-stone-300">{edu.duration}</p>
                <p className="mt-2">{edu.description}</p>
            </motion.div>
        ))}
    </section>
  )
}

export default Education
