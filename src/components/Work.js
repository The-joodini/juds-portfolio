import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles';

const projectImages = [
  '/gallery/campFeverShirt.jpg',
  '/gallery/cokeCan.png',
  '/gallery/momFries.jpg',
  '/gallery/img4.jpg',
  '/gallery/img5.jpg',
  '/gallery/img6.jpg',
];

const Work = () => {
  const navigate = useNavigate();

  return (
    <section style={styles.section} id="work">
      <h2 style={styles.anchorHeader}>My Work</h2>

      <div style={styles.masonryGrid}>
        {projectImages.map((src, index) => (
          <div key={index} style={styles.masonryItem}>
            <img
              src={src}
              alt={`Project ${index + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ))}
      </div>

      <button onClick={() => navigate('/projects')} style={styles.moreProjectsButton}>
        More Projects →
      </button>
    </section>
  );
};

export default Work;
