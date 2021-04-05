import React from 'react';
import style from './PlayField.module.css';


export const PlayField = () => {
    const [state, setState] = React.useState({
        value: 15
    });
    let gridElement = [];
    gridElement[8] = null;
    gridElement.fill(null);
    
    
    
    
    return (
        <div>
            <div >PlayField</div>
            <div 
                className={style.grid}
            >
                {gridElement.map((element, index) => (
                    <div 
                        key={index}
                        className={style.fieldBox}
                    >
                    {element}
                    </div>))}
            </div>
            {state.value}
            &#10006;
            &#9412;
        </div>
        
    );
}