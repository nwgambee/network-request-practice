import React from 'react';
import './Animal.css'

const Animal = ({ name, funFact, diet, id, removeAnimal}) => {
  return (
    <div className='animalCard'>
      <h2>{name}</h2>
      <h4>Fun Fact: {funFact}</h4>
      <p>Diet: {diet}</p>
      <button onClick={() => removeAnimal(id)}>Delete Animal</button>
    </div>
  )
}

export default Animal
