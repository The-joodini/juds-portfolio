// styles.js
const styles = {
  container: {
    fontFamily: "'Inter', sans-serif",
    color: '#fff',
    scrollBehavior: 'smooth',
    overflowX: 'hidden',
    margin: 0,
    padding: 0,
  },
  section: {
    padding: '80px 20px',
    minHeight: '100vh',
    backgroundColor: '#000',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin: 0,
    paddingInline: 0,
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
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 100,
  },
  navList: {
    position: 'relative',
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
    width: '100%',
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
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
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
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
    padding: '60px 20px',
    backgroundColor: '#000',
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

if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = navHoverStyle + styles.contactLinkHover;
  document.head.appendChild(styleEl);
}

export default styles;