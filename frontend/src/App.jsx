
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Stumenu from './pages/Stumenu';
import Welcome from './pages/Welcome';
import Reserva from './pages/Reserva';
import Historial from './pages/Historial';
import Adminmenu from './pages/Adminmenu';
import Agregar from './pages/Agregar';
import Reporte from './pages/Reporte';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/stumenu" element={<Stumenu />} />
          <Route path="/reserva" element={<Reserva />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/adminmenu" element={<Adminmenu />} />
          <Route path="/agregar" element={<Agregar />} />
          <Route path="/reporte" element={<Reporte />} />
        </Routes>
      </Router>
  );
};

export default App;
