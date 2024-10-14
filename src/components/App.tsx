import {FC} from "react";
import GameField from "./game-field/game-field.tsx";
import {useAppDispatch, useAppSelector} from "../hooks.ts";
import {restart} from "../store/main.slice.ts";

const App: FC = () => {
    const turn = useAppSelector(state => state.turn);
    const gameStatus = useAppSelector(state => state.gameStatus);
    const dispatch = useAppDispatch();

    return (
        <div className={"main"}>
            <div>Ходит: Игрок {turn}</div>
            <div style={{height: 300}}>
                <GameField/>
            </div>
            {gameStatus !== "playing" && <button onClick={() => {dispatch(restart())}}>restart</button>}
        </div>
    )
};

export default App
