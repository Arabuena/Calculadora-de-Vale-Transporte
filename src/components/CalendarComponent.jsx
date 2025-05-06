import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { format, isWeekend } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import 'react-calendar/dist/Calendar.css';

const HOLIDAYS = [
  // 2024
  '2024-01-01', // Ano Novo
  '2024-02-12', // Carnaval
  '2024-02-13', // Carnaval
  '2024-03-29', // Sexta-feira Santa
  '2024-04-21', // Tiradentes
  '2024-05-01', // Dia do Trabalho
  '2024-05-30', // Corpus Christi
  '2024-09-07', // Independência
  '2024-10-12', // Nossa Senhora
  '2024-11-02', // Finados
  '2024-11-15', // Proclamação da República
  '2024-12-25', // Natal
  // 2025
  '2025-01-01', // Ano Novo
  '2025-03-03', // Carnaval
  '2025-03-04', // Carnaval
  '2025-04-18', // Sexta-feira Santa
  '2025-04-21', // Tiradentes
  '2025-05-01', // Dia do Trabalho
  '2025-06-19', // Corpus Christi
  '2025-09-07', // Independência
  '2025-10-12', // Nossa Senhora
  '2025-11-02', // Finados
  '2025-11-15', // Proclamação da República
  '2025-12-25', // Natal
];

const CalendarComponent = ({ onChange }) => {
  const [selectedDates, setSelectedDates] = useState([]);

  const isHoliday = (date) => {
    const dateString = format(date, 'yyyy-MM-dd');
    return HOLIDAYS.includes(dateString);
  };

  const isDateSelected = (date) => {
    return selectedDates.some(selectedDate => 
      format(selectedDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );
  };

  const tileClassName = ({ date, view }) => {
    if (view !== 'month') return '';

    const classes = [];
    if (isWeekend(date)) classes.push('weekend');
    if (isHoliday(date)) classes.push('holiday');
    if (isDateSelected(date)) classes.push('selected');
    return classes.join(' ');
  };

  const handleDateChange = (date) => {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);

    let newDates;
    if (selectedDates.some(d => d.getTime() === newDate.getTime())) {
      // Se a data já está selecionada, remove ela
      newDates = selectedDates.filter(d => d.getTime() !== newDate.getTime());
    } else {
      // Se a data não está selecionada, adiciona ela
      newDates = [...selectedDates, newDate].sort((a, b) => a - b);
    }

    setSelectedDates(newDates);
    onChange(newDates);
  };

  const tileDisabled = ({ date, view }) => {
    // Opcional: Desabilitar datas passadas
    return view === 'month' && date < new Date();
  };

  return (
    <div className="calendar-container">
      <Calendar
        onChange={handleDateChange}
        value={null}
        className="calendar"
        locale="pt-BR"
        formatDay={(locale, date) => format(date, 'd')}
        formatShortWeekday={(locale, date) => {
          const days = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];
          return days[date.getDay()];
        }}
        formatMonth={(locale, date) => {
          return format(date, 'MMMM yyyy', { locale: ptBR }).toUpperCase();
        }}
        tileClassName={tileClassName}
        tileDisabled={tileDisabled}
        minDetail="month"
        defaultView="month"
        showNeighboringMonth={false}
        selectRange={false}
      />
    </div>
  );
};

export default CalendarComponent; 