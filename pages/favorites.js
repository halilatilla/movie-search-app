import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import Navbar from '../components/Navbar';

export default function Favorites() {
  const [movies, setMovies] = useState([]);
  const removeMovie = (newMovies) => {
    setMovies(newMovies);
  };

  useEffect(() => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setMovies(favorites);
  }, []);
  return (
    <>
      <Navbar onFavoritesPage />
      <div className="favorites">
        {movies.map((movie) => {
          return <MovieCard movie={movie} removeMovie={(newMovies) => removeMovie(newMovies)} key={movie.imdbID}></MovieCard>;
        })}
      </div>
      <style jsx>{``}</style>
    </>
  );
}
