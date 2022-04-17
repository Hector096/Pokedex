import { getPokemonList } from './fetchPokemons';

export default function createPokeStore() {
  return {
    pokemons: [],
    async fetchPokemons() {
      this.pokemons = await getPokemonList();
      console.log(this.pokemons);
    },
    addPokemon(input) {
      this.pokemons.push({ name: input });
    },
  };
}
