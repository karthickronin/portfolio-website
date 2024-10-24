import { FaInstagram, FaLinkedin,  } from "react-icons/fa";
import {  FaGithub, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-10">
      {/* <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="Logo" />
        </a>
      </div> */}
      <div className="flex items-center justify-center gap-4 text-2xl">
        <a
          className="hover:text-yellow-400"
          href="https://www.linkedin.com/in/karthickronin"
        >
          <FaLinkedin />
        </a>
        <a
          className="hover:text-yellow-400"
          href="https://github.com/karthickronin"
        >
          <FaGithub />
        </a>
        <a
          className="hover:text-yellow-400"
          href="https://www.instagram.com/karthick_ronin_/"
        >
          <FaInstagram />
        </a>
        <a className="hover:text-yellow-400" href="www.twitter.com">
          <FaTwitter />
        </a>
      </div>
      <p className="mt-8 text-center text-sm tracking-wide to-gray-400">
        &copy;KarthickRonin. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
