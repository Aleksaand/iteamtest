import React from 'react';
import style from './Main.module.css';
import { PlayField } from '../PlayField/PlayField';
// import { PlayerInfo } from '../PlayerInfo/PlayerInfo';
import { Modal } from '../Modal/Modal';

export const Main = () => {
    
    const [state, setState] = React.useState({
        playerFirst:'Player1',
        playerSecond:'Player2',
        showPlayField: false,
    });
    const [modalActive, setModalActive] = React.useState(true);
    const handlerInputFirst = (event) => {
        setState({
            ...state,
            playerFirst: event.target.value,
        });
    };
    const handlerInputSecond = (event) => {
        setState({
            ...state,
            playerSecond: event.target.value,
        });
    };
    
    return (
       
       <main className={style.text}>
            <Modal 
                state={state} 
                active={modalActive} 
                setActive={setModalActive}
                handlerInputFirst={handlerInputFirst}
                handlerInputSecond={handlerInputSecond} 
            />
            <PlayField 
                playerFirst={state.playerFirst}
                playerSecond={state.playerSecond}
            />
        </main>
    );
}; 