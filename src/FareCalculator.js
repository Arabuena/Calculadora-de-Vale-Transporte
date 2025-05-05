// FareCalculator.js
import React, { useRef } from 'react';
import { usePDF } from 'react-to-pdf';

const FareCalculator = ({ selectedDates, farePerDay }) => {
  const { toPDF, targetRef } = usePDF({ filename: 'resumo_passagens.pdf' });

  const totalDias = selectedDates.length;
  const valorPorDia = farePerDay.toFixed(2);
  const total = (totalDias * farePerDay).toFixed(2);

  const message = `Resumo das passagens de ônibus:
- Dias trabalhados: ${totalDias}
- Valor por dia: R$ ${valorPorDia}
- Total: R$ ${total}`;

  const handleShare = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <div ref={targetRef}>
        <h2>Resumo</h2>
        <p>Dias selecionados: {totalDias}</p>
        <p>Valor por dia: R$ {valorPorDia}</p>
        <p><strong>Total: R$ {total}</strong></p>
      </div>
      <button onClick={() => toPDF()}>Baixar PDF</button>
      <button onClick={handleShare}>Compartilhar via WhatsApp</button>
    </div>
  );
};

export default FareCalculator;
