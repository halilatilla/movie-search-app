import { useState, useEffect } from 'react';
import MovieCard from '../components/movie-card/';

export default function favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log(favorites);
    setMovies(favorites);
  }, []);
  return (
    <div>
      {movies.map((movie) => {
        return <MovieCard movie={movie} key={movie.imdbID}></MovieCard>;
      })}
    </div>
  );
}
