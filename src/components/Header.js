import React from 'react';

const Header = () => (
  <div style={{
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  }}>
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
      }}
    >
      <source src="/playbackvideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div style={{
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '0 40px',
    }}>
      <h1 style={{
        fontSize: '3.5rem',
        fontWeight: 'bold',
        color: '#fff',
        maxWidth: '800px',
        textAlign: 'left',
        lineHeight: '1.3',
      }}>
        I build digital experiences<br />that engage and inspire.
      </h1>
    </div>
  </div>
);

export default Header;
