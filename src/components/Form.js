import React, { Component } from "react";
const cocktails_api = "http://localhost:3000/api/v1/cocktails";
class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      description: "",
      instructions: "",
      proportions: [{ ingredient: "", quantity: "" }]
    };
  }

  resetState = () => {
    return {
      name: "",
      description: "",
      instructions: "",
      proportions: [{ ingredient: "", quantity: "" }]
    };
  };

  addProportions = e => {
    e.preventDefault();
    console.log("onClickAddInput", e.target, this.state);
    this.setState(prevState => ({
      proportions: [...prevState.proportions, { ingredient: "", quantity: "" }]
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const data = { ...this.state };
    fetch(cocktails_api, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => console.log("success submit", this.state))
      .then(() => this.setState(this.resetState()));
  };

  handleChange = e => {
    console.log("handleChange", e.target.name);
    if (["ingredient", "quantity"].includes(e.target.name)) {
      let proportions = [...this.state.proportions];
      proportions[e.target.id][e.target.name] = e.target.value;
      this.setState({ proportions }, console.log(this.state));
    } else {
      this.setState({ [e.target.name]: e.target.value });
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

        {this.state.proportions.map((x, idx) => {
          return (
            <div key={idx} className="container" name="proportions">
              <p>
                Ingredient Name
                <br />
                <input
                  type="text"
                  name="ingredient"
                  id={idx}
                  value={this.state.proportions[idx].ingredient}
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
                  value={this.state.proportions[idx].quantity}
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
