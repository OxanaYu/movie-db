import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/MoviesSlice";
import { MovieCard } from "../components/MovieCard";
import { MoviePagination } from "../components/MoviePagination";
import { useLocation } from "react-router";
import {MoviePageHeader} from '../components/MoviePageHeader';

function MainPage() {
  const location = useLocation();
  const pageNum = parseInt(location.pathname.slice(-1)) || 1;
  const [currentPage, setCurrentPage] = useState(pageNum);
  const API_KEY = "e9f559802c673e3e74a73543bc0c8382";
  const API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`;
  // const POSTER_PATH = `http://image.tmdb.org/t/p/w440_and_h660_face/${POSTER_PATH}`;

  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    dispatch(fetchMovies({ API }));
  }, [currentPage, API]);

  return (
    <>
      <MoviePageHeader currentPage={currentPage}/>
      <div className="movies-container">
        {movies &&
          movies.map(({ id, title, overview, poster_path }) => (
            <MovieCard
              key={id}
              title={title}
              description={overview}
              img={`http://image.tmdb.org/t/p/w440_and_h660_face/${poster_path}`}
            />
          ))}
      </div>
      <div className="pagination">
        <MoviePagination
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </>
  );
}
export { MainPage };
