import data from './data';
import Pokedex from './Componenes/Pokedex';
import './App.css';

function App() {
  return (
    <main>
      <h1>Pokedex</h1>
      <section className="App">
        <Pokedex pokemons={data} />
      </section>
    </main>
  );
}

export default App;
