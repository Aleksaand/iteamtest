import React from 'react';
import style from './PlayerInfo.module.css';


export const PlayerInfo = () => {
    const [state, setState] = React.useState({
        value: 15
    });
    
    
    
    
    return (
        <div>
            
            <div>Enter your name & push the button </div>
            <input 
                type="text"
                className={style.input}
            />
            <button className={style.button}>BUTTON</button>
            
        </div>
        
    );
}