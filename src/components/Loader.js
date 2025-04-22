import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = ({ isVisible }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      setFadeOut(true);
    }
  }, [isVisible]);

  return (
    <div className={`loader-wrapper ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <h1 className="loader-text">Hi, I’m <span>J.</span></h1>
      </div>
    </div>
  );
};

export default Loader;
