/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/semi */
// importaremos  http
import * as http from "http"

const URL = "https://rickandmortyapi.com/graphql"


// CONSULTAMOS A GRAPHQL LA API

const query = `
    query {
        characters {
            results {
                id
                name
                species
                gender
                image
            }
        }
    }
`

// creamos una interface de caracters

interface Character {
    id : string,
    name : string,
    species: string,
    gender: string,
    image: string
}



// creamos la funcion que nos devolvera los datos
const getCharacters = async () => {
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ query })
    })
    // console.log(response)
    // destructuramos la data


    const { data } = await response.json()
    console.log(data.characters.results)
    // const respuesta = data.characters.results
    // filtramos la data por tipo de specie
    const respuesta = data.characters.results.filter((character:Character) => character.species === "Human")

    return respuesta

}


// exportamos la funcion
export { getCharacters }
