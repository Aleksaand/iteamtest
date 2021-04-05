import './App.css';
import { Main } from './Components/Main/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Привет это Крестики Нолики </h3>
        <h3> нажми &#9759; &#9759; &#9759; меня </h3>
        <button className="buttton">Начать игру</button>

        <Main></Main>
      </header>
    </div>
  );
}

export default App;
