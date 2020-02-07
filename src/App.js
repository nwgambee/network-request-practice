import React, { Component } from 'react';
// import IdeasContainer from './IdeasContainer'
import './App.css';
// import Form from './Form';

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
      <h1>hello there</h1>
    )
  }
}

export default App;
