// src/components/CompaniesCarousel.js
import React from 'react';
import styles from '../styles';

const companyLogos = [
  '/logos/Threatlocker.svg',
  '/logos/meta.png',
  '/logos/spotify.png',
  '/logos/amazon.png',
  '/logos/netflix.png',
];

const CompaniesCarousel = () => {
  return (
    <div style={styles.carouselContainer}>
      <div style={styles.carouselTrack}>
        {companyLogos.concat(companyLogos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company ${index}`}
            style={styles.carouselLogo}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        ))}
      </div>
    </div>
  );
};

export default CompaniesCarousel;
