import React from 'react';
import style from './PlayField.module.css';


export const PlayField = () => {
    const [state, setState] = React.useState({
        squares: Array(9).fill(null),
        count: 0,
    });
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
        } 
    };
    
    
    return (
        <div className={style.big}>
            <div className={style.space}></div>
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
            {/* {state.value} */}
            {/* &#10006;
            &#9412; */}
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