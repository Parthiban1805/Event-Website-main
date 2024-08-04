import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './card.css';

const Card = ({ img, title, navlink }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <motion.div
      className="card-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={img} className="card-image" alt={title} data-aos="fade-in" />
      <div className="card-text">
        <h1 className="card-title">{title}</h1>
        <div className="card-nav">

        </div>
      </div>
    </motion.div>
  );
};

export default Card;
