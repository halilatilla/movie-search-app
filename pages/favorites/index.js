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
      <Header></Header>
      <div className="favorites">
        {movies.map((movie) => {
          return <MovieCard movie={movie} removeMovie={(newMovies) => removeMovie(newMovies)} key={movie.imdbID}></MovieCard>;
        })}
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol', 'Noto Color Emoji';
          background-color: #181a1b;
        }
      `}</style>
    </>
  );
};
