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
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = heroWords[wordIndex];
    const isComplete = text === currentWord;
    const isEmpty = text === '';

    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.slice(0, prev.length - 1)
          : currentWord.slice(0, prev.length + 1)
      );

      if (!isDeleting && isComplete) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && isEmpty) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % heroWords.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <div
      style={{
        ...styles.heroText,
        fontSize: '2.2rem',
        marginTop: '40px',
        display: 'inline-flex',
        flexWrap: 'nowrap',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        alignItems: 'center',
      }}
    >
      I’ve helped companies with&nbsp;
      <span
        style={{
          ...styles.animatedText,
          whiteSpace: 'nowrap',
          display: 'inline-block',
          minWidth: '150px',
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default AnimatedText;
