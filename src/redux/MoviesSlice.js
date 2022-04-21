import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const API_KEY = "e9f559802c673e3e74a73543bc0c8382";
  const API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`;
  // const POSTER_PATH = `http://image.tmdb.org/t/p/w440_and_h660_face/${POSTER_PATH}`;

export const fetchMovies = createAsyncThunk("api.themoviedb", async(obj,{state,error})=>{
    try{
          const request = await fetch(API)
          const { results } = await request.json()
          return results;
    }catch(error){
        console.log(error)
        return []
    }
})

const MoviesSlice = createSlice({
    name:"movies",
    initialState:[],
    reducers:{},
    extraReducers:{
        [fetchMovies.pending]:(state,action)=>{
            return []
        },
        [fetchMovies.fulfilled]:(state,action)=>{
            return action.payload
        },
        [fetchMovies.rejected]:(state,action)=>{
            return []
        }
    }
})

export const actions = MoviesSlice.actions;
export {MoviesSlice} ;