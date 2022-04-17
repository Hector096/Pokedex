import { Observer } from 'mobx-react-lite';
import './App.css';
import { useState } from 'react';
import { usePokeStore } from './mobx/pokeContext';

function App() {
  const pokeStore = usePokeStore();
  const [value, setValue] = useState('');
  // useEffect(() => {
  //   pokeStore.fetchPokemons();
  // }, []);

  return (
    <Observer>
      <div className="App">
        <div>
          <input type="text" value={value} onChange={(e) => { setValue(e.target.value); }} />
          <button type="button" onClick={() => pokeStore.addPokemon(value)}>Input</button>
        </div>
        {pokeStore.pokemons.map((e) => (<div key={e.name}>{e.name}</div>))}
      </div>
    </Observer>
  );
}

export default App;
