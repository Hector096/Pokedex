import React from 'react';
import PropTypes from 'prop-types';
import createPokeStore from './pokeStore';

const PokeContext = React.createContext(null);

export const PokeProvider = ({ children }) => {
  const pokeStore = createPokeStore();
  return (
    <PokeContext.Provider value={pokeStore}>
      {children}
    </PokeContext.Provider>
  );
};

PokeProvider.propTypes = {
  children: PropTypes.shape(PropTypes.element.isRequired).isRequired,
};

export const usePokeStore = () => React.useContext(PokeContext);
