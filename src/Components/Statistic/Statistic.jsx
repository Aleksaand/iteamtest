import style from './Statistic.module.css';


export const Statistic = (props) => {
    return (
        <div>
            <div className={style.statistic}>
                 <span>Statistic</span>
                 <div>win {props.namePlayer1}: {props.countPlayer1}</div>
                 <div>win {props.namePlayer2}: {props.countPlayer2}</div>
             </div>
        </div>
    );
};