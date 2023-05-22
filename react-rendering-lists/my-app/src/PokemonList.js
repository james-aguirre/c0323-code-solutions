import { pokedex } from './App';

export default function PokemonList() {
  const pokemonList = pokedex.map((pokemon) => (
    <li key={pokemon.id}>{pokemon.name}</li>
  ));
  return <ul>{pokemonList}</ul>;
}
