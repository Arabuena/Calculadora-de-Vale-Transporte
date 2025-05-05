import React, { useState, useEffect } from 'react';

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      // Previne o prompt automático do Chrome
      e.preventDefault();
      // Guarda o evento para usar depois
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    // Mostra o prompt de instalação
    deferredPrompt.prompt();
    
    // Espera a escolha do usuário
    const { outcome } = await deferredPrompt.userChoice;
    
    // Limpa o prompt salvo
    setDeferredPrompt(null);
    setShowPrompt(false);

    // Opcional: track analytics
    if (outcome === 'accepted') {
      console.log('Usuário aceitou a instalação');
    }
  };

  if (!showPrompt) return null;

  return (
    <div className="install-prompt">
      <p>Instale nosso app para melhor experiência!</p>
      <div className="install-buttons">
        <button onClick={handleInstall} className="btn-install">
          Instalar
        </button>
        <button onClick={() => setShowPrompt(false)} className="btn-later">
          Depois
        </button>
      </div>
    </div>
  );
};

export default InstallPrompt; 