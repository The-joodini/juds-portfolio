import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';

const traits = [
  '🎨', '🧠', '⚡', '💬', '📦', '🌱', '💡', '🎯', '🎮', '📐',
  '🖌️', '🕹️', '🧩', '📊', '🖼️', '🎞️',
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
          minHeight: '500px',
          maxWidth: '1000px',
          margin: '0 auto',
          overflow: 'hidden', // keep emojis inside
        }}
      >
        {/* Always visible text */}
        <p
          style={{
            fontSize: '2rem',
            lineHeight: '1.6',
            textAlign: 'center',
            zIndex: 0,
            position: 'relative',
            padding: '0 20px',
          }}
        >
          I’m Joudi — a multidisciplinary designer and creative thinker.  
          I turn complexity into clarity with modern visuals and human-centered experiences.
        </p>

        {/* Draggable icons constrained within the section */}
        {traits.map((icon, i) => (
          <motion.div
            key={i}
            drag
            dragConstraints={constraintRef}
            style={{
              position: 'absolute',
              top: `${Math.random() * 60 + 5}%`,
              left: `${Math.random() * 75 + 5}%`,
              fontSize: '6rem',
              cursor: 'grab',
              userSelect: 'none',
              zIndex: 5,
            }}
            whileDrag={{ scale: 1.1, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DraggableAbout;
