import React from 'react';

const Banner = () => {
  return (
    <div className="banner">
      <h2>Calculadora de Vale Transporte</h2>
      <p>Selecione os dias úteis no calendário e calcule o valor do seu vale transporte</p>
      <p>Feriados e finais de semana são destacados automaticamente</p>
      <div className="banner-features">
        <ul>
          <li>✓ Cálculo automático</li>
          <li>✓ Exportação para PDF e Excel</li>
          <li>✓ Compartilhamento fácil</li>
        </ul>
      </div>
    </div>
  );
};

export default Banner; 