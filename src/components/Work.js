// Work.js
import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import styles from '../styles';
import 'aos/dist/aos.css';

const projects = [
  { id: 'camp-fever', title: 'Camp Fever Shirt', image: '/gallery/campFeverShirt.jpg', category: 'Branding' },
  { id: 'coke-can', title: 'Coke Can Design', image: '/gallery/cokeCan.png', category: 'Branding' },
  { id: 'mom-fries', title: 'Mom’s Fries Ad', image: '/gallery/momFries.jpg', category: 'UI' },
  { id: 'cheesesteak', title: 'Cheesesteak Poster', image: '/gallery/cheesesteak.png', category: 'UI' },
  { id: 'threatlocker-steps', title: 'Threatlocker 12-Step', image: '/gallery/Threatlocker_12step.jpg', category: 'Animation' },
  { id: 'threatlocker-race', title: 'Threatlocker Race Campaign', image: '/gallery/ThreatlockerRace.png', category: 'Animation' },
  { id: 'moms-fuego', title: 'Mom’s Fuego Branding', image: '/gallery/MomsFuego.jpg', category: 'Branding' },
];

const categories = ['All', 'UI', 'Branding', 'Animation'];

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section style={styles.section} id="work">
      <h2 style={styles.anchorHeader}>My Work</h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '40px',
          flexWrap: 'wrap',
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              fontFamily: "'Chivo', sans-serif",
              fontWeight: 500,
              padding: '10px 22px',
              borderRadius: '30px',
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: selectedCategory === cat ? 'none' : '1px solid #fff',
              background:
                selectedCategory === cat
                  ? 'linear-gradient(90deg, #6e3fff, #d36fff)'
                  : 'transparent',
              color: '#fff',
              boxShadow:
                selectedCategory === cat
                  ? '0 4px 15px rgba(211, 111, 255, 0.4)'
                  : 'none',
            }}
            onMouseEnter={(e) => {
              if (selectedCategory !== cat)
                e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
            }}
            onMouseLeave={(e) => {
              if (selectedCategory !== cat) e.target.style.backgroundColor = 'transparent';
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-column"
      >
        {filteredProjects.map((project) => (
          <Link
            to={`/project/${project.id}`}
            key={project.id}
            style={{ textDecoration: 'none' }}
          >
            <div
              className="grid-item masonry-hover"
              style={styles.gridItem}
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <img
                src={project.image}
                alt={project.title}
                style={styles.gridImage}
              />
            </div>
          </Link>
        ))}
      </Masonry>
    </section>
  );
};

export default Work;
