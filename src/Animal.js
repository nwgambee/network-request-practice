import React from 'react';
import './Animal.css'

const Animal = ({ name, funFact, diet, id, removeAnimal}) => {
  return (
    <div className='animalCard'>
      <h2>{name}</h2>
      <h4>{funFact}</h4>
      <p>{diet}</p>
      <button onClick={() => removeAnimal(id)}>Delete Animal</button>
    </div>
  )
}

export default Animal
