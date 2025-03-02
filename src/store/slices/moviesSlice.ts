import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Movie, MoviesState, TypeFilter } from '../types/Movie.types';

const initialState: MoviesState = {
  searchQuery: 'Pokemon',
  yearFilter: '',
  typeFilter: '',
  movies: [],
  totalResults: 0,
  selectedMovie: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setYearFilter(state, action: PayloadAction<string>) {
      state.yearFilter = action.payload;
    },
    setTypeFilter(state, action: PayloadAction<TypeFilter>) {
      state.typeFilter = action.payload;
    },
    setMovies(
      state,
      action: PayloadAction<{ movies: Movie[]; totalResults: number }>
    ) {
      state.movies = action.payload.movies;
      state.totalResults = action.payload.totalResults;
    },
    setSelectedMovie(state, action: PayloadAction<Movie | null>) {
      state.selectedMovie = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setYearFilter,
  setTypeFilter,
  setMovies,
  setSelectedMovie,
} = moviesSlice.actions;

export default moviesSlice.reducer;
