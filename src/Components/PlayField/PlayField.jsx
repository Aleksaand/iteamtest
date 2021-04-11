import React, { useState } from 'react';
import style from './PlayField.module.css';
import { calculateWinner, getSquaresWin, getWinLine } from './helperFunctions';
import { getDrawStatusLastTwo, getDrawStatusLastOne } from './drawStatusFunc';
import { Board } from '../Board/Board';
import { Statistic } from '../Statistic/Statistic';


export const PlayField = (props) => {
    const [count, setcount] = useState({
        player1: 0,
        player2: 0,
    });
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    
    const winner = calculateWinner(board);
    const winnerBoard = getSquaresWin(board);
    const drawStatusOne = getDrawStatusLastOne(board);
    const drawStatusTwo = getDrawStatusLastTwo(board);
    const drawStatus = drawStatusOne || drawStatusTwo;
    const WinLine = getWinLine(winnerBoard);
    const nexStep = xIsNext;

    const player1 = props.playerFirst ? props.playerFirst : 'PLAYER1';
    const player2 = props.playerSecond ? props.playerSecond : 'PLAYER2';

    // console.log(drawStatus);
    // console.log(board);

    React.useEffect( () => {
        if (winner) {
            switch (winner) {
                case 'X':
                    setcount({...count, player1: count.player1 + 1})
                    break;
                case '0':
                    setcount({...count, player2: count.player2 + 1})
                    break;
                default:
                    break;
            }
        }
    }, [winner] );
    
    React.useEffect( () => {
        
        console.log('board',board);
        console.log('nexStep',nexStep);
        console.log('drawStatus',drawStatus);
        console.log('drawStatusOne',drawStatusOne);
        console.log('drawStatusTwo',drawStatusTwo);
    }, [board]);
    
    const handleClick = (index) => {
        const boardCopy = [...board];
        if (winner || boardCopy[index] || drawStatus) {
            return null;
        }
        boardCopy[index] = xIsNext ?  'X' :  '0';
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
        
    };
    const startNewGame = () => {
        return (
            <button
                className={style.buttonNewGame}
                onClick={() => setBoard(Array(9).fill(null))}
            >
                startNewGame
            </button>
        );
    };


    return (
        <div>
            <div className={style.span}>
                <span>
                    { winner ? 'Win' + winner : `Next move` + (xIsNext ? 'X' : '0')}
                </span>
                <span className={style.draw}>
                    { (!winner && drawStatus) ? `  DRAW  `: "" }
                    {/* { (!winner && !board.includes(null)) ? `  DRAW  `: "" } */}
                </span>

            </div>
            <div className={style.flex}>
                
                <div className={style.fieldstatistic}>
                    <Board 
                        squares={board} 
                        click={handleClick} 
                        winnerBoard={winnerBoard}
                        WinLine={WinLine}
                    />
                </div>

                <div>
                    <Statistic 
                        namePlayer1={player1}
                        namePlayer2={player2}
                        countPlayer1={count.player1}
                        countPlayer2={count.player2}
                    />
                    { startNewGame() }
                </div>
            </div>
        </div>
    );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // const [state, setState] = React.useState({
    //     squares: Array(9).fill(null),
    //     count: 0,
    // });
    // const [xIsNext, setXIsNext] = React.useState(true);
    // const winner = calculateWinner(state.squares);
    // const player1 = props.playerFirst ? props.playerFirst : 'PLAYER1';
    // const player2 = props.playerSecond ? props.playerSecond : 'PLAYER2';


    
    // const handClick = (event) => {
    //     const winner = calculateWinner(state.squares);
    //     console.log(winner);
    //     let data = event.target.getAttribute('data');
    //     const boardCopy = [...state.squares];
    //     if (winner || boardCopy[data]) {
    //         return null;
    //     }
    //     boardCopy[data] = xIsNext ?  'X' :  '0';
    //     setState(boardCopy);
    //     setXIsNext(!xIsNext);
    // };

    // // const [count, setCount] = React.useState(0);
    // // let gridElement = Array(9).fill(null);
    // // gridElement[8] = null;
    // // gridElement.fill(null);
    
    



    // const handlerClick = (event) => {
    //     let data = event.target.getAttribute('data');
    //     // const winner = calculateWinner(state.squares);
    //     let currentPlayField = state.squares;
    //     if (winner || currentPlayField[data] === null) {
    //         currentPlayField[data] = (state.count % 2 === 0) 
    //         ?  'X'
    //         :  '0';
            
    //         setState({
    //             ...state,
    //             squares: currentPlayField,
    //             count: state.count + 1
    //         });
    //     } else {

    //     };
    //     console.log(state.squares);
    //     console.log(winner);
    // };
    
    
    // return (
    //     <div className={style.big}>
    //         <div className={style.space}></div>
    //         <div className={style.fieldstatistic}>
    //         <div className={style.grid}>
    //             {state.squares.map((element, index) => (
    //                 <div 
    //                     key={index}
    //                     className={style.fieldBox}
    //                     onClick={handlerClick}
    //                     // onClick={handClick}
    //                     data={index}
    //                     id={index}
    //                 >
    //                 {state.squares[index]}
    //                 </div>))}
    //         </div>
    //         <div className={style.statistic}>
    //             <span>Statistic</span>
    //             <div>move {}: </div>
    //             <div>win {player1}: </div>
    //             <div>win {player2}: </div>
    //             <div>draw: </div>
    //         </div>
    //         </div>
    //         <div className={style.space}></div>
            
    //     </div>
        
    // );
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