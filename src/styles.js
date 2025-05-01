const getStyles = (theme = 'dark') => {
  const isDark = theme === 'dark';
  const bgColor = isDark ? '#000' : '#fff';
  const textColor = isDark ? '#fff' : '#000';

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
      background-color: ${textColor};
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

  const globalResetCSS = `
    html, body, #root {
      margin: 0;
      padding: 0;
      width: 100vw;
      overflow-x: hidden;
      background-color: ${bgColor};
    }
    * {
      box-sizing: border-box;
    }
    .app-wrapper.dark {
      background-color: #000;
      color: #fff;
      transition: all 0.3s ease;
    }
    .app-wrapper.light {
      background-color: #fff;
      color: #000;
      transition: all 0.3s ease;
    }
    .themeToggle {
      background: none;
      border: 1px solid;
      padding: 6px 12px;
      font-family: 'Chivo', sans-serif;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }
    .app-wrapper.light .themeToggle {
      border-color: #000;
      color: #000;
    }
    .app-wrapper.dark .themeToggle {
      border-color: #fff;
      color: #fff;
    }
  `;

  const carouselAnimation = `
    @keyframes scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }
  `;

  const masonryHoverStyle = `
    .grid-item:hover {
      transform: scale(1.03);
      box-shadow: 0 10px 25px rgba(255, 255, 255, 0.1);
    }
  `;

  const masonryLayoutCSS = `
    .masonry-grid {
      display: flex;
      margin-left: -20px;
      width: 100%;
    }
    .masonry-column {
      flex: 1;
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

  if (typeof document !== 'undefined') {
    const styleEl = document.createElement('style');
    styleEl.innerHTML =
      navHoverStyle +
      masonryHoverStyle +
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
      color: textColor,
      scrollBehavior: 'smooth',
      margin: 0,
      padding: 0,
      width: '100vw',
      minHeight: '100vh',
      boxSizing: 'border-box',
      overflowX: 'hidden',
      backgroundColor: bgColor,
      position: 'relative',
    },
    section: {
      width: '100vw',
      padding: '80px 40px',
      minHeight: '100vh',
      backgroundColor: bgColor,
      color: textColor,
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
      color: textColor,
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
      color: textColor,
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
      color: textColor,
      textDecoration: 'none',
      fontSize: '18px',
      cursor: 'pointer',
      padding: '8px 12px',
      position: 'relative',
      transition: 'color 0.3s ease',
      backgroundColor: 'transparent',
    },
    heroContainer: {
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      margin: 0,
      padding: 0,
      backgroundColor: bgColor,
    },
    videoBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      objectFit: 'cover',
      zIndex: -1,
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)',
      zIndex: 0,
    },
    heroContent: {
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '0 40px',
      zIndex: 1,
    },
    heroText: {
      fontFamily: "'Chivo', sans-serif",
      fontSize: '3.5rem',
      fontWeight: 'bold',
      color: textColor,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textAlign: 'center',
    },
    animatedText: {
      color: '#d36fff',
      marginLeft: '8px',
      whiteSpace: 'nowrap',
      fontFamily: "'Chivo', sans-serif",
    },
    gridItem: {
      breakInside: 'avoid',
      marginBottom: '20px',
      width: '100%',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
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
