import data from './data';
import Pokedex from './Componenes/Pokedex';
import './App.css';

function App() {
  return (
    <section className="App">
      <Pokedex pokemons={data}/>
    </section>
  );
}

export default App;
