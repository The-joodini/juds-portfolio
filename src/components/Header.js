import React, { useEffect, useRef } from 'react';

const Header = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure the video plays even with autoplay restrictions
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => console.warn('Autoplay failed:', err));
    }
  }, []);

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
    }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
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
        <source src="/videoback.mp4" type="video/mp4" />
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
        zIndex: 1,
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
    </section>
  );
};

export default Header;
