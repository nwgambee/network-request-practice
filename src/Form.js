import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {name: '', funFact: '', diet: ''}
  }
  updateFields = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  submitAnimal = (event) => {
    event.preventDefault();
    this.props.addAnimal({name: this.state.name, funFact: this.state.funFact, diet: this.state.diet})
  }

  render() {
    return (
      <form>
        <input
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Name'
          onChange={this.updateFields}
          />
        <input
        type='text'
        name='funFact'
        value={this.state.funFact}
        placeholder='Fun Fact'
        onChange={this.updateFields}
          />
        <input
        type='text'
        name='diet'
        value={this.state.diet}
        placeholder='Diet'
        onChange={this.updateFields}
        />
        <button onClick={this.submitAnimal}>Add New Animal</button>
      </form>
    )
  }
}

export default Form;
