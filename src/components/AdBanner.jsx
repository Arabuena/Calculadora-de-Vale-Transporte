import React, { useEffect } from 'react';

const AdBanner = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = '//pl26576496.profitableratecpm.com/dc2ddb957cfec84d81047be88a201264/invoke.js';
    
    // Limpar scripts antigos
    const oldScript = document.querySelector('script[src*="profitableratecpm.com"]');
    if (oldScript) {
      oldScript.remove();
    }
    
    // Adicionar novo script
    document.head.appendChild(script);

    return () => {
      // Cleanup quando o componente for desmontado
      script.remove();
    };
  }, []);

  return (
    <>
      <script 
        async="async" 
        data-cfasync="false" 
        src="//pl26576496.profitableratecpm.com/dc2ddb957cfec84d81047be88a201264/invoke.js"
      />
      <div id="container-dc2ddb957cfec84d81047be88a201264"></div>
    </>
  );
};

export default AdBanner; 