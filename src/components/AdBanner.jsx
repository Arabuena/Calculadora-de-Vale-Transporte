import React, { useEffect } from 'react';

const AdBanner = () => {
  useEffect(() => {
    console.log('AdBanner montado');
  }, []);

  return (
    <div className="ad-banner-container">
      <a 
        href="https://www.profitableratecpm.com/ibs5zaqf?key=be17333b70911d1e3d3fe6b73762de0f" 
        rel="nofollow" 
        target="_blank"
      >
        <img 
          alt="banner" 
          src="https://landings-cdn.adsterratech.com/referralBanners/gif/120x60_adsterra_reff.gif"
          className="ad-banner-image"
          onLoad={() => console.log('Imagem carregada')}
          onError={(e) => console.log('Erro ao carregar imagem:', e)}
        />
      </a>
    </div>
  );
};

export default AdBanner; 