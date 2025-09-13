import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer__container">
      <p className="footer__text">
        2025 ©{' '}
        <a className="footer__link" href="https://www.alejandrogoscu.es/" target="_blank" rel="noopener noreferrer">
          alejandrogoscu
        </a>
      </p>
      <div className="footer__links">
        <a className="footer__link" href="https://github.com/alejandrogoscu" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a
          className="footer__link"
          href="https://www.linkedin.com/in/alejandrogoscu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};
