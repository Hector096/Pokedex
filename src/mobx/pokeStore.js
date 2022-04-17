export default function createPokeStore() {
  return {
    pokemons: [],
    addPokemon(pokemon) {
      this.pokemons.push(pokemon);
    },
  };
}
