import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl text-center"
      >
        <p className={styles.sectionSubText}>Connect with me</p>
        <h3 className={styles.sectionHeadText}>Let's Talk!</h3>

        <div className="mt-8 flex flex-col items-center gap-6">
          <a
            href="https://www.linkedin.com/in/brian-amparo-901874221/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white text-lg hover:text-blue-400 transition"
          >
            <FaLinkedin size={30} className="text-blue-500" /> LinkedIn
          </a>
          <a
            href="https://www.instagram.com/briandevelop/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white text-lg hover:text-pink-400 transition"
          >
            <FaInstagram size={30} className="text-pink-500" /> Instagram
          </a>
          <a
            href="mailto:briandevelop21@gmail.com"
            className="flex items-center gap-3 text-white text-lg hover:text-red-400 transition"
          >
            <FaEnvelope size={30} className="text-red-500" /> briandevelop21@gmail.com
          </a>
          <a
            href="https://wa.me/18297745213"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white text-lg hover:text-green-400 transition"
          >
            <FaWhatsapp size={30} className="text-green-500" /> WhatsApp
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
