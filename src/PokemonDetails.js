import React from 'react';
import { Link } from 'react-router-dom';

// Important Note: Navigation to be added at a later time. Proved a bigger hurdle than I was ready for at the time. 

export default function PokemonDetails({ match, pokemonList }) {
  const pokemonId = match.params.id;
  const pokemon = pokemonList.find(pokemon => pokemon.id === parseInt(pokemonId));

  if (!pokemon) {
    return <div>Pokemon not found.</div>;
  }

  return (
    <div className="pokemon-details">
      <h2>{pokemon.name} Details</h2>
      <img src={pokemon.img} alt={pokemon.name} />
      <p>Num: {pokemon.num}</p>
      <p>Type: {pokemon.type.join(', ')}</p>
      <p>Weaknesses: {pokemon.weaknesses.join(', ')}</p>
      <Link to="/">Back to Index</Link>
      {pokemon.next_evolution && (
        <div>
          <h3>Next Evolution</h3>
          {pokemon.next_evolution.map(evolution => (
            <div key={evolution.num}>
              <Link to={`/details/${evolution.num}`}>{evolution.name}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


