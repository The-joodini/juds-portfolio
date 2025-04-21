import React, { useEffect, useState } from 'react';
import styles from '../styles';
import { useNavigate } from 'react-router-dom';

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
    { title: 'Project Alpha', image: '/gallery/img1.jpg' },
    { title: 'Project Beta', image: '/gallery/img2.jpg' },
    { title: 'Project Gamma', image: '/gallery/img3.jpg' },
    { title: 'Project Delta', image: '/gallery/img4.jpg' },
  ];

  return (
    <>
      <div style={styles.heroOverlay}>
        <video autoPlay loop muted playsInline style={styles.videoBackground}>
          <source src="/gallery/gradient-loop.mp4" type="video/mp4" />
        </video>
        <button onClick={() => navigate('/')} style={styles.backButton}>
          ← Back
        </button>
        <div style={styles.heroText}>
          I’ve helped companies with
          <span style={styles.animatedText}> {displayedText}</span>
        </div>
      </div>

      <section style={{ ...styles.section, paddingTop: '60px' }}>
        <h2 style={{ ...styles.anchorHeader, textAlign: 'center' }}>Our Projects</h2>

        <div style={styles.projectGrid}>
          {projectList.map((proj, i) => (
            <div key={i} style={styles.projectCard} className="project-hover">
              <img
                src={proj.image}
                alt={proj.title}
                style={{ width: '100%', borderRadius: '16px' }}
              />
              <h3 style={{ textAlign: 'center', marginTop: '10px' }}>{proj.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
