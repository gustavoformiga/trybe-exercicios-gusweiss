import React from 'react';

class Pokemon extends React.Component {
  render() {
    return(
      <h1>Hello, {this.props.name} </h1>
    )
  }
}

export default Pokemon;