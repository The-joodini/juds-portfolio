// App.js
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import { Routes, Route, useLocation } from 'react-router-dom';

import Hero from './components/Hero';
import Work from './components/Work';
import Contact from './components/Contact';
import DraggableAbout from './components/DraggableAbout';
import Loader from './components/Loader';
import ProjectDetail from './components/ProjectDetail';
import CompaniesCarousel from './components/CompaniesCarousel';
import Footer from './components/Footer';
import SiteStatusPopup from './components/SiteStatusPopup';   // popup

import getStyles from './styles';

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);   // ✅ only “loading”
  const styles = getStyles();

  /* ------------- effects ------------- */
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const isHome = location.pathname === '/';

  /* ------------- render -------------- */
  return (
    <div className="app-wrapper">
      <Loader isVisible={loading} />

      {!loading && <SiteStatusPopup />}

      <div id="top" />

      { !loading && isHome && (
        <>
          {/* navigation */}
          <nav style={styles.nav}>
            <div style={styles.navContainer}>
              <div style={styles.logo}>J.</div>

              <ul style={styles.navList}>
                <li><Link to="work"   smooth duration={500} style={styles.navLink}>Work</Link></li>
                <li><Link to="about"  smooth duration={500} style={styles.navLink}>About</Link></li>
                <li><Link to="contact" smooth duration={500} style={styles.navLink}>Contact</Link></li>
              </ul>
            </div>
          </nav>

          {/* sections */}
          <Hero />
          <Work />
          <CompaniesCarousel />
          <DraggableAbout />
          <Contact />
          <Footer />
        </>
      )}

      {/* project page */}
      <Routes>
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
};

export default App;
