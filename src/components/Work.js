// Work.js
import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { useNavigate } from 'react-router-dom';
import getStyles from '../styles';

const projectImages = [
  {
    id: 'camp-fever',
    src: '/gallery/campFeverShirt.jpg',
    alt: 'Camp Fever Shirt',
    category: 'Branding',
  },
  {
    id: 'coke-can',
    src: '/gallery/cokeCan.png',
    alt: 'Coke Can Design',
    category: 'Branding',
  },
  {
    id: 'mom-fries',
    src: '/gallery/momFries.jpg',
    alt: 'Mom’s Fries Ad',
    category: 'UI',
  },
  {
    id: 'cheesesteak',
    src: '/gallery/cheesesteak.png',
    alt: 'Cheesesteak Poster',
    category: 'UI',
  },
  {
    id: 'threatlocker-steps',
    src: '/gallery/Threatlocker_12step.jpg',
    alt: 'Threatlocker 12-Step',
    category: 'Branding',
  },
  {
    id: 'threatlocker-race',
    src: '/gallery/ThreatlockerRace.png',
    alt: 'Threatlocker Race Campaign',
    category: 'Animation',
  },
  {
    id: 'moms-fuego',
    src: '/gallery/MomsFuego.jpg',
    alt: 'Mom’s Fuego Branding',
    category: 'Branding',
  },
];

const categories = ['All', 'UI', 'Branding', 'Animation'];

const Work = ({ theme = 'dark' }) => {
  const navigate = useNavigate();
  const styles = getStyles(theme);
  const [filter, setFilter] = useState('All');

  const filteredImages =
    filter === 'All'
      ? projectImages
      : projectImages.filter((img) => img.category === filter);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <section style={styles.section} id="work">
      <h2 style={styles.anchorHeader}>My Work</h2>

      {/* Filter Buttons */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '8px 16px',
              border: `1px solid ${theme === 'dark' ? '#fff' : '#000'}`,
              borderRadius: '20px',
              cursor: 'pointer',
              background: filter === cat ? '#d36fff' : 'transparent',
              color: filter === cat ? '#fff' : theme === 'dark' ? '#fff' : '#000',
              transition: 'all 0.3s ease-in-out',
              fontFamily: "'Chivo', sans-serif",
              fontWeight: 500,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-column"
      >
        {filteredImages.map((project) => (
          <div
            key={project.id}
            className="grid-item"
            style={styles.gridItem}
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <img
              src={project.src}
              alt={project.alt}
              style={styles.gridImage}
            />
          </div>
        ))}
      </Masonry>
    </section>
  );
};

export default Work;
