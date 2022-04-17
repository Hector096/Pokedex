import React from 'react';
import { observable, action } from 'mobx';
import { getPokemonList } from './fetchPokemons';

export const createPokeStore = () => {
  const store = observable({
    pokemons: [],
    fetchPokemons: action(async () => {
      this.pokemons = await getPokemonList();
    }),
  });
  return store;
};

export default React.createContext();
