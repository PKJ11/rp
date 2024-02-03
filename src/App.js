import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import FirstPages from './Pages/FirstPages';
import SecondPages from './Pages/SecondPages';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LovePage1" element={<FirstPages />} />
          <Route path="/LovePage2" element={<SecondPages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
