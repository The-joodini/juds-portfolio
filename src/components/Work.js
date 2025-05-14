// Work.js
import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { useNavigate } from 'react-router-dom';
import getStyles from '../styles';

const ACCENT = '#6e3fff';            // latest purple

/* ------------- Project thumbnails ------------- */
const projectImages = [
  // ——— Original items ———
  {
    id: 'camp-fever',
    src: '/gallery/campFeverShirt.jpg',
    alt: 'Camp Fever Shirt',
    category: 'Branding',
  },
  {
    id: 'charleys-cheesesteak',
    src: '/gallery/cheesesteak.png',
    alt: 'Charleys Cheesesteak Poster',
    category: 'UI',
  },
  {
    id: 'threatlocker-steps',
    src: '/gallery/Threatlocker_12step.jpg',
    alt: 'ThreatLocker 12‑Step Campaign',
    category: 'Branding',
  },
  {
    id: 'moms-fuego',
    src: '/gallery/MomsFuego.jpg',
    alt: 'Mom’s Fuego Branding',
    category: 'Branding',
  },

  // ——— New items ———
  {
    id: 'threatlocker-ads',
    src: '/gallery/TL_Fin_580x400.gif',
    alt: 'ThreatLocker Ads Series',
    category: 'Branding',
  },
  {
    id: 'daves-hot-chicken',
    src: '/gallery/DavesSando.jpg',
    alt: 'Dave’s Hot Chicken Concept',
    category: 'Branding',
  },
  {
    id: 'darko',
    src: '/gallery/DarkoBrand.png',
    alt: 'Darko Design System',
    category: 'UI',
  },

  // ——— “In the Wild” live work ———
  {
    id: 'threatlocker-australia',
    src: '/gallery/TLWildAu2.png',
    alt: 'ThreatLocker Australia Campaign',
    category: 'In the Wild',
  },
  {
    id: 'threatlocker-ucf',
    src: '/gallery/TLUCF3.jpg',
    alt: 'ThreatLocker × UCF Stadium Activation',
    category: 'In the Wild',
  },
  {
    id: 'threatlocker-orlando-city',
    src: '/gallery/TLOrlandoC1.png',
    alt: 'ThreatLocker Orlando City Partnership',
    category: 'In the Wild',
  },
  {
    id: 'threatlocker-microsoft-extension',
    src: '/gallery/TLWeb1.png',
    alt: 'ThreatLocker Microsoft Edge Extension',
    category: 'In the Wild',
  },
];

const categories = ['All', 'UI', 'Branding', 'Animation', 'In the Wild'];

const Work = ({ theme = 'dark' }) => {
  const navigate = useNavigate();
  const styles = getStyles(theme);
  const [filter, setFilter] = useState('All');

  const filteredImages =
    filter === 'All'
      ? projectImages
      : projectImages.filter((img) => img.category === filter);

  const breakpointColumnsObj = { default: 3, 1100: 2, 700: 1 };

  return (
    <section style={styles.section} id="work">
      <h2 style={styles.anchorHeader}>My Work</h2>

      {/* Filter Buttons */}
      <div
        style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '40px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '8px 16px',
              border: `1px solid ${theme === 'dark' ? '#fff' : '#000'}`,
              borderRadius: '20px',
              cursor: 'pointer',
              background: filter === cat ? ACCENT : 'transparent',
              color:
                filter === cat ? '#fff' : theme === 'dark' ? '#fff' : '#000',
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
