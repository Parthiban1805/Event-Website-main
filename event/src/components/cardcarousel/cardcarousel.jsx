import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import './cardcarousel.css';

const CardCarousel = () => {
  const sponsors = [
    {
      // name: '₹ 1,50,000',
      benefits: [
        '• Naming Rights',
        '• Top-Tier Branding',
        '• Featured Speaker Position',
        '• VIP Passes',
        '• Exclusive Media Coverage',
        '• Unique Branding Spots'
      ]
    },
    {
      // name: '₹ 1,00,000',
      benefits: [
        '• Event Shirt Logo',
        '• Frontline Banner Position',
        '• Social Media Shoutouts',
        '• VIP Passes',
        '• Exclusive Media Coverage'
      ]
    },
    {
      // name: '₹ 50,000',
      benefits: [
        '• Logo On Event Website',
        '• Program Mention',
        '• Logo On Event Materials',
        '• Social Media Mentions',
        '• Exclusive Media Coverage',
        '• VIP Passes'
      ]
    },
    {
      // name: '₹ 25,000',
      benefits: [
        '• Logo On Event Website',
        '• Program Mention',
        '• Logo On Event Materials',
        '• Social Media Shoutouts'
      ]
    },
    {
      // name: '₹ 10,000',
      benefits: [
        '• Logo On Event Website',
        '• Logo On Event Materials',
        '• Social Media Shoutout'
      ]
    },
    {
      // name: '₹:?/goodies:?',
      benefits: [
        '• Frame your own benefits and sponsorship amount or goodies'
      ]
    }
  ];

  const duplicatedSponsors = [...sponsors, ...sponsors]; // Duplicate the array for infinite scrolling
  const totalCards = sponsors.length;
  const [currentIndex, setCurrentIndex] = useState(totalCards);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const next = () => {
    if (currentIndex < duplicatedSponsors.length - 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(totalCards);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(totalCards - 1);
    }
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={prev}>
        &lt;
      </button>
      <div className="carousel">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${(currentIndex - totalCards) * (100 / 3)}%)`,
            transition: 'transform 0.5s ease-in-out'
          }}
        >
          <AnimatePresence>
            {duplicatedSponsors.map((sponsor, index) => (
              <motion.div
                className="card"
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                data-aos="fade-up"
              >
                <h3 className="card-name">{sponsor.name}</h3>
                <ul className="card-description">
                  {sponsor.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <button className="carousel-button next" onClick={next}>
        &gt;
      </button>
    </div>
  );
};

export default CardCarousel;
