const styles = {
  container: {
    fontFamily: "'Inter', sans-serif",
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
  },
  anchorHeader: {
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
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 100,
    width: '100vw',
    boxSizing: 'border-box',
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
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    padding: '8px 12px',
    position: 'relative',
    transition: 'color 0.3s ease',
  },
  heroContainer: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    margin: 0,
    padding: 0,
    backgroundColor: '#000',
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
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: '#fff',
    maxWidth: '800px',
    textAlign: 'left',
    lineHeight: '1.3',
  },
  animatedText: {
    color: '#d36fff',
    marginLeft: '8px',
    whiteSpace: 'nowrap',
  },
  backButton: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    padding: '10px 18px',
    fontSize: '1rem',
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: '#fff',
    border: '1px solid #fff',
    borderRadius: '8px',
    cursor: 'pointer',
    zIndex: 5,
  },
  gridItem: {
    breakInside: 'avoid',
    marginBottom: '20px',
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
  },
  moreProjectsButton: {
    marginTop: '40px',
    padding: '12px 28px',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#fff',
    background: 'linear-gradient(90deg, #6e3fff, #d36fff)',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(211, 111, 255, 0.3)',
    position: 'relative',
    zIndex: 1,
  },
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
    padding: '60px 20px',
    backgroundColor: '#000',
    overflowX: 'hidden',
    width: '100vw',
    height: 'auto',
    boxSizing: 'border-box',
  },
  contactHeader: {
    fontSize: '2.8rem',
    marginBottom: '30px',
    textAlign: 'center',
    color: '#fff',
  },
  contactIcons: {
    display: 'flex',
    gap: '40px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  contactLink: {
    display: 'inline-block',
    fontSize: '1.2rem',
    color: '#fff',
    border: '1px solid #fff',
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
  },
  contactLinkHover: `
    .contactLink:hover {
      color: #fff;
      background: linear-gradient(90deg, #6e3fff, #d36fff);
      border-color: transparent;
      transform: translateY(-3px);
    }
  `,
};

const navHoverStyle = `
  .navLink::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -4px;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.4s ease, left 0.4s ease;
    transform: translateX(-50%);
  }
  .navLink:hover::after {
    width: 100%;
    left: 50%;
  }
`;

const masonryHoverStyle = `
  .grid-item:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 25px rgba(255, 255, 255, 0.1);
  }
`;

const moreProjectsHoverStyle = `
  .moreProjectsButton:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(211, 111, 255, 0.45);
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

if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML =
    navHoverStyle +
    styles.contactLinkHover +
    masonryHoverStyle +
    moreProjectsHoverStyle +
    masonryLayoutCSS +
    globalResetCSS;
  document.head.appendChild(styleEl);
}

export default styles;
