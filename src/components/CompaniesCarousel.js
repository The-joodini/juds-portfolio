// src/components/CompaniesCarousel.js
import React, { useEffect } from 'react';

const companyLogos = [
  '/logos/Threatlocker.svg',
  '/logos/mexican camelwhite.png',
  '/logos/daveslogo.svg',
  '/logos/amazon.png',
  '/logos/netflix.png',
];

const CompaniesCarousel = () => {
  // Inject the animation and layout styles using className instead of inline style
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      .carousel-container {
        width: 100%;
        overflow: hidden;
        padding: 20px 0;
      }

      .carousel-track {
        display: flex;
        animation: scroll 25s linear infinite;
        width: max-content;
      }

      .carousel-logo {
        height: 40px;
        margin: 0 40px;
        transition: transform 0.3s ease-in-out;
      }

      .carousel-logo:hover {
        transform: scale(1.1);
      }
    `;
    document.head.appendChild(styleEl);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {companyLogos.concat(companyLogos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company ${index}`}
            className="carousel-logo"
          />
        ))}
      </div>
    </div>
  );
};

export default CompaniesCarousel;
