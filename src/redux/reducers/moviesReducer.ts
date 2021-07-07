import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

import { Movie } from "models";
import MovieService from "services/movieService";

export interface MovieState {
  movies: Movie[];
  likedMovies: Movie[];
}

const initialState: MovieState = {
  movies: [],
  likedMovies: [],
};

export const moviesSlice = createSlice({
  name: "moviesReducer",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
    likeMovie: (state, action: PayloadAction<Movie>) => {
      state.likedMovies = [...state.likedMovies, action.payload];
    },
    unlikeMovie: (state, action: PayloadAction<Movie>) => {
      state.likedMovies = state.likedMovies.filter(
        (x) => x.id !== action.payload.id
      );
    },
  },
});

export const { setMovies, likeMovie, unlikeMovie } = moviesSlice.actions;

export const selectMovies = (state: RootState) => state.moviesReducer.movies;

export const selectLikedMovies = (state: RootState) =>
  state.moviesReducer.likedMovies;

export const getMovies = () => async (dispatch: any) => {
  const data = await MovieService.getPopular();
  dispatch(setMovies(data));
};

export default moviesSlice.reducer;
