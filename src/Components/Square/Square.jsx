import  './Squares.css';


export const Square = (props) => {
    // console.log(props.WinLine);
    // className={ active ? "modal__wrapper active" : "modal__wrapper" }
    return (
        <div className={props.WinLine}>
            <div
                className={ props.winnerSquare ? "button__field winner" : "button__field" } 
                onClick={props.onClick}
            >
                {props.value}
            </div>
        </div>
    );
};