import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CalendarComponent from './components/CalendarComponent';
import FareCalculator from './components/FareCalculator';
import Footer from './components/Footer';
import Banner from './components/Banner';
import InstallPrompt from './components/InstallPrompt';
import Calculator from './pages/Calculator';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AdBanner from './components/AdBanner';

const App = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [farePerDay, setFarePerDay] = useState(10.0);

  const handleFareChange = (event) => {
    const value = parseFloat(event.target.value) || 0;
    setFarePerDay(value);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="app">
            <AdBanner />
            <Banner />
            <InstallPrompt />
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
            <AdBanner />
            <Footer />
          </div>
        } />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App; 