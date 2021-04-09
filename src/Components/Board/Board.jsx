import {Square} from '../Square/Square';
import './Board.css';

export const Board = ({ squares, click, winnerBoard, WinLine }) => {
    // console.log('squares',squares);
    // className={ active ? "modal__wrapper active" : "modal__wrapper" }
     // console.log('winnerBoard',typeof(winnerBoard),winnerBoard);
    // console.log('WinLine',typeof(WinLine),WinLine);
    return (
        <div className={`grid ${WinLine}`}>
            {
                squares.map((square, i) => (
                   
                    // if (winnerBoard.includes(i)) {
                    //     console.log(i)
                    // }
                    <Square
                        key={i} 
                        value={square}
                        winnerSquare={(winnerBoard.includes(i)) ? "winner" : ""}
                        winnerBoard={winnerBoard}
                        // WinLine={WinLine}
                        onClick={() => click(i)}
                    />
                ))
            }
        </div>
    );
};