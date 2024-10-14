import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    turn: 1,
    gameStatus: "playing" as "playing" | "win" | "draw",

    field: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ] as Array<Array<"cross" | "zero" | null>>
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        move(state, action: PayloadAction<{x: number, y:number}>) {
            //корректность ввода
            if (state.field[action.payload.x][action.payload.y] === null) {
                //правила игры

                //обработка победы

                //ничья

                //правила игры продолжение
            } else {
                alert("Ячейка занята")
            }

        },
        //рестарт
        restart(state) {

        }
    }
})

export const { move , restart} = mainSlice.actions
export default mainSlice.reducer