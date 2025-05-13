// App.js
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import { Routes, Route, useLocation } from 'react-router-dom';

import Hero from './components/Hero';          // ⬅️  new hero section
import Work from './components/Work';
import Contact from './components/Contact';
import DraggableAbout from './components/DraggableAbout';
import Loader from './components/Loader';
import ProjectDetail from './components/ProjectDetail';
import CompaniesCarousel from './components/CompaniesCarousel';
import Footer from './components/Footer';

import getStyles from './styles';              // static dark theme

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const styles = getStyles();

  /* ------------------------------- effects ------------------------------- */
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const isHome = location.pathname === '/';

  /* ------------------------------- render -------------------------------- */
  return (
    <div className="app-wrapper">
      <Loader isVisible={loading} />

      {/* invisible anchor for “Back to Top” */}
      <div id="top" />

      { !loading && isHome && (
        <>
          {/* --------------------------- Navigation -------------------------- */}
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
            </div>
          </nav>

          {/* ---------------------------- Sections --------------------------- */}
          <Hero />
          <Work />
          <CompaniesCarousel />
          <DraggableAbout />
          <Contact />

          {/* ----------------------------- Footer ---------------------------- */}
          <Footer />
        </>
      )}

      {/* --------------------------- Project page --------------------------- */}
      <Routes>
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
};

export default App;
