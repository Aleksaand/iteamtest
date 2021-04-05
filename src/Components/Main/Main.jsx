import style from './Main.module.css';
import { PlayField } from '../PlayField/PlayField';
import { PlayerInfo } from '../PlayerInfo/PlayerInfo';

export const Main = () => {
    return (
        <main className={style.text}>
            <PlayerInfo>PlayerInfo</PlayerInfo>
            <PlayField>PlayField</PlayField>    
        </main>
    );
}; 