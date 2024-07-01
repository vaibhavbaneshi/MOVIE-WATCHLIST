import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Movie from './Movie';
import MovieForm from './MovieForm';

function MovieList() {
  const movies = useSelector(state => state.movies.movies);
  const [editingMovie, setEditingMovie] = useState(null);
  const dispatch = useDispatch();

  const handleEdit = (movie) => {
    setEditingMovie(movie);
  };
  
  return (
    <div>
      <h2>My Watchlist</h2>
      {editingMovie ? (
        <MovieForm movie={editingMovie} onCancel={() => setEditingMovie(null)} />
      ) : (
        movies.map(movie => (
          <Movie key={movie.id} movie={movie} onEdit={handleEdit} />
        ))
      )}
    </div>
  );
}

export default MovieList;
