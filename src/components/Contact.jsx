import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import contact from "../assets/projects/contact.png";

const Contact = () => {
  return (
    <div id="contact" className="border-t border-b border-stone-900 pb-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className='lg:flex justify-center lg:p-8 lg:items-center  tracking-tighter'>
        <div>
          <div className="flex justify-center w-full lg:w-1/2">
            <img
              className="lg:p-2 lg:w-full w-28 "
              // width={200}
              // height={300}
              src={contact}
              alt={contact}
            />
          </div>
        </div>
        <div className="text-center">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.address}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.phoneNo}
          </motion.p>
          <motion.a
            href="karthimad7707@gmail.com"
            whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {CONTACT.email}
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
