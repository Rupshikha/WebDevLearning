import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieList: [],
  searchQuery: "",
  movieDetailList: [],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movieList = payload; //{...state,payload}
    },
    addTitle: (state, { payload }) => {
      state.searchQuery = payload;
    },
    addMovieDetail: (state, { payload }) => {
      state.movieDetailList = payload;
    },
  },
});

export const { addMovies, addTitle, addMovieDetail } = movieSlice.actions;
export default movieSlice.reducer;
