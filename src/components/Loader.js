import React from 'react';
import './Loader.css';

const Loader = ({ isVisible = false }) => (
  <div className={`goo-loader ${isVisible ? 'show' : 'hide'}`}>
    <svg width="0" height="0">
      {/* SVG filter that makes circles merge into one blob */}
      <filter id="goo">
        <feGaussianBlur stdDeviation="12" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 18 -7"
          result="goo"
        />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
    </svg>

    <div className="blob-container">
      <span className="blob b1" />
      <span className="blob b2" />
      <span className="blob b3" />
      <span className="blob b4" />
    </div>

    <div className="logo-splash">J.</div>
  </div>
);

export default Loader;
