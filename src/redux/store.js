import {configureStore} from '@reduxjs/toolkit';
import { MoviesSlice } from './MoviesSlice';

const store =  configureStore({
    reducer:{
        movies:MoviesSlice.reducer
    }
})

export {store};