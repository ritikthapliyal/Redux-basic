import {configureStore,createSlice} from '@reduxjs/toolkit'

const songSlice = createSlice({
    name:'songs',
    initialState:[],
    reducers:{
        addSong(state,action){
            state.push(action.payload)
        }
    }
})


export const store = configureStore({
    reducer:{
        'songs':songSlice.reducer
    }
})


export const {addSong} = songSlice.actions
