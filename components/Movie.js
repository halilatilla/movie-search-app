import { useState } from "react";
import "./movie.scss";
import axios from "axios";

const Movie = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [movie, setMovie] = useState("test");
  const onChangeHandle = (e, setState) => {
    setState(e.target.value);
  };
  const getMovie = async (e) => {
    setMovie("");
    axios
      .get(
        `http://www.omdbapi.com/?t=${title}&y=${year}&type=${type}&apikey=e998f7fb`
      )
      .then((res) => {
        if (res.data.Response === "False") {
          return;
        } else {
          setMovie(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
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
        <option value="movie">movie</option>
        <option value="series">series</option>
        <option value="episode">episode</option>
      </select>
      <button onClick={getMovie}> Get Movie</button>
      {movie ? (
        <>
          <div>{movie.Title}</div>
          <div>{movie.Year}</div>
          <div>{movie.imdbRating}</div>
          <img src={movie.Poster}></img>
        </>
      ) : (
        <div>Böyle bir içerik bulunamadı</div>
      )}
    </>
  );
};
/* 
Movie.getInitialProps = async (ctx) => {
  const res = await Axios.get(
    "http://www.omdbapi.com/?t=batman&apikey=e998f7fb"
  );
  console.log(res);

  const json = await res.json();
  console.log(json);

  return { movie: json };
}; */

export default Movie;
