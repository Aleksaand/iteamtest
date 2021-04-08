import './modal.css';

export const Modal = ({active, setActive, state, handlerInputFirst, handlerInputSecond}) => {

    
    return (
        <div 
            className={ active ? "modal__wrapper active" : "modal__wrapper" } 
            onClick={() => setActive(false)} 
        >
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                <h3 className="modal__text">Enter Players Name</h3>
                <input 
                type="text"
                className="input__modal"
                value={state.playerFirst}
                onChange={handlerInputFirst}
                />
               <input 
                type="text"
                className="input__modal"
                value={state.playerSecond}
                onChange={handlerInputSecond}
                />
                <button 
                    className="button__modal"
                    onClick={() => setActive(false)}
                >
                   BUTTON
                </button>
            </div>
        </div>
    );
};
