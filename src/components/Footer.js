import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '20px', textAlign: 'center', color: '#aaa', fontSize: '0.9rem' }}>
      <p>© {new Date().getFullYear()} Joudi Abas. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
