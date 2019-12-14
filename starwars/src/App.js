import React,{useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import SpacePerson from './components/SpacePerson'
import styled from 'styled-components'
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const[spacePeople, setSpacePeople] = useState([])
  const cardStack =styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content:center;
    width:100%;
    background: black;
  `
  useEffect(()=>{
    axios.get("https://lambda-swapi.herokuapp.com/api/people/")
      .then(res => {
        console.log(res.data.results)
        setSpacePeople(res.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  },[])

    
  var peopleHolder = [];
  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <cardStack>
        {spacePeople.map((i)=>{return(
        <SpacePerson name={i.name} birth_year={i.birth_year}/> )})
        }
      </cardStack>
      
      
    </div>
  );
}

export default App;
