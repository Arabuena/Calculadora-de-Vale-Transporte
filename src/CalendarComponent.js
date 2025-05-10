// CalendarComponent.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { isSameDay, parseISO } from 'date-fns';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import { holidays } from './holidays';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';

// Registra o locale português
registerLocale('pt-BR', ptBR);
setDefaultLocale('pt-BR');

const CalendarComponent = ({ onChange }) => {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateClick = (date) => {
    if (!date) return;
    
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

  const isHoliday = (date) => {
    return holidays.some((holiday) => isSameDay(parseISO(holiday), date));
  };

  return (
    <DatePicker
      inline
      selected={null}
      onChange={handleDateClick}
      highlightDates={selectedDates}
      locale="pt-BR"
      dateFormat="P"
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      calendarClassName="custom-calendar"
      minDate={null}
      maxDate={null}
      openToDate={new Date()}
      isClearable={true}
      shouldCloseOnSelect={false}
    />
  );
};

export default CalendarComponent;
