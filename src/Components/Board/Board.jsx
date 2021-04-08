import {Square} from '../Square/Square';
import style from './Board.module.css';

export const Board = ({ squares, click }) => {
    return (
        <div className={style.grid}>
            {
                squares.map((square, i) => (
                    <Square
                        key={i} 
                        value={square}
                        onClick={() => click(i)}
                    />
                ))
            }
        </div>
    );
};