import { useState, useEffect } from 'react';
import MovieCard from '../../components/movie-card';
import Header from '../../components/header';
import './favorites.scss';

export default () => {
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
      <Header onFavoritesPage />
      <div className="favorites">
        {movies.map((movie) => {
          return <MovieCard movie={movie} removeMovie={(newMovies) => removeMovie(newMovies)} key={movie.imdbID}></MovieCard>;
        })}
      </div>
      <style jsx>{``}</style>
    </>
  );
};
