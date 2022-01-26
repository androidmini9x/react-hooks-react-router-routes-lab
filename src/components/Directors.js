import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsList = directors.map((dir, i) => {
    return <div key={i}>
      <h3>Name: {dir.name}</h3>
      <p>Movies:</p>
      <ul>{dir.movies.map((g, k) => <li key={k}>{g}</li>)}</ul>
    </div>;
  });

  return <div>
    <h1>Directors Page</h1>
    {directorsList}
  </div>;
}

export default Directors;
