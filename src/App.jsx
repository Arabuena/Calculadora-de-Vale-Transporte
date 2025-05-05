import React, { useState } from 'react';
import CalendarComponent from './CalendarComponent.jsx';
import FareCalculator from './FareCalculator.jsx';
import Banner from './Banner.jsx';

const App = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [farePerDay, setFarePerDay] = useState(10.0);

  const handleFareChange = (event) => {
    const value = parseFloat(event.target.value) || 0;
    setFarePerDay(value);
  };

  return (
    <div className="app-container">
      <Banner />
      <h1>Calculadora de Vale Transporte</h1>
      <div className="fare-input">
        <label>
          Valor da passagem por dia: R$
          <input
            type="number"
            step="0.01"
            min="0"
            value={farePerDay}
            onChange={handleFareChange}
          />
        </label>
      </div>
      <CalendarComponent onChange={setSelectedDates} />
      <FareCalculator selectedDates={selectedDates} farePerDay={farePerDay} />
    </div>
  );
};

export default App; 