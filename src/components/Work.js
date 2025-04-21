import React from 'react';
import styles from '../styles';
import { useNavigate } from 'react-router-dom';

const Work = () => {
  const navigate = useNavigate();

  const images = [
    '/gallery/img1.jpg',
    '/gallery/img2.jpg',
    '/gallery/img3.jpg',
    '/gallery/img4.jpg',
  ];

  return (
    <section id="work" style={styles.section}>
      <h2 style={styles.anchorHeader}>My Work</h2>
      <div style={styles.masonryGrid}>
        {images.map((src, i) => (
          <div key={i} style={styles.masonryItem}>
            <img src={src} alt={`Project ${i}`} style={{ width: '100%' }} />
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button
          onClick={() => navigate('/projects')}
          className="more-projects-button"
          style={styles.moreProjectsButton}
        >
          More Projects
        </button>
      </div>
    </section>
  );
};

export default Work;
