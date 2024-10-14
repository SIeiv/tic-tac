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
                state.field[action.payload.x][action.payload.y] = state.turn === 1 ? "cross" : "zero";

                //обработка победы
                state.field.forEach(x => {
                    let counter = 0;
                    let currentElement = x[0];
                    x.forEach(y => {
                        if (y === currentElement) counter++;
                    })
                    if (currentElement !== null && counter === 3) {
                        state.gameStatus = "win";
                    }
                });
                for (let x = 0; x < state.field.length; x++) {
                    let counter = 0;
                    let currentElement = state.field[0][x];
                    for(let y = 0; y < state.field[x].length; y++) {
                        if (state.field[y][x] === currentElement) counter++;
                    }
                    if (currentElement !== null && counter === 3) {
                        state.gameStatus = "win";
                    }
                }
                let counter = 0;
                let currentElement = state.field[0][0];
                for (let x = 0; x < state.field.length; x++) {
                    if (state.field[x][x] === currentElement) counter++
                    if (currentElement !== null && counter === 3) {
                        state.gameStatus = "win";
                    }
                }
                counter = 0;
                currentElement = state.field[0][2];
                for (let x = 0; x < state.field.length; x++) {
                    if (state.field[x][state.field.length - 1 - x] === currentElement) counter++
                    if (currentElement !== null && counter === 3) {
                        state.gameStatus = "win";
                    }
                }

                //ничья

                //правила игры продолжение
                if (state.gameStatus === "playing") state.turn = state.turn === 1 ? 2 : 1;
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