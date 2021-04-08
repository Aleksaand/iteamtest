import React from 'react';
import './App.css';
import { Main } from './Components/Main/Main';

function App() {
  const [state, setState] = React.useState({
    showField: false,
    titleMessage: 'Начать игру',
  });

  const handlerToggle = () => {
    setState({
      ...state,
      showField: !state.showField,
      titleMessage: (!state.showField) ?  'Закончить игру' : 'Начать игру',
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Привет это </h3>
        <div className="symbol"> &#10006; &#9412; </div>
        {<h3>{state.titleMessage}  &#9759; &#9759; &#9759; нажми меня </h3>}
        <button 
          className="buttton"
          onClick={handlerToggle}
        >
          {state.titleMessage}
        </button>
        {state.showField && <Main />}
      </header>
    </div>
  );
}

export default App;
