import { FaInstagram, FaLinkedin, FaTimes } from "react-icons/fa";
import logo from "../assets/raviKumarLogo.webp";
import { FaBars, FaGithub, FaTwitter } from "react-icons/fa6";
import { useState } from "react";
import { NAVIGATION_LINKS } from "../constants";
import {motion, animate } from "framer-motion";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY + offset;

      animate(window.scrollY, offsetPosition, {
        duration: 0.8, 
        onUpdate: (latest) => window.scrollTo(0, latest),
        ease: [0.25, 0.1, 0.25, 1], 
      });
    }
    setIsMobileMenuOpen(false);
  };
  const containerVariants = {
    hidden: { 
      opacity: 0, 
      x: '100vw',
      transition: {
        staggerChildren: 0.5,
      } 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: 'spring',
        mass: 1,
        damping: 15,
        staggerChildren: 0.2,
        when: "beforeChildren",
      }
    },
  };
  
  const childVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    }
  }
  return (
    // <nav className="flex items-center justify-between py-6">
      // <div className="flex flex-shrink-0 items-center">
      //   <a href="/" aria-label="Home">
      //     <img src={logo} alt="Logo" />
      //   </a>
      // </div>

    //   <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    //     <a href="https://www.linkedin.com/in/karthickronin">
    //       <FaLinkedin />
    //     </a>
    //     <a href="https://github.com/karthickronin">
    //       <FaGithub />
    //     </a>
    //     <a href="https://www.instagram.com/karthick_ronin_/">
    //       <FaInstagram />
    //     </a>
    //     <a href="www.twitter.com">
    //       <FaTwitter />
    //     </a>
    //   </div>
    // </nav>
    <div>
      <motion.nav 
     
      className="fixed left-0 right-0 lg:top-4 z-50 ">
        {/* desktopmenu */}
        <div className="mx-auto hidden max-w-3xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className="flex items-center justify-between gap-6">
            <div>
              <a className=" text-sm" href="#">
                <motion.img whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }} width={50} src={logo} alt="Logo" />
              </a>
            </div>
            <div>
              <ul className="flex px-10 items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <motion.li 
                  whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
                  variants={containerVariants}
              transition={{ type: 'spring', stiffness: 300 }} key={index}>
                    <a
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          <div className="ps-6 flex items-center justify-end gap-4 text-2xl">
            <motion.a whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }} href="https://www.linkedin.com/in/karthickronin">
              <FaLinkedin />
            </motion.a>
            <motion.a whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }} href="https://github.com/karthickronin">
              <FaGithub />
            </motion.a>
            <motion.a whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }} href="https://www.instagram.com/karthick_ronin_/">
              <FaInstagram />
            </motion.a>
            <motion.a whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }} href="www.twitter.com">
              <FaTwitter />
            </motion.a>
          </div>
        </div>
        {/* mobilemenu */}

        <div className="rounded-lg backdrop-blur-md lg:hidden" >
          <div className="flex items-center justify-between px-4 ">
            <div>
              <a href="#">
                <img src={logo} className="m-2" alt="Logo" />
              </a>
            </div>
            <div className="flex items-center">
              <motion.button whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }}
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </motion.button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <motion.div variants={containerVariants}>
                <ul className="ml-4 mt-4 justify-center items-center  flex flex-col  gap-4 backdrop-blur-md pb-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <motion.li whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  key={index}>
                    <a
                      href={item.href}
                      className=" block w-full text-lg border-b"
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </motion.li> 
                ))}
              </ul>
            <div className=" flex items-center justify-center gap-4 text-2xl p-4 ">
          <motion.a whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }} href="https://www.linkedin.com/in/karthickronin">
            <FaLinkedin />
          </motion.a>
          <motion.a whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }} href="https://github.com/karthickronin">
            <FaGithub />
          </motion.a>
          <motion.a whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }} href="https://www.instagram.com/karthick_ronin_/">
            <FaInstagram />
          </motion.a>
          <motion.a whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }} href="www.twitter.com">
            <FaTwitter />
          </motion.a>
        </div>
        </motion.div>
          )}
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
