import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';

const blobs = [
  '#d36fff', '#6e3fff', '#ff6f91', '#36d1dc', '#f9ca24', '#7bed9f',
];

const DraggableAbout = () => {
  const constraintRef = useRef(null);

  return (
    <section style={styles.section} id="about">
      <h2 style={styles.anchorHeader}>Who I Am</h2>

      <div
        ref={constraintRef}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1000px',
          height: '600px',
          margin: '0 auto',
          overflow: 'hidden',
        }}
      >
        {/* Paragraph UNDER blobs */}
        <p
          style={{
            fontSize: '1.8rem',
            lineHeight: '1.6',
            textAlign: 'center',
            zIndex: 0,
            position: 'relative',
            padding: '0 20px',
            color: '#fff',
            fontFamily: "'Cambo', serif",
          }}
        >
          I’m Joudi — a multidisciplinary designer and creative thinker.  
          I turn complexity into clarity with modern visuals and human-centered experiences.
        </p>

        <p
          style={{
            fontSize: '1rem',
            textAlign: 'center',
            marginTop: '10px',
            color: '#aaa',
            fontFamily: "'Chivo', sans-serif",
            zIndex: 0,
            position: 'relative',
          }}
        >
          (drag the blobs around)
        </p>

        {/* Draggable Blobs */}
        {blobs.map((color, i) => (
          <motion.div
            key={i}
            drag
            dragConstraints={constraintRef}
            whileTap={{ cursor: 'grabbing', scale: 1.15 }}
            style={{
              position: 'absolute',
              top: `${Math.random() * 70 + 5}%`,
              left: `${Math.random() * 75 + 5}%`,
              width: '100px',
              height: '100px',
              backgroundColor: color,
              borderRadius: '50%',
              cursor: 'grab',
              filter: 'blur(15px)',
              zIndex: 5,
              transition: '0.3s ease',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default DraggableAbout;
