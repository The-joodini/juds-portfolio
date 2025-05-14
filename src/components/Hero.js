import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

/* images served from /public/gallery */
const cardImages = [
  '/gallery/cokeCan.png',
  '/gallery/DavesSoda.jpg',
  '/gallery/momFries.jpg',
  '/gallery/campFeverShirt.jpg',
];

const keywords = ['Brands', 'Products', 'Experiences', 'Stories'];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);

  /* cycle headline word every 2 s */
  useEffect(() => {
    const id = setInterval(
      () => setWordIndex((prev) => (prev + 1) % keywords.length),
      2000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <header className="hero">
      {/* (optional) video preserved for later */}
      {/* <video autoPlay loop muted className="hero__video" src="/video/hero-loop.mp4" /> */}
      <div className="hero__overlay" />

      <div className="hero__content">
        <h1 className="hero__title">
          Crafting 
          <span key={wordIndex} className="changing-word">
            {keywords[wordIndex]}
          </span>
          &nbsp;That Connect
        </h1>

        <p className="hero__subtitle">
          I blend design, motion, and code to turn ideas into engaging visual experiences.
        </p>

        <div className="hero__cta">
          <Link to="contact" smooth duration={500} className="btn btn--primary">
            Contact
          </Link>
          <Link to="work" smooth duration={500} className="btn btn--ghost">
            More Work
          </Link>
        </div>
      </div>

      {/* card strip */}
      <div className="hero__card-strip">
        {cardImages.map((src, i) => (
          <div
            key={i}
            className="hero-card-wrapper"
            style={{ transform: `translateY(${(i % 2) * 32}px) rotateZ(${i % 2 ? -3 : 3}deg)` }}
          >
            <div className="hero-card">
              <img src={src} alt={`sample-${i}`} loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Hero;
