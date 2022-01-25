import React from 'react';
import PropTypes from 'prop-types'

class Pokedex extends React.Component {
  render() {
    // console.log(this.props);
    const { pokemonInfo } = this.props
    const { name, type, image, averageWeight } = pokemonInfo
    const averageArray = Object.values(averageWeight).join(' ')
    return(
      <section className='pokemonSec'>
        <h1> { name } </h1>
        <h4> { type } </h4>
        <h4> { `Average weight: ${averageArray}` } </h4>
        <img src={ image } />
      </section>
    )
  }
}

Pokedex.propTypes = {
  pokemonInfo: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
  })
}

export default Pokedex;