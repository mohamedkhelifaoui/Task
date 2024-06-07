import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GestionDesConcessions2 from './Components/GestionDesConcessions2';
import GestionDesConcessions1 from './Components/GestionDesConcessions1';


import './App.css'
import Modall from './Components/Modall';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<GestionDesConcessions1/>} />
          <Route exact path="/CréerConcusion" element={<GestionDesConcessions2/>} />
          <Route exact path="/Modal" element={<Modall/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
