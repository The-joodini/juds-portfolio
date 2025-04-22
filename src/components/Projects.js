import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles';
import './Projects.css';

const heroWords = [
  'project management',
  'brand identity',
  'ads development',
  'user interfaces',
  'campaign strategy',
];

const Projects = () => {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = heroWords[wordIndex];
    const typingSpeed = deleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplayedText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        setDisplayedText(currentWord.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % heroWords.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, wordIndex]);

  const projectList = [
    {
      title: 'Project Alpha',
      image: '/gallery/campFeverShirt.jpg',
      description: 'UI design for streetwear campaign',
    },
    {
      title: 'Project Beta',
      image: '/gallery/momFries.jpg',
      description: 'Branding & food truck launch',
    },
    {
      title: 'Project Gamma',
      image: '/gallery/cheesesteak.png',
      description: 'Social media ad concept',
    },
    {
      title: 'Project Delta',
      image: '/gallery/img4.jpg',
      description: 'Visual campaign for local events',
    },
  ];

  return (
    <>
      <div className="projects-hero">
        <video autoPlay loop muted playsInline className="projects-video">
          <source src="/videoback.mp4" type="video/mp4" />
        </video>
        <div className="projects-overlay" />
        <button onClick={() => navigate('/')} style={styles.backButton}>
          ← Back
        </button>
        <div className="projects-content">
          I’ve helped companies with
          <span className="projects-highlight"> {displayedText}</span>
        </div>
      </div>

      <section style={{ ...styles.section, paddingTop: '60px' }}>
        <h2 className="section-title">Our Projects</h2>

        <div className="project-grid">
          {projectList.map((proj, i) => (
            <div key={i} className="project-card">
              <img src={proj.image} alt={proj.title} />
              <h3>{proj.title}</h3>
              {/* Optional: show description below the image instead of inside hover */}
              {/* <p className="project-description">{proj.description}</p> */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
