import React from 'react';
import styles from '../styles';

const Contact = () => {
  return (
    <section id="contact" style={styles.contactContainer}>
      <h2 style={styles.contactHeader}>Let’s Connect</h2>
      <p style={{ maxWidth: '600px', marginBottom: '20px', color: '#ccc', textAlign: 'center' }}>
        Feel free to reach out through any of the platforms below. I'm always open to new opportunities, collaborations, or just a chat!
      </p>
      <div style={styles.contactIcons}>
        <a href="mailto:youremail@example.com" className="contactLink" style={styles.contactLink}>Email</a>
        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="contactLink" style={styles.contactLink}>Instagram</a>
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="contactLink" style={styles.contactLink}>LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;
