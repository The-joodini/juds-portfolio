import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';

const blobs = [
  '#d36fff', '#6e3fff', '#ff6f91', '#36d1dc', '#f9ca24', '#7bed9f',
];

// Generate a smooth staggered float animation
const getFloatAnimation = (index) => ({
  animate: {
    y: [0, -20, 0, 20, 0],
    x: [0, 15, 0, -15, 0],
    transition: {
      duration: 6 + index,
      delay: index * 0.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
});

const DraggableAbout = () => {
  const constraintRef = useRef(null);

  return (
    <section style={{ ...styles.section, padding: 0, position: 'relative' }} id="about">
      <div
        ref={constraintRef}
        style={{
          position: 'relative',
          width: '100%',
          height: '700px',
          overflow: 'hidden',
          backgroundColor: '#000',
        }}
      >
        {/* Text Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
            maxWidth: '900px',
            margin: '0 auto',
            padding: '80px 20px',
            textAlign: 'center',
          }}
        >
          <h2 style={styles.anchorHeader}>Who I Am</h2>

          <p className="draggable-text">
            I’m Joudi — a multidisciplinary designer and creative thinker.  
            I turn complexity into clarity with modern visuals and human-centered experiences.
          </p>

          <p
            style={{
              fontSize: '1rem',
              color: '#aaa',
              fontFamily: "'Chivo', sans-serif",
              marginTop: '10px',
              zIndex: 2,
              position: 'relative',
            }}
          >
            (drag the blobs to read about me)
          </p>
        </div>

        {/* Draggable Blobs */}
        {blobs.map((color, i) => (
          <motion.div
            key={i}
            drag
            dragConstraints={constraintRef}
            variants={getFloatAnimation(i)}
            animate="animate"
            whileTap={{ cursor: 'grabbing', scale: 1.15 }}
            style={{
              position: 'absolute',
              top: `${Math.random() * 75}%`,
              left: `${Math.random() * 85}%`,
              width: '120px',
              height: '120px',
              backgroundColor: color,
              borderRadius: '50%',
              cursor: 'grab',
              filter: 'blur(18px)',
              zIndex: 3,
              opacity: 0.6,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default DraggableAbout;
