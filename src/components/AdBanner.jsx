import React, { useEffect } from 'react';

const AdBanner = () => {
  useEffect(() => {
    // Remover script existente se houver
    const existingScript = document.querySelector('script[src*="profitableratecpm.com"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Criar e adicionar novo script
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = '//pl26576496.profitableratecpm.com/dc2ddb957cfec84d81047be88a201264/invoke.js';
    document.body.appendChild(script);
  }, []);

  return (
    <div id="container-dc2ddb957cfec84d81047be88a201264"></div>
  );
};

export default AdBanner; 