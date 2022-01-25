import React from 'react';
import './App.css';
import pokemons from './data.js'
import Pokedex from './Pokedex.js'

class App extends React.Component {
  render() {
    return (
      <div id='motherDiv'>
        <h1> Pokedex </h1>
        <section className='pokemonSection'>
          {
            pokemons.map(pokemon => {
              return <Pokedex key={pokemon.id} pokemonInfo={pokemon} />
            })
          }
        </section>
      </div>
    );
  }
}

export default App;
