import React from 'react';
import styles from '../styles';

const Contact = () => (
  <section id="contact" style={styles.section}>
    <h2 style={styles.anchorHeader}>Get in Touch</h2>
    <p>Email me at <a href="mailto:you@example.com" style={{ color: '#a777e3' }}>you@example.com</a></p>
  </section>
);

export default Contact;
