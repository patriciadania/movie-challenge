import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <ul className="footer-menu">
            <li className="footer-menu-item">
              <p>Desenvolvido por: PATRICIA ADANIA DE OLIVEIRA</p>
            </li>
            <li className="footer-menu-item">
              <a href="https://github.com/patriciadania">GITHUB</a>
            </li>
            <li className="footer-menu-item">
              <a href="https://www.linkedin.com/in/patriciadania/">LINKEDIN</a>
            </li>
            <li className="footer-menu-item">
              <button className="back-to-top-button" onClick={handleScrollToTop}>
                <i className="fas fa-arrow-up"></i> Voltar ao topo
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
