import React, { useEffect, useState } from 'react';
import styles from '../styles';

const heroWords = [
  'project management',
  'brand identity',
  'ads development',
  'user interfaces',
  'campaign strategy',
];

const AnimatedText = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = heroWords[wordIndex];

    const typingSpeed = deleting ? 40 : 90;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayedText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        setDisplayedText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % heroWords.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <div style={styles.heroText}>
      I’ve helped companies with
      <span style={styles.animatedText}> {displayedText}</span>
    </div>
  );
};

export default AnimatedText;
