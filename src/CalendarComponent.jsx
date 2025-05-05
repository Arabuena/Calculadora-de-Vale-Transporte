import React from 'react';
import Calendar from 'react-calendar';
import { isHoliday } from './holidays';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

const CalendarComponent = ({ onChange }) => {
  const tileClassName = ({ date }) => {
    const classes = [];
    if (isHoliday(date)) {
      classes.push('holiday');
    }
    return classes;
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
      onChange={onChange}
      selectRange={false}
      tileClassName={tileClassName}
      formatMonthYear={formatMonthYear}
      locale="pt-BR"
      navigationLabel={({ date, label, locale, view }) => formatMonthYear(locale, date)}
      showNeighboringMonth={false}
      minDetail="month"
      defaultView="month"
    />
  );
};

export default CalendarComponent; 