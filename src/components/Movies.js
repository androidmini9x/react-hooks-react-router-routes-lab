import React from "react";
import { movies } from "../data";

function Movies() {

  const moviesList = movies.map((movie, i) => {
    return <div key={i}>
      <h3>Name: {movie.title}</h3>
      <p>Time: {movie.time}</p>
      <p>Genres:</p>
      <ul>{movie.genres.map((g, k) => <li key={k}>{g}</li>)}</ul>
    </div>;
  });

  return <div>
    <h1>Movies Page</h1>
    {moviesList}
  </div>;
}

export default Movies;
