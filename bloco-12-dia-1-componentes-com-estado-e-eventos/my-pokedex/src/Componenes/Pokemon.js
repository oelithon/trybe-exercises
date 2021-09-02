import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemons;
    return (
      <div className='pokemon-card'>
        <img src={image} alt={`Imagem do ${name}`}></img>
        <h3>{name}</h3>
        <p>{type}</p>
        <p>{`Average Weigh: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
      </div>
    )
  }
}

export default Pokemon;
