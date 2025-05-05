import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { isHoliday } from './holidays';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = ({ onChange }) => {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateClick = (date) => {
    try {
      // Verifica se a data já está selecionada
      const isSelected = selectedDates.some(
        selectedDate => selectedDate.toDateString() === date.toDateString()
      );

      // Atualiza as datas selecionadas
      const newDates = isSelected
        ? selectedDates.filter(d => d.toDateString() !== date.toDateString())
        : [...selectedDates, date];

      setSelectedDates(newDates);
      onChange(newDates); // Notifica o componente pai
    } catch (error) {
      console.error('Erro ao selecionar data:', error);
    }
  };

  const tileClassName = ({ date }) => {
    const classes = [];
    
    // Verifica se é feriado
    if (isHoliday(date)) {
      classes.push('holiday');
    }

    // Verifica se está selecionado
    if (selectedDates.some(selectedDate => 
      selectedDate.toDateString() === date.toDateString()
    )) {
      classes.push('selected');
    }

    return classes.join(' ');
  };

  const formatMonthYear = (_, date) => {
    try {
      return format(new Date(date), 'MMMM yyyy', { locale: ptBR })
        .replace(/^\w/, (c) => c.toUpperCase());
    } catch (error) {
      console.error('Erro ao formatar data:', error);
      return '';
    }
  };

  return (
    <Calendar
      onClickDay={handleDateClick}
      value={selectedDates}
      tileClassName={tileClassName}
      formatMonthYear={formatMonthYear}
      locale="pt-BR"
      navigationLabel={({ date }) => formatMonthYear(null, date)}
      showNeighboringMonth={false}
      minDetail="month"
      defaultView="month"
    />
  );
};

export default CalendarComponent; 