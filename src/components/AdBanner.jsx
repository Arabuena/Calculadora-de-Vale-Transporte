import React from 'react';

const AdBanner = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5562982162844', '_blank');
  };

  return (
    <>
      <div className="horizontal-banner-container">
        <a 
          href="https://www.profitableratecpm.com/ibs5zaqf?key=be17333b70911d1e3d3fe6b73762de0f"
          rel="nofollow" 
          target="_blank"
        >
          <img 
            alt="banner" 
            src="https://landings-cdn.adsterratech.com/referralBanners/png/728%20x%2090%20px.png"
            className="horizontal-banner-image"
          />
        </a>
      </div>
      <div className="advertise-banner">
        <h3>Anuncie Aqui</h3>
        <button onClick={handleWhatsAppClick} className="whatsapp-button">
          <span>Fale Conosco</span>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
        </button>
      </div>
    </>
  );
};

export default AdBanner; 