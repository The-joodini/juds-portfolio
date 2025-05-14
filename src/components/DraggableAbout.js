// src/components/DraggableAbout.js
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';

const blobs = [
  '#d36fff', '#6e3fff', '#ff6f91',
  '#36d1dc', '#f9ca24', '#7bed9f'
];

/* smooth float & sway */
const float = (i) => ({
  animate: {
    y: [0, -22, 0, 22, 0],
    x: [0, 16, 0, -16, 0],
    transition: {
      duration: 6 + i,
      delay: i * .4,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
});

const DraggableAbout = () => {
  const box = useRef(null);

  return (
    <section
      id="about"
      style={{ ...styles.section, padding: 0, position: 'relative' }}
    >
      {/* ----- drag area ----- */}
      <div
        ref={box}
        style={{
          position: 'relative',
          width: '100%',
          height: 700,
          overflow: 'hidden',
          background: '#000',
          touchAction: 'none'                 /* 👈 global for the box */
        }}
      >
        {/* ----- headline & copy ----- */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: 900,
            height: '100%',
            margin: '0 auto',
            padding: '80px 20px',
            textAlign: 'center',
            color: '#fff'
          }}
        >
          <h2 style={styles.anchorHeader}>Who I Am</h2>
          <p className="draggable-text">
            I’m Joudi — a multidisciplinary designer and creative thinker. I
            turn complexity into clarity with modern visuals and
            human‑centered experiences.
          </p>
          <p
            style={{
              fontSize: '1rem',
              color: '#aaa',
              fontFamily: "'Chivo', sans-serif",
              marginTop: 10
            }}
          >
            (drag the blobs to read about me)
          </p>
        </div>

        {/* ----- floating blobs ----- */}
        {blobs.map((c, i) => (
          <motion.div
            key={i}
            drag
            dragConstraints={box}
            dragMomentum={false}             /* stops inertia fling */
            variants={float(i)}
            animate="animate"
            whileTap={{ scale: 1.15 }}
            style={{
              position: 'absolute',
              top: `${Math.random() * 70 + 5}%`,
              left: `${Math.random() * 80 + 5}%`,
              width: 130,
              height: 130,
              background: c,
              borderRadius: '50%',
              filter: 'blur(18px)',
              opacity: .62,
              cursor: 'grab',
              touchAction: 'none',          /* 👈 touch‑friendly */
              userSelect: 'none',
              WebkitUserDrag: 'none',
              WebkitUserSelect: 'none',
              zIndex: 3
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default DraggableAbout;
