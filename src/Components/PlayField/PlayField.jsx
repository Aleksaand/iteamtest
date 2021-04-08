import React from 'react';
import style from './PlayField.module.css';
import { calculateWinner } from './calculateWinner';


export const PlayField = (props) => {
    const [state, setState] = React.useState({
        squares: Array(9).fill(null),
        count: 0,
    });
    const [xIsNext, setXIsNext] = React.useState(true);
    const winner = calculateWinner(state.squares);
    const player1 = props.playerFirst ? props.playerFirst : 'PLAYER1';
    const player2 = props.playerSecond ? props.playerSecond : 'PLAYER2';
    console.log(winner);

    
    // const [count, setCount] = React.useState(0);
    // let gridElement = Array(9).fill(null);
    // gridElement[8] = null;
    // gridElement.fill(null);
    
    



    const handlerClick = (event) => {
        let data = event.target.getAttribute('data');
        let currentPlayField = state.squares;
        if (currentPlayField[data] === null) {
            currentPlayField[data] = (state.count % 2 === 0) 
            ?  'X'
            :  '0';
            
            setState({
                ...state,
                squares: currentPlayField,
                count: state.count + 1
            });
        } else {

        };
        console.log(state.squares);
        // calculateWinner(state.squares);
    };
    
    
    return (
        <div className={style.big}>
            <div className={style.space}></div>
            <div className={style.fieldstatistic}>
            <div 
                className={style.grid}
            >
                {state.squares.map((element, index) => (
                    <div 
                        key={index}
                        className={style.fieldBox}
                        onClick={handlerClick}
                        data={index}
                        id={index}
                    >
                    {state.squares[index]}
                    </div>))}
            </div>
            <div className={style.statistic}>
                <span>Statistic</span>
                <div>move {}: </div>
                <div>win {player1}: </div>
                <div>win {player2}: </div>
                <div>draw: </div>
            </div>
            </div>
            <div className={style.space}></div>
            
        </div>
        
    );
}



// function ActionLink() {
//     function handleClick(e) {
//       e.preventDefault();
//       console.log('The link was clicked.');
//     }
  
//     return (
//       <a href="#" onClick={handleClick}>
//         Click me
//       </a>
//     );
//   }