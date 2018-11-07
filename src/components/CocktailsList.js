import React, { Component } from "react";

class CocktailsList extends Component {
  render() {
    const { name } = this.props.cocktail;

    return (
      <li onClick={() => this.props.onClick(this.props.cocktail)}>{name}</li>
    );
  }
}

export default CocktailsList;
