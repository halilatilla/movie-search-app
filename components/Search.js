import { useState } from 'react';
import axios from 'axios';
import randomWords from 'random-words';
import MovieCard from './MovieCard';
import Button from './Button';
import Loader from './Loader';

export default function Search() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [movie, setMovie] = useState('');
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [alert, setAlert] = useState(false);
  const [network, setNetwork] = useState(false);

  const getMovie = async () => {
    if (title === '') {
      setAlert(true);
      setNotFound(false);
      setNetwork(false);
      return;
    }
    setLoading(true);
    setMovie('');
    setNotFound(false);
    setAlert(false);
    setNetwork(false);
    axios
      .get(`https://www.omdbapi.com/?t=${title}&y=${year}&type=${type}&apikey=${process.env.API_KEY}`)
      .then((res) => {
        if (res.data.Response === 'False') {
          setNotFound(true);
          setLoading(false);
          return;
        } else {
          setMovie(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setNetwork(true);
        setLoading(false);
      });
  };
  const getRandomMovie = async () => {
    setLoading(true);
    setMovie('');
    setNotFound(false);
    setAlert(false);
    setNetwork(false);
    const randomTitle = randomWords();
    axios
      .get(`https://www.omdbapi.com/?t=${randomTitle}&apikey=${process.env.API_KEY}`)
      .then((res) => {
        if (res.data.Response === 'False') {
          setNotFound(true);
          setLoading(false);
          return;
        } else {
          setMovie(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setNetwork(true);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="container">
        <label>
          Enter Movie Name
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Name"></input>
        </label>
        <label>
          Enter Movie Year
          <input value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year"></input>
        </label>
        <label>
          Select A Type
          <select value={type} onChange={(e) => setType(e.target.value)} aria-label="Select a type">
            <option value="movie">movie</option>
            <option value="series">series</option>
            <option value="episode">episode</option>
          </select>
        </label>

        <Button className="button-search" onClick={title === '' ? getRandomMovie : getMovie}>
          {loading ? <Loader width="25px" /> : title === '' ? <span>Get Random Movie</span> : <span>Get Movie</span>}
        </Button>
      </div>

      {alert && <div className="error">Movie name is require !</div>}
      {notFound && <div className="error">No such content was found !</div>}
      {network && <div className="error">Check your internet connection</div>}
      {movie && <MovieCard movie={movie} />}
    </>
  );
}
