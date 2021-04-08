


export const FirstInputPlayer = (props) => {
    return (
        <div>
            <div>Enter {props.statePlayerOne.id} player name  & push the button </div>
            <input 
                type="text"
                // className={style.input}
                value={props.statePlayerOne.value}
                onChange={props.handlerInputFirst}
            />
            <button 
                // className={style.button}
                onClick={props.setPlayerName}
            >
            BUTTON
            </button>
        </div>
    );
};