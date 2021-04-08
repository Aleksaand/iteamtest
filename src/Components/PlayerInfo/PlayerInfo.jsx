import React from 'react';
import style from './PlayerInfo.module.css';
import {FirstInputPlayer} from './FirstPlayerInput/FirstPlayerInput';
import {SecondInputPlayer} from './SecondInputPlayer/SecondInputPlayer';


export const PlayerInfo = () => {
    let playerOne = '';
    let playerTwo = '';
    
    const [state, setState] = React.useState({
        value: '',
        playerOne: '',
        playerTwo: '',
    });
    const [statePlayerOne, setStatePlayerOne] = React.useState({
        value: '',
        id: 'First',
        visible: true,

    });
    const [statePlayerTwo, setStatePlayerTwo] = React.useState({
        value: '',

    });
    
    const handlerInputFirst = (event) => {
        console.log(event.target.value);
        setStatePlayerOne({
            ...statePlayerOne,
            value: event.target.value,
        });
    };
    
    const setPlayerName = () => {
        setStatePlayerOne({
            ...statePlayerOne,
            visible: !statePlayerOne.visible,
        });
        console.log(statePlayerOne.value);
        console.log(statePlayerOne.visible);
    };
    
    
    return (
        <div>
            {statePlayerOne.visible && <FirstInputPlayer 
                statePlayerOne={statePlayerOne} 
                handlerInputFirst={handlerInputFirst}
                setPlayerName={setPlayerName} 
            />}
            <SecondInputPlayer />
            <div>Enter {statePlayerOne.id} player name  & push the button </div>
            <input 
                type="text"
                className={style.input}
                value={statePlayerOne.value}
                onChange={handlerInputFirst}
            />
            <button 
                className={style.button}
                onClick={setPlayerName}
            >
            BUTTON
            </button>
        </div>
        
    );
}