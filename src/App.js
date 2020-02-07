import React, { Component } from 'react';
// import IdeasContainer from './IdeasContainer'
import './App.css';
import CardContainer from './CardContainer'

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

  render() {
    return (
      <main>
      <h1>Animals!!</h1>
      <CardContainer animals={this.state.animals}/>
      </main>
    )
  }
}

export default App;
