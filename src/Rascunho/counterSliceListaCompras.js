import { createSlice } from "@reduxjs/toolkit"
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: [],
    },
    reducers:{
        deletar: (state,action) => {
            console.log(action.payload)
            state.value = state.value.filter((state) => state !== action.payload)
        },
        add: (state, action) => {
            console.log(action.payload)
            state.value = [...state.value,action.payload] 
        },

    },
})

export const {deletar, add} = counterSlice.actions

export default counterSlice.reducer
