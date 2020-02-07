import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {name: '', funFact: '', diet: ''}
  }
  updateFields = (event) => {
    this.setState({[event.target.name]: event.target.value})
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
        <button onClick={this.submitIdea}>Add New Animal</button>
      </form>
    )
  }
}

export default Form;
