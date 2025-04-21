import React from 'react';
import styles from '../styles';

const Header = () => (
  <div style={styles.heroOverlay}>
    <video autoPlay loop muted playsInline style={styles.videoBackground}>
      <source src="/public/gallery/videoplayback.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div style={styles.heroText}>
      I build digital experiences<br />that engage and inspire.
    </div>
  </div>
);

export default Header;
