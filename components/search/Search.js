import { useState } from "react";
import axios from "axios";
import "./search.scss";

const Search = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [movie, setMovie] = useState("");
  const [error, setError] = useState(false);
  const [network, setNetwork] = useState(false);
  const onChangeHandle = (e, setState) => {
    setState(e.target.value);
  };
  const getMovie = async (e) => {
    setMovie("");
    setError(false);
    setError(false);
    axios
      .get(
        `http://www.omdbapi.com/?t=${title}&y=${year}&type=${type}&apikey=${process.env.API_KEY}`
      )
      .then((res) => {
        if (res.data.Response === "False") {
          setError(true);
          return;
        } else {
          setMovie(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        setNetwork(true);
      });
  };

  return (
    <>
      <div className="hello">Welcome to Movie Search App</div>
      <label>Search By Title :</label>
      <input
        value={title}
        onChange={(e) => onChangeHandle(e, setTitle)}
      ></input>
      <label>Search By Year :</label>
      <input value={year} onChange={(e) => onChangeHandle(e, setYear)}></input>
      <label>Search By Type :</label>
      <select value={type} onChange={(e) => onChangeHandle(e, setType)}>
        <option>select type</option>
        <option value="movie">movie</option>
        <option value="series">series</option>
        <option value="episode">episode</option>
      </select>
      <button onClick={getMovie}> Get Movie</button>
      {movie && (
        <>
          <div>{movie.Title}</div>
          <div>{movie.Year}</div>
          <div>{movie.imdbRating}</div>
          <img src={movie.Poster}></img>
        </>
      )}
      {error && <div>Böyle bir içerik bulunamadı</div>}
      {network && <div>İnternet bağlantınızı konrol edin</div>}
    </>
  );
};

export default Search;
