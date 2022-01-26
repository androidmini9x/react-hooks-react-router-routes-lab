import React from "react";
import { actors } from "../data";

function Actors() {

  const actorsList = actors.map((actor, i) => {
    return <div key={i}>
      <h3>Name: {actor.name}</h3>
      <p>Movies:</p>
      <ul>{actor.movies.map((g, k) => <li key={k}>{g}</li>)}</ul>
    </div>;
  });

  return <div>
    <h1>Actors Page</h1>
    {actorsList}
  </div>;
}

export default Actors;
