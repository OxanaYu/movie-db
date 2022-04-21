import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/MoviesSlice";
import {MovieCard} from "../components/MovieCard"

function MainPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const API_KEY = "e9f559802c673e3e74a73543bc0c8382";
    const API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`;
    // const POSTER_PATH = `http://image.tmdb.org/t/p/w440_and_h660_face/${POSTER_PATH}`;

  const dispatch = useDispatch();
  const movies = useSelector(({movies}) => movies);
  useEffect(() => {
    dispatch(fetchMovies({API,}));
  }, []);
  console.log('data', movies);
  return (
    <>
      <div className="movies-container">
        {movies && movies.map(({id, title, overview, poster_path}) => <MovieCard 
        id={id}
        title={title}
        description={overview}
        img={`http://image.tmdb.org/t/p/w440_and_h660_face/${poster_path}`}
        />)}
      </div>
    </>
  );
}
export { MainPage };
