import { createPokeStore } from '../mobx/pokeStore';




describe('pokeStore Test', () => {
  const store = createPokeStore();
  it('should render hook and expose an API', () => {
    expect(store.pokemons).toEqual([]);
    expect(typeof store.fetchPokemons).toBe('function');
  });
});
