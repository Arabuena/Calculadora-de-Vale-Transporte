import React, { useState } from 'react';
import CalendarComponent from './CalendarComponent';
import FareCalculator from './FareCalculator';

const App = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const farePerDay = 10.0;

  return (
    <div>
      <h1>Calculadora de Passagens de Ônibus</h1>
      <CalendarComponent onChange={setSelectedDates} />
      <FareCalculator selectedDates={selectedDates} farePerDay={farePerDay} />
    </div>
  );
};

export default App; 