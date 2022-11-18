import { React, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addMovies } from "../../store/MovieSlice";
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./MovieListing.module.css";

export default function MovieListing() {
  const baseURL = "https://www.omdbapi.com";
  const APIKEY = "45ab3312";
  const movieList = useSelector((state) => state.movie.movieList);
  const Title = useSelector((state) => state.movie.searchQuery);
  const dispatch = useDispatch();
  console.log(Title, "Title");
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios
        .get(`${baseURL}?apikey=${APIKEY}&s=${Title}&type=movie`)
        .catch((error) => {
          console.log("error", error);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovie();
  }, [Title]);

  let renderMovies = movieList.Search?.map((movie, index) => (
    <MovieCard movie={movie} key={index} />
  ));

  return <div className={styles["display_movie"]}>{renderMovies}</div>;
}
