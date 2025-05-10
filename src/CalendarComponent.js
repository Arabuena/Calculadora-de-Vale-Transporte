// CalendarComponent.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { isSameDay, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
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
      newDates = [...selectedDates, date].sort((a, b) => a - b);
    }
    setSelectedDates(newDates);
    onChange(newDates);
  };

  const tileClassName = ({ date }) => {
    const isHoliday = holidays.some((holiday) =>
      isSameDay(parseISO(holiday), date)
    );
    const isSelected = selectedDates.some((selectedDate) =>
      isSameDay(selectedDate, date)
    );
    if (isHoliday) return 'holiday';
    if (isSelected) return 'selected';
    return null;
  };

  return (
    <Calendar
      onClickDay={handleDateClick}
      tileClassName={tileClassName}
      minDetail="year"
      maxDetail="month"
      minDate={new Date(2000, 0, 1)}
      locale="pt-BR"
    />
  );
};

export default CalendarComponent;
