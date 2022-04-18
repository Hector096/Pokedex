import React from 'react';
import { observable, action } from 'mobx';
import { getPokemonList } from './fetchPokemons';

export const createPokeStore = () => {
  const store = observable({
    pokemons: [],
    loading: false,
    fetchPokemons: action(async () => {
      store.pokemons = await getPokemonList()
      /* eslint-disable */
        .then((res) => {
          if (res.length) {
            store.loading = false;
            return res;
          }
        });
    }),
  });
  return store;
};

export default React.createContext();
