import { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';
import Button from './Button';

export default function MovieCard({ movie, removeMovie }) {
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

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 300 }
  };
  return (
    <motion.div className="movie" initial="hidden" animate="visible" variants={variants}>
      <Button onClick={(e) => addFav(e)} className="fav-button">
        <img alt="add favorite button" tabIndex="0" className="fav-icon" src={active ? '/assets/star-full.png' : '/assets/star-empty.png'}></img>
      </Button>
      <div className="info-wrapper">
        <div className="name">{movie.Title}</div>
        <div className="country">{movie.Country}</div>
        <div className="date">{movie.Year}</div>
        <div className="rating-circle">
          <svg aria-label="movie rating" className="round" viewBox="0 0 40 40" width="35" height="35" strokeDasharray={`${Math.floor((movie.imdbRating * 112) / 10)} 999`}>
            <circle cx="50%" cy="50%" r="18" />
          </svg>
          <span>{movie.imdbRating}</span>
        </div>
      </div>
      <div className="poster-wrapper">
        <LazyLoadImage effect="blur" width={300} height={450} placeholderSrc src={movie.Poster} alt={movie.Title} />
      </div>
    </motion.div>
  );
}
