import React from 'react';
import './css/App.css';
import pokemons from './data';
import Pokedex from './components/Pokedex';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> Pokedex </h1>
        <Route exact path='/' render={(props) => <Pokedex {...props} pokemons={pokemons} />}  />
        <Route exact path='/:id' render={(props) => <Pokedex {...props} pokemons={pokemons} />}  />
      </div>
    </BrowserRouter>
  );
}

export default App;