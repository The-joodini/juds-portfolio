// Work.js
import React from 'react';
import Masonry from 'react-masonry-css';
import { useNavigate } from 'react-router-dom';
import styles from '../styles';

const projectImages = [
  '/gallery/campFeverShirt.jpg',
  '/gallery/cokeCan.png',
  '/gallery/momFries.jpg',
  '/gallery/cheesesteak.png',
  '/gallery/Threatlocker_12step.jpg',
  '/gallery/ThreatlockerRace.png',
  '/gallery/MomsFuego.jpg',

];

const Work = () => {
  const navigate = useNavigate();

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <section style={styles.section} id="work">
      <h2 style={styles.anchorHeader}>My Work</h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-column"
      >
        {projectImages.map((src, index) => (
          <div
            key={index}
            className="grid-item masonry-hover"
            style={styles.gridItem}
          >
            <img
              src={src}
              alt={`Project ${index + 1}`}
              style={styles.gridImage}
            />
          </div>
        ))}
      </Masonry>

      <button
        onClick={() => navigate('/projects')}
        style={styles.moreProjectsButton}
        className="moreProjectsButton"
      >
        More Projects
      </button>
    </section>
  );
};

export default Work;
