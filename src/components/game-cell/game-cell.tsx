import styles from "./game-cell.module.css";
import {FC} from "react";
import {RxCross1} from "react-icons/rx";
import {FaRegCircle} from "react-icons/fa";
import {useAppDispatch} from "../../hooks.ts";
import {move} from "../../store/main.slice.ts";

interface IGameCell {
    state: "cross" | "zero" | null
    x: number
    y: number
}
const GameCell: FC<IGameCell> = ({state, x, y}) => {
    const dispatch = useAppDispatch();

    const ImgControl = () => {
        if (state === "cross") return <RxCross1 size={50}/>
        else if (state === "zero") return <FaRegCircle size={50}/>
    }

    const handleClick = () => {
        dispatch(move({x, y}))
    }

    return (
        <button onClick={handleClick} className={styles.gameCell}>
            {ImgControl()}
        </button>
    );
};

export default GameCell;