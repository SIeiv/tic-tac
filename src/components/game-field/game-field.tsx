import styles from "./game-field.module.css";
import GameCell from "../game-cell/game-cell.tsx";
import {useAppSelector} from "../../hooks.ts";
import {ReactElement} from "react";

const GameField = () => {
    const field = useAppSelector(state => state.field);
    const turn = useAppSelector(state => state.turn);
    const gameStatus = useAppSelector(state => state.gameStatus);

    let fieldItems: Array<ReactElement> = [];

    field.forEach((row, x) => {
        row.forEach((e, y) => fieldItems.push(<GameCell state={e} x={x} y={y}/>))
    })

    return (
        <div className={styles.gameField}>
            <div className={styles.gameField__items}>
                {fieldItems}
            </div>
            {gameStatus !== "playing"
                && <div className={styles.gameField__overlay}>
                    {gameStatus === "win" && `Игрок ${turn} победил!`}
                    {gameStatus === "draw" && `Ничья!`}
                </div> }

        </div>
    );
};

export default GameField;