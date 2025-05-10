// CalendarComponent.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { isSameDay, parseISO } from 'date-fns';
import { holidays } from './holidays';
import './styles.css';

const CalendarComponent = ({ onChange }) => {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateClick = (date) => {
    const alreadySelected = selectedDates.some((selectedDate) =>
      isSameDay(selectedDate, date)
    );
    
    let newDates;
    if (alreadySelected) {
      newDates = selectedDates.filter(
        (selectedDate) => !isSameDay(selectedDate, date)
      );
    } else {
      newDates = [...selectedDates, date];
    }
    setSelectedDates(newDates);
    onChange(newDates);
  };

  const tileClassName = ({ date }) => {
    const classes = [];
    
    const isHoliday = holidays.some((holiday) =>
      isSameDay(parseISO(holiday), date)
    );
    
    const isSelected = selectedDates.some((selectedDate) =>
      isSameDay(selectedDate, date)
    );
    
    if (isHoliday) classes.push('holiday');
    if (isSelected) classes.push('selected');
    
    return classes.join(' ');
  };

  // Função que sempre retorna false para evitar desabilitar qualquer data
  const tileDisabled = ({ date, view }) => false;

  return (
    <Calendar
      onClickDay={handleDateClick}
      tileClassName={tileClassName}
      tileDisabled={tileDisabled}
      locale="pt-BR"
      value={null}
      showNeighboringMonth={true}
      selectRange={false}
      view="month"
      className="custom-calendar"
      minDate={null}
      maxDate={null}
      minDetail="decade"
      enabled={true}
    />
  );
};

export default CalendarComponent;
