import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hub from './components/Hub/Hub';
import SeguridadEv4 from './presentations/2025-2/ASY6131/Ev4';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hub />} />
      <Route path="/2025-2/ASY6131/ev4" element={<SeguridadEv4 />} />
    </Routes>
  );
};

export default App;
