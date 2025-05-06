import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/politica-de-privacidade" className="privacy-link">
            Política de Privacidade
          </a>
        </div>
        <div className="footer-credits">
          Produzido por <a href="https://pixalar.vercel.app/" target="_blank" rel="noopener noreferrer" className="credits-link">Pixalar Tech</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 