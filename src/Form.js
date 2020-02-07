import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {name: '', id: '', funFact: '', diet: ''}
  }
  updateFields = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  submitAnimal = (event) => {
    event.preventDefault();
    this.props.addAnimal({name: this.state.name, id: this.state.id, funFact: this.state.funFact, diet: this.state.diet})
    this.setState({name: '', id: '', funFact: '', diet: ''});

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
            type='number'
            name='id'
            value={this.state.id}
            placeholder='ID'
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
