import React from 'react';
import { Link } from 'react-scroll';
import styles from './styles';
import Header from './components/Header';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li><Link to="work" className="nav-link" style={styles.navLink}>Work</Link></li>
          <li><Link to="about" className="nav-link" style={styles.navLink}>About</Link></li>
          <li><Link to="contact" className="nav-link" style={styles.navLink}>Contact</Link></li>
        </ul>
      </nav>

      <Header />
      <Work />
      <About />
      <Contact />
    </div>
  );
};

export default App;
