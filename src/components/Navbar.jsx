import { FaInstagram, FaLinkedin, FaTimes } from "react-icons/fa";
import logo from "../assets/karthick.webp";
import { FaBars, FaGithub, FaTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { motion, animate } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
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
      x: "100vw",
      transition: {
        staggerChildren: 0.5,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 1,
        damping: 15,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const navVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.7, 
        ease: "easeOut" 
      } 
    }
  };

  const linkVariants = {
    hover: { 
      scale: 1.1, 
      color: "#ec4899", 
      transition: { 
        type: "spring", 
        stiffness: 400 
      } 
    }
  };

  const iconVariants = {
    hover: { 
      scale: 1.2, 
      color: "#ec4899", 
      rotate: 5,
      transition: { 
        type: "spring", 
        stiffness: 500 
      } 
    }
  };

  return (
    <div>
      <motion.nav
        initial="initial"
        animate="animate"
        variants={navVariants}
        className="fixed left-0 right-0 lg:top-6 z-50"
      >
        {/* Desktop menu */}
        <div 
          className={`mx-auto hidden max-w-3xl items-center justify-center rounded-2xl py-3 backdrop-blur-xl lg:flex
            ${scrolled 
              ? "bg-white/70 shadow-lg shadow-pink-100/40 border border-pink-100/40" 
              : "bg-white/40 border border-white/30"
            } transition-all duration-500`}
        >
          <div className="flex items-center justify-between gap-6">
            <div>
              <a className="text-sm" href="#">
                <motion.img
                  whileHover={{ 
                    scale: 1.15, 
                    filter: "drop-shadow(0 0 8px rgba(236, 72, 153, 0.5))" 
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  width={50}
                  src={logo}
                  alt="Logo"
                />
              </a>
            </div>
            <div>
              <ul className="flex px-10 items-center gap-6">
                {NAVIGATION_LINKS.map((item, index) => (
                  <motion.li variants={linkVariants} whileHover="hover" key={index}>
                    <a
                      className="text-gray-800 font-medium tracking-wide transition-colors hover:text-pink-500"
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
          <div className="ps-6 flex items-center justify-end gap-5 text-xl">
            <motion.a 
              variants={iconVariants}
              whileHover="hover"
              className="text-gray-700 hover:text-pink-500 transition-colors"
              href="https://www.linkedin.com/in/karthickronin"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              variants={iconVariants}
              whileHover="hover"
              className="text-gray-700 hover:text-pink-500 transition-colors"
              href="https://github.com/karthickronin"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              variants={iconVariants}
              whileHover="hover"
              className="text-gray-700 hover:text-pink-500 transition-colors"
              href="https://www.instagram.com/karthick_ronin_/"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              variants={iconVariants}
              whileHover="hover"
              className="text-gray-700 hover:text-pink-500 transition-colors"
              href="https://twitter.com"
            >
              <FaTwitter />
            </motion.a>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`mx-4 rounded-xl backdrop-blur-xl lg:hidden ${
            scrolled 
              ? "bg-white/70 shadow-lg shadow-pink-100/30 border border-pink-100/30" 
              : "bg-white/40 border border-white/30"
          } transition-all duration-300`}
        >
          <div className="flex items-center justify-between px-4">
            <div>
              <a href="#">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src={logo}
                  className="m-2 w-10 h-10"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="flex items-center">
              <motion.button
                whileHover={{ scale: 1.1, color: "#ec4899" }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="focus:outline-none lg:hidden text-gray-800"
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
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="border-t border-pink-100/30"
            >
              <ul className="ml-4 mt-4 justify-center items-start flex flex-col gap-4 backdrop-blur-xl pb-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <motion.li
                    whileHover={{ scale: 1.05, x: 5, color: "#ec4899" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    key={index}
                  >
                    <a
                      href={item.href}
                      className="block w-full text-lg font-medium text-gray-800 py-2 px-1 border-b border-pink-100/20"
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="flex items-center justify-center gap-6 text-xl p-4">
                <motion.a
                  whileHover={{ scale: 1.2, color: "#ec4899" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-gray-700"
                  href="https://www.linkedin.com/in/karthickronin"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: "#ec4899" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-gray-700"
                  href="https://github.com/karthickronin"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: "#ec4899" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-gray-700"
                  href="https://www.instagram.com/karthick_ronin_/"
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: "#ec4899" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-gray-700"
                  href="https://twitter.com"
                >
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