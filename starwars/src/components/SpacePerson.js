import React, {useState} from 'react'
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    justify-content:center;
    width: 25%;
    margin: 1 rem;
    color: black;

`

const SpacePerson = (props) => {

    const[birth_year, setbirth_year] = useState('')
    setbirth_year(props.birth_year)

    const[name, setName]=useState('')
    setName(props.name)
    
    console.log(props)
    
    return(
        <Card>
            <h2>{name}</h2>
            <p>{`Born on ${birth_year}`}</p>
        </Card>
    )
}
export default SpacePerson 
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