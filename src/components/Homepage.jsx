import React from "react";
import MovieForm from "./MovieForm";

const Homepage = () => {
  return (
    <div>
      <section>
        <h2>Add a Movie</h2>
        <h3>Enter description of the Movie</h3>
        <MovieForm />
      </section>
    </div>
  );
};

export default Homepage;

