import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Work from './components/Work';
import Contact from './components/Contact';
import DraggableAbout from './components/DraggableAbout';
import Projects from './components/Projects';
import Loader from './components/Loader'; // ✅ custom loader

import styles from './styles';

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ✅ Loader overlays everything */}
      <Loader isVisible={loading} />

      {!loading && location.pathname === '/' && (
        <>
          <nav style={styles.nav}>
          <div style={styles.navContainer}>
            <div style={styles.logo}>J.</div>
            <ul style={styles.navList}>
              <li>
                <Link
                  to="work"
                  smooth
                  duration={500}
                  style={styles.navLink}
                  className="navLink"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth
                  duration={500}
                  style={styles.navLink}
                  className="navLink"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth
                  duration={500}
                  style={styles.navLink}
                  className="navLink"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>


          <Header />
          <Work />
          <DraggableAbout />
          <Contact />
        </>
      )}

      <Routes>
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
};

export default App;
