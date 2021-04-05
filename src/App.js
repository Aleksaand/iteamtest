import React from 'react';
import './App.css';
import { Main } from './Components/Main/Main';

function App() {
  const [state, setState] = React.useState({
    showField: false,
  });
  return (
    <div className="App">
      <header className="App-header">
        <h3>Привет это </h3>
        <div className="symbol"> &#10006; &#9412; </div>
        <h3> нажми &#9759; &#9759; &#9759; меня </h3>
        <button className="buttton">Начать игру</button>
        <Main></Main>
      </header>
    </div>
  );
}

export default App;
