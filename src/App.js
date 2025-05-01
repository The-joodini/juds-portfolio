// App.js
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Work from './components/Work';
import Contact from './components/Contact';
import DraggableAbout from './components/DraggableAbout';
import Loader from './components/Loader';
import ProjectDetail from './components/ProjectDetail';
import CompaniesCarousel from './components/CompaniesCarousel';

import './components/AppTheme.css'; // Theme class styles (light/dark wrapper)
import getStyles from './styles'; // Function-based styles

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark'); // default is dark mode
  const styles = getStyles(theme); // pass theme to styles

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const isHome = location.pathname === '/';

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`app-wrapper ${theme}`}>
      <Loader isVisible={loading} />

      {!loading && isHome && (
        <>
          {/* Navigation */}
          <nav style={styles.nav}>
            <div style={styles.navContainer}>
              <div style={styles.logo}>J.</div>
              <ul style={styles.navList}>
                <li>
                  <Link to="work" smooth duration={500} style={styles.navLink} className="navLink">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="about" smooth duration={500} style={styles.navLink} className="navLink">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="contact" smooth duration={500} style={styles.navLink} className="navLink">
                    Contact
                  </Link>
                </li>
              </ul>
              <button onClick={toggleTheme} className="themeToggle">
                {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
              </button>
            </div>
          </nav>

          {/* Sections */}
          <Header />
          <Work />
          <CompaniesCarousel />
          <DraggableAbout />
          <Contact />
        </>
      )}

      {/* Project Detail Route */}
      <Routes>
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
};

export default App;
