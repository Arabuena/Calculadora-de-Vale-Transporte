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
    />
  );
};

export default CalendarComponent; 