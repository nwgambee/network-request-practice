import React, { Component } from 'react';
// import IdeasContainer from './IdeasContainer'
import './App.css';
import CardContainer from './CardContainer'
import Form from './Form'

class App extends Component {
  constructor() {
    super();
    this.state = {animals: []}
  }
  componentDidMount() {
    fetch('http://localhost:3001/api/v1/animals')
      .then(res => res.json())
      .then(animalData => this.setState({ animals: animalData }))
      .catch(error => console.log(error))
  }

  addAnimal = (animal) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({ id: parseInt(animal.id), name: animal.name, diet: animal.diet, fun_fact: animal.funFact }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('http://localhost:3001/api/v1/animals', options)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  removeAnimal = (id) => {
    fetch('http://localhost:3001/api/v1/animals/' + id, {
      method: 'DELETE',
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <main>
      <h1>Animals!!</h1>
      <Form addAnimal={this.addAnimal}/>
      <CardContainer removeAnimal={this.removeAnimal} animals={this.state.animals}/>
      </main>
    )
  }
}

export default App;
