import React from "react";

const CocktailDisplay = props => {
  console.log(props);
  return (
    <div id="cocktail-display">
      <h1>{props.name}</h1>
      <h3>{props.description}</h3>
      <p>{props.instructions}</p>
    </div>
  );
};

export default CocktailDisplay;
