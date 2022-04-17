export const getPokemonDetails = async (url) => {
  const resp = await fetch(url);
  const data = resp.json();
  return data;
};

export const getPokemonList = async (limit = 100) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const data = await resp.json();
  return data.results.map((e) => getPokemonDetails(e.url));
};
