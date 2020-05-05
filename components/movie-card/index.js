import { useState, useEffect } from 'react';
import './movie-card.scss';
import Button from '../button';

export default ({ movie, removeMovie }) => {
  const [active, setActive] = useState(false);

  let movies = [];

  const addFav = async (e) => {
    e.preventDefault();
    if (localStorage.getItem('favorites')) {
      movies = JSON.parse(localStorage.getItem('favorites'));
    }
    if (movies.length > 0) {
      if (movies.some((el) => el.imdbID === movie.imdbID)) {
        setActive(false);
        const newMovies = movies.filter((mov) => {
          return mov.imdbID !== movie.imdbID;
        });
        localStorage.setItem('favorites', JSON.stringify(newMovies));
        removeMovie && removeMovie(newMovies);
        return;
      }
      setActive(true);
      movies.push(movie);
    } else {
      setActive(true);
      movies.push(movie);
    }

    localStorage.setItem('favorites', JSON.stringify(movies));
  };

  useEffect(() => {
    if (localStorage.getItem('favorites')) {
      const moviesLoc = JSON.parse(localStorage.getItem('favorites'));
      if (moviesLoc.some((el) => el.imdbID === movie.imdbID)) {
        setActive(true);
      }
    }
  }, []);

  return (
    <div className="movie">
      <Button onClick={(e) => addFav(e)} className="fav-button">
        <img className="fav-icon" src={active ? '/assets/star-full.png' : '/assets/star-empty.png'}></img>
      </Button>
      <div className="info-wrapper">
        <div className="name">{movie.Title}</div>
        <div className="date">{movie.Year}</div>
        <div className="rating-circle">
          <svg className="round" viewBox="0 0 40 40" width="35" height="35" strokeDasharray={`${Math.floor((movie.imdbRating * 112) / 10)} 999`}>
            <circle cx="50%" cy="50%" r="18" />
          </svg>
          <span>{movie.imdbRating}</span>
        </div>
      </div>
      <div className="poster-wrapper">
        <img src={movie.Poster} alt="" className="poster" />
      </div>
    </div>
  );
};
