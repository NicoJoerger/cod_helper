import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TerminusCalculator from './components/TerminusCalculator';
import CitadelleDesMorts from './components/CitadelleDesMorts';
import ShatteredVeil from './components/ShatteredVeil';
import './App.css';

function App() {
  return (
    <div className="bg-dark text-white d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">CoD Zombies Helper</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Terminus</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/citadelle-des-morts">Citadelle des Morts</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shattered-veil">Shattered Veil</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container flex-grow-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<TerminusCalculator />} />
          <Route path="/citadelle-des-morts" element={<CitadelleDesMorts />} />
          <Route path="/shattered-veil" element={<ShatteredVeil />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;