import React, { useEffect, useRef } from 'react';

const Header = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Autoplay failed:', err);
        });
      }
    }
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        zIndex: 1, // ✅ ensures it's not below other full page layers
      }}
    >
      {/* Video Background */}
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
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="/videoback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9))',
          zIndex: 1,
        }}
      />

      {/* Text Content */}
      <div
        style={{
          zIndex: 2,
          padding: '0 40px',
          color: '#fff',
        }}
      >
        <h1
          style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            maxWidth: '800px',
            lineHeight: '1.3',
          }}
        >
          I build digital experiences<br />that engage and inspire.
        </h1>
      </div>
    </section>
  );
};

export default Header;
