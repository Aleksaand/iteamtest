import style from './Square.module.css';

export const Square = (props) => {
    return (
        <button className={style.button} onClick={props.onClick}>
            {props.value}
        </button>
    );
};