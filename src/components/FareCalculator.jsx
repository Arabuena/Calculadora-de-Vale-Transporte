import React from 'react';
import { format, eachDayOfInterval } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';

const FareCalculator = ({ selectedDates, farePerDay }) => {
  const calculateDays = () => {
    return selectedDates?.length || 0;
  };

  const calculateTotal = () => {
    return (calculateDays() * farePerDay).toFixed(2);
  };

  const formatPeriod = () => {
    if (!selectedDates || selectedDates.length === 0) return "Nenhum dia selecionado";
    
    if (selectedDates.length === 1) {
      return format(selectedDates[0], 'dd/MM/yyyy', { locale: ptBR });
    }

    const dates = selectedDates.sort((a, b) => a - b);
    const firstDate = format(dates[0], 'dd/MM/yyyy', { locale: ptBR });
    const lastDate = format(dates[dates.length - 1], 'dd/MM/yyyy', { locale: ptBR });
    return `${firstDate} até ${lastDate}`;
  };

  const handlePDFDownload = () => {
    const doc = new jsPDF();
    
    doc.text('Resumo do Vale Transporte', 20, 20);
    doc.text(`Período: ${formatPeriod()}`, 20, 40);
    doc.text(`Dias selecionados: ${calculateDays()}`, 20, 50);
    doc.text(`Valor por dia: R$ ${farePerDay.toFixed(2)}`, 20, 60);
    doc.text(`Total: R$ ${calculateTotal()}`, 20, 70);
    
    doc.save('vale-transporte.pdf');
  };

  const handleExcelDownload = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet([{
      'Período': formatPeriod(),
      'Dias selecionados': calculateDays(),
      'Valor por dia': farePerDay.toFixed(2),
      'Total': calculateTotal()
    }]);
    
    XLSX.utils.book_append_sheet(wb, ws, 'Vale Transporte');
    XLSX.writeFile(wb, 'vale-transporte.xlsx');
  };

  const handleShare = async () => {
    const text = `Vale Transporte\n
Período: ${formatPeriod()}\n
Dias selecionados: ${calculateDays()}\n
Valor por dia: R$ ${farePerDay.toFixed(2)}\n
Total: R$ ${calculateTotal()}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Vale Transporte',
          text: text
        });
      } catch (err) {
        console.log('Erro ao compartilhar:', err);
      }
    } else {
      navigator.clipboard.writeText(text);
      alert('Texto copiado para a área de transferência!');
    }
  };

  return (
    <div className="fare-calculator">
      <h2>Resumo</h2>
      <div className="summary">
        <p>Período: {formatPeriod()}</p>
        <p>Dias selecionados: {calculateDays()}</p>
        <p>Valor por dia: R$ {farePerDay.toFixed(2)}</p>
        <p className="total">Total: R$ {calculateTotal()}</p>
      </div>
      <div className="action-buttons">
        <button className="btn-pdf" onClick={handlePDFDownload}>Baixar PDF</button>
        <button className="btn-excel" onClick={handleExcelDownload}>Baixar Excel</button>
        <button className="btn-share" onClick={handleShare}>Compartilhar</button>
      </div>
    </div>
  );
};

export default FareCalculator; 