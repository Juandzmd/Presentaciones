import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hub from './components/Hub/Hub';
import SeguridadEv4 from './presentations/2025-2/ASY6131/Ev4';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import ConstructionPage from './components/Shared/Construction';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hub />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/docs" element={<ConstructionPage title="Documentos" />} />
      <Route path="/settings" element={<ConstructionPage title="Ajustes" />} />

      {/* Presentations */}
      <Route path="/2025-2/ASY6131/ev4" element={<SeguridadEv4 />} />
    </Routes>
  );
}

export default App;
