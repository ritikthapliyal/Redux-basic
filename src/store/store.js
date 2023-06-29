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


const movieSlice = createSlice({
    name:'movies',
    initialState:[],
    reducers:{
        addMovie(state,action){
            state.push(action.payload)
        }
    }
})

export const store = configureStore({
    reducer:{
        'songs':songSlice.reducer,
        'movies':movieSlice.reducer
    }
})


export const {addSong} = songSlice.actions
export const {addMovie} = movieSlice.actions