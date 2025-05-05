import React, { useRef } from 'react';
import { usePDF } from 'react-to-pdf';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import * as XLSX from 'xlsx';

const FareCalculator = ({ selectedDates, farePerDay }) => {
  const { toPDF, targetRef } = usePDF({ filename: 'resumo_passagens.pdf' });

  const totalDias = selectedDates.length;
  const valorPorDia = farePerDay.toFixed(2);
  const total = (totalDias * farePerDay).toFixed(2);

  // Ordena as datas e pega a primeira e última
  const sortedDates = [...selectedDates].sort((a, b) => a - b);
  const dataInicial = sortedDates[0];
  const dataFinal = sortedDates[sortedDates.length - 1];

  // Formata o período
  const formatarData = (data) => {
    if (!data) return '';
    return format(data, "d 'de' MMMM", { locale: ptBR });
  };

  const periodo = selectedDates.length > 0
    ? `de ${formatarData(dataInicial)} até ${formatarData(dataFinal)}`
    : 'Nenhum dia selecionado';

  const message = `Resumo das passagens de ônibus:
Período: ${periodo}
- Dias trabalhados: ${totalDias}
- Valor por dia: R$ ${valorPorDia}
- Total: R$ ${total}`;

  const handleShare = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const downloadExcel = () => {
    // Prepara os dados para o Excel
    const dados = [
      ['Resumo das Passagens de Ônibus'],
      [''],
      ['Período', periodo],
      ['Dias trabalhados', totalDias],
      ['Valor por dia', `R$ ${valorPorDia}`],
      ['Total', `R$ ${total}`],
      [''],
      ['Data', 'Dia da Semana'],
      ...sortedDates.map(date => [
        format(date, 'dd/MM/yyyy', { locale: ptBR }),
        format(date, 'EEEE', { locale: ptBR })
      ])
    ];

    // Cria uma nova planilha
    const ws = XLSX.utils.aoa_to_sheet(dados);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Resumo');

    // Faz o download
    XLSX.writeFile(wb, 'resumo_passagens.xlsx');
  };

  return (
    <div className="summary-container">
      <div ref={targetRef}>
        <h2>Resumo</h2>
        <p>Período: {periodo}</p>
        <p>Dias selecionados: {totalDias}</p>
        <p>Valor por dia: R$ {valorPorDia}</p>
        <p><strong>Total: R$ {total}</strong></p>
      </div>
      <div className="button-container">
        <button className="btn-pdf" onClick={() => toPDF()}>
          Baixar PDF
        </button>
        <button className="btn-excel" onClick={downloadExcel}>
          Baixar Excel
        </button>
        <button className="btn-whatsapp" onClick={handleShare}>
          Compartilhar
        </button>
      </div>
    </div>
  );
};

export default FareCalculator; 