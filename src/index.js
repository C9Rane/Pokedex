import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import PokemonDetails from './PokemonDetails';
import reportWebVitals from './reportWebVitals';

const pokemonList = [];

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App pokemonList={pokemonList} />} />
        <Route path="/details/:id" element={<PokemonDetails pokemonList={pokemonList} />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

