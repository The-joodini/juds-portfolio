const getStyles = () => {
  const navHoverStyle = `
    .navLink {
      background-color: transparent !important;
    }

    .navLink::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -4px;
      width: 0;
      height: 2px;
      background-color: #fff;
      transition: width 0.4s ease, left 0.4s ease;
      transform: translateX(-50%);
    }

    .navLink:hover::after {
      width: 100%;
      left: 50%;
    }

    .navLink:hover,
    .navLink:focus,
    .navLink:active {
      background-color: transparent !important;
      box-shadow: none !important;
      outline: none !important;
    }
  `;

  const masonryHoverStyle = `
    .grid-item {
      transition: transform 0.35s ease, box-shadow 0.35s ease, filter 0.25s ease;
    }

    .grid-item:hover {
      transform: scale(1.04);
      box-shadow: 0 12px 32px rgba(211, 111, 255, 0.15);
      filter: brightness(1.1) saturate(1.05);
    }
  `;

  const draggableAboutStyle = `
    .draggable-text {
      font-size: 2rem;
      line-height: 1.6;
      text-align: center;
      color: #fff;
      z-index: 0;
      position: relative;
      padding: 0 20px;
      font-family: 'Cambo', serif;
    }

    .draggable-icon {
      font-size: 5rem;
      position: absolute;
      user-select: none;
      cursor: grab;
      z-index: 5;
    }
  `;

  const masonryLayoutCSS = `
    .masonry-grid {
      display: flex;
      margin-left: -20px;
      width: auto;
    }

    .masonry-column {
      padding-left: 20px;
      background-clip: padding-box;
    }

    .masonry-column > .grid-item {
      margin-bottom: 20px;
    }
  `;

  const contactInputFocus = `
    input:focus, textarea:focus {
      border-color: #d36fff;
    }
  `;

  const allButtonsHover = `
    button:hover,
    .moreProjectsButton:hover,
    .contact-submit:hover,
    .navLink:hover,
    .backButton:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(211, 111, 255, 0.45);
    }
  `;

  const globalResetCSS = `
    html, body, #root {
      margin: 0;
      padding: 0;
      width: 100vw;
      overflow-x: hidden;
      background-color: #000;
    }

    * {
      box-sizing: border-box;
    }
  `;

  const carouselAnimation = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;

  if (typeof document !== 'undefined') {
    const styleEl = document.createElement('style');
    styleEl.innerHTML =
      navHoverStyle +
      masonryHoverStyle +
      draggableAboutStyle +
      masonryLayoutCSS +
      contactInputFocus +
      allButtonsHover +
      globalResetCSS +
      carouselAnimation;
    document.head.appendChild(styleEl);
  }

  return {
    container: {
      fontFamily: "'Cambo', serif",
      color: '#fff',
      scrollBehavior: 'smooth',
      margin: 0,
      padding: 0,
      width: '100vw',
      minHeight: '100vh',
      boxSizing: 'border-box',
      overflowX: 'hidden',
      backgroundColor: '#000',
      position: 'relative',
    },
    section: {
      width: '100vw',
      padding: '80px 40px',
      minHeight: '100vh',
      backgroundColor: '#000',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      margin: 0,
      boxSizing: 'border-box',
      fontFamily: "'Cambo', serif",
    },
    anchorHeader: {
      fontFamily: "'Chivo', sans-serif",
      fontSize: '2.5rem',
      marginBottom: '2rem',
      color: '#fff',
      textAlign: 'center',
    },
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      padding: '20px 0',
      backgroundColor: 'transparent',
      display: 'flex',
      justifyContent: 'center',
      zIndex: 100,
      width: '100vw',
      boxSizing: 'border-box',
      fontFamily: "'Chivo', sans-serif",
    },
    navContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      maxWidth: '1600px',
      margin: '0 auto',
      padding: '0 40px',
      boxSizing: 'border-box',
    },
    logo: {
      fontFamily: "'Cambo', sans-serif",
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#fff',
      letterSpacing: '2px',
      cursor: 'pointer',
    },
    navList: {
      display: 'flex',
      listStyle: 'none',
      gap: '30px',
      padding: 0,
      margin: 0,
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '18px',
      cursor: 'pointer',
      padding: '8px 12px',
      position: 'relative',
      transition: 'color 0.3s ease',
      backgroundColor: 'transparent',
    },
    gridItem: {
      breakInside: 'avoid',
      marginBottom: '20px',
      width: '100%',
      transition: 'transform 0.35s ease, box-shadow 0.35s ease',
      cursor: 'pointer',
      borderRadius: '12px',
      overflow: 'hidden',
    },
    gridImage: {
      width: '100%',
      height: 'auto',
      display: 'block',
      borderRadius: '12px',
      objectFit: 'cover',
    },
  };
};

export default getStyles;
