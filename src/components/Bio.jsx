import { BIO } from '../constants'
import { motion } from 'framer-motion'

const Bio = () => {
  return (
    <section className='flex flex-col justify-center items-center text-center gap-12 pt-20 pb-24' id='bio'>
        <motion.h2 whileInView={{opacity:1,y:0}}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }} className='text-center text-4xl'>
            Bio
        </motion.h2>
            <div>
                {BIO.map((bio,index) => (
                    <div className='lg:px-20 lg:mx-20' key={index}>
                        <motion.p whileInView={{opacity:1,x:0}}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 1 }} className=' py-6 text-xl tracking-tighter leading-relaxed'>
                        {bio.bio1}
                    </motion.p>
                        <motion.p whileInView={{opacity:1,x:0}}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 1 }} className=' py-6 text-xl tracking-tighter leading-relaxed'>
                        {bio.bio2}
                    </motion.p>
                        <motion.p whileInView={{opacity:1,x:0}}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 1 }} className=' py-6 text-xl tracking-tighter leading-relaxed'>
                        {bio.bio3}
                    </motion.p>
                        <motion.p whileInView={{opacity:1,x:0}}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 1 }} className=' py-6 text-xl tracking-tighter leading-relaxed'>
                        {bio.bio4}
                    </motion.p>
                    </div>
                ))}
            </div>
        
    </section>
  )
}

export default Bio
