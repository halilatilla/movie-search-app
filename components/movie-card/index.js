import { useState } from 'react';
import './movie-card.scss';
import Button from '../button';

export default ({ movie }) => {
  let movies = [];

  const addFav = async (e) => {
    e.preventDefault();
    if (localStorage.getItem('favorites')) {
      movies = JSON.parse(localStorage.getItem('favorites'));
    }
    if (movies.length > 0) {
      if (movies.some((el) => el.imdbID === movie.imdbID)) return;
      movies.push(movie);
    } else {
      movies.push(movie);
    }
    localStorage.setItem('favorites', JSON.stringify(movies));
  };

  return (
    <div className="movie">
      <Button onClick={(e) => addFav(e)} className="fav-button">
        Fav
      </Button>
      <div className="info-wrapper">
        <div className="name">{movie.Title}</div>
        <div className="date">{movie.Year}</div>
        <div className="rating">Imdb - {movie.imdbRating} </div>
      </div>
      <div className="poster-wrapper">
        <img src={movie.Poster} alt="" className="poster" />
      </div>
    </div>
  );
};
