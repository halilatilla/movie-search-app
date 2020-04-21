import React from 'react';
import './MovieCard.scss';

export default function MovieCard({ movie }) {
  return (
    <div className="movie">
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
}
