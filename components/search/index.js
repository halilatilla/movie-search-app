import { useState } from 'react';
import axios from 'axios';
import randomWords from 'random-words';
import MovieCard from '../movie-card';
import Button from '../button';
import Loader from '../loader';

import './search.scss';

export default () => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [movie, setMovie] = useState('');
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [alert, setAlert] = useState(false);
  const [network, setNetwork] = useState(false);

  const onChangeHandle = (e, setState) => {
    setState(e.target.value);
  };

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
        <input value={title} onChange={(e) => onChangeHandle(e, setTitle)} placeholder="Enter Movie Name"></input>
        <input value={year} onChange={(e) => onChangeHandle(e, setYear)} placeholder="Enter Movie Year"></input>
        <select value={type} onChange={(e) => onChangeHandle(e, setType)}>
          <option>select type</option>
          <option value="movie">movie</option>
          <option value="series">series</option>
          <option value="episode">episode</option>
        </select>

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
};
