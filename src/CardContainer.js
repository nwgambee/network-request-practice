import React from 'react';
import Animal from './Animal'
import './CardContainer.css'
// import Card from './Card';

const CardContainer = (props) => {
  let animals = props.animals.map(animal => {
    return <Animal
              name={animal.name}
              funFact={animal.fun_fact}
              diet={animal.diet}
              />
  })
  return (
    <section>
      {animals}
    </section>
  )
}

export default CardContainer;
