import React, {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'
import styled from 'styled-components'
import SpacePerson from './components/SpacePerson.js'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //Will return all people objects
  //http https://swapi.co/api/people
  //example of one
//   {
//     "birth_year": "19 BBY",
//     "eye_color": "Blue",
//     "films": [
//         "https://swapi.co/api/films/1/",
//         ...
//     ],
//     "gender": "Male",
//     "hair_color": "Blond",
//     "height": "172",
//     "homeworld": "https://swapi.co/api/planets/1/",
//     "mass": "77",
//     "name": "Luke Skywalker",
//     "skin_color": "Fair",
//     "created": "2014-12-09T13:50:51.644000Z",
//     "edited": "2014-12-10T13:52:43.172000Z",
//     "species": [
//         "https://swapi.co/api/species/1/"
//     ],
//     "starships": [
//         "https://swapi.co/api/starships/12/",
//         ...
//     ],
//     "url": "https://swapi.co/api/people/1/",
//     "vehicles": [
//         "https://swapi.co/api/vehicles/14/"
//         ...
//     ]
// }
  

  const[spacePeople, setSpacePeople] = useState('')
  const peopleCards = []
  useEffect(()=>{
    axios.get('https://swapi.co/api/people/')
      .then(res =>{
        console.log(res.data.results.map((el)=>{return el}))
        setSpacePeople(
          res.data.results.map((el)=>{return el}))
  
      })
    //until done with everthing else I will commets it out and use one I already have
    console.log('Effect Used')
  },[]
  )
  // function personDisplay(el){
  //   console.log('People Displayed')
  //   for(var value in spacePeople)
  //   {
  //   peopleCards.push(spacePeople[value])
  //   }
  //   console.log (peopleCards)
  //   return (<SpacePerson />)
    
  //   }
  //   // peopleCards.map(x => SpacePerson(x))
    // {peopleCards.forEach(el => <div>{el}</div>)}
  
  return(
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="People">
        {spacePeople.map( el => {
          return <SpacePerson name = {el.name} birth_year = {el.birth_year}/>
         })
        }
      </div>
    </div>
  );
}


export default App;
