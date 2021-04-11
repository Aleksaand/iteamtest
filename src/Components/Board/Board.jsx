import {Square} from '../Square/Square';
import './Board.css';

export const Board = ({ squares, click, winnerBoard, WinLine }) => {
    return (
        <div className={` ${WinLine}`}>
            <div className={`grid `}>
                {
                    squares.map((square, i) => (
                        <Square
                            key={i} 
                            value={square}
                            winnerSquare={(winnerBoard.includes(i)) ? "winner" : ""}
                            winnerBoard={winnerBoard}
                            onClick={() => click(i)}
                        />
                    ))
                }
            </div>
        </div>
    );
};