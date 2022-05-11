import './App.css';
import React, {useState} from 'react';

function App() {

    const [pokemon, setPokemon] = useState([]);

    const getPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then(someResponse => {
                return someResponse.json();
            }).then(secResponse => {
                setPokemon(secResponse.results);
            }).catch(err=>{
                console.log(err);
            });
    }

    return (
        <div className="App">
            <button onClick={getPokemon}>Get Pokémon</button>
            <ul>
            {pokemon.map((pokemonster, i) => {
                return (<li key={i}>{pokemonster.name}</li>)
            })}
            </ul>
            {JSON.stringify(pokemon.results)}
        </div>
  );
}

export default App;
