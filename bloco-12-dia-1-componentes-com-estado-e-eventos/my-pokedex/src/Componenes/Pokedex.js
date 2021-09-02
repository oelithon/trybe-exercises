import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const pokemonsList = this.props.pokemons
    return pokemonsList.map((pokemon) => <Pokemon pokemons={pokemon} key={pokemon.id}/>)
  }
}

export default Pokedex;
