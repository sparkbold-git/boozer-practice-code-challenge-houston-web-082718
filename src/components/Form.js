import React, { Component } from "react";

class Form extends Component {
  state = {
    cocktail: {
      name: "",
      description: "",
      instructions: "",
      proportions: [
        {
          ingredient: "",
          quantity: ""
        }
      ]
    }
  };

  addProportions = e => {
    console.log("onClickAddInput", e.target, this.state);
    this.setState(prevState => ({
      cocktail: {
        ...prevState.cocktail,
        proportions: [
          {
            ingredient: "",
            quantity: ""
          }
        ]
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("onSubmit-event", e.target);
  };

  handleChange = e => {
    // console.log("handleChange", e.target.name);
    if (["ingredient", "quantity"].includes(e.target.name)) {
      let state = { ...this.state };
      let updatedProportions = [...state.cocktail.proportions];

      this.setState({
        cocktail: {
          ...state.cocktail,
          proportions: [
            ...state.cocktail.proportions,
            { [e.target.name]: e.target.value }
          ]
        }
      });
      debugger;
    } else {
      this.setState({
        cocktail: { ...this.state.cocktail, [e.target.name]: e.target.value }
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Create a Cocktail</h3>
        <p>Name</p>
        <input type="text" name="name" onChange={this.handleChange} />
        <p>Description</p>
        <input type="text" name="description" onChange={this.handleChange} />
        <p>Instructions</p>
        <input type="text" name="instructions" onChange={this.handleChange} />
        <h3>Proportions</h3>

        {this.state.cocktail.proportions.map((val, idx) => {
          return (
            <div key={idx} className="container" name="proportions">
              <p>
                Ingredient Name
                <br />
                <input
                  type="text"
                  name="ingredient"
                  id={idx}
                  onChange={this.handleChange}
                />
              </p>

              <p>
                Quantity
                <br />
                <input
                  type="text"
                  name="quantity"
                  id={idx}
                  onChange={this.handleChange}
                />
              </p>
            </div>
          );
        })}

        <p>
          <button onClick={this.addProportions}> + </button>
        </p>

        <input type="submit" />
      </form>
    );
  }
}

export default Form;
