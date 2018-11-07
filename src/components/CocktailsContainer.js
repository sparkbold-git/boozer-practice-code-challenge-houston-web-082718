import React, { Component } from "react";
import CocktailsList from "./CocktailsList";
import Form from "./Form";
import CocktailDisplay from "./CocktailDisplay";

const cocktails_api = "http://localhost:3000/api/v1/cocktails";
class CocktailsContainer extends Component {
  state = {
    cocktails: [],
    clickedCocktail: {
      id: "",
      name: "",
      description: "",
      instructions: "",
      source: ""
    }
  };

  componentDidMount = () => {
    fetch(cocktails_api)
      .then(resp => resp.json())
      .then(
        data => this.setState({ cocktails: data }),
        () => console.log(this.state.cocktails)
      );
  };

  onClickCocktail = clickedCocktailProps => {
    this.setState({ clickedCocktail: clickedCocktailProps });
  };

  onSubmitForm = () => {};

  render() {
    return (
      <div>
        <div className="container">
          <div id="cocktail-list">
            {this.state.cocktails.map(cocktail => (
              <CocktailsList
                key={cocktail.id}
                cocktail={cocktail}
                onClick={this.onClickCocktail}
              />
            ))}
          </div>
          <div className="display">
            {" "}
            <CocktailDisplay {...this.state.clickedCocktail} />
          </div>
          <div className="form">
            {" "}
            <Form onSubmitForm={this.onSubmitForm} />
          </div>
        </div>
      </div>
    );
  }
}

export default CocktailsContainer;
