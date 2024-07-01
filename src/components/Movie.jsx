import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Movie({ movie, onEdit }) {
  const dispatch = useDispatch();
  const [review, setReview] = useState(movie.review);

  const handleRating = (rating) => {
    dispatch({ type: 'RATE_MOVIE', payload: { id: movie.id, rating } });
  };

  return (
    <div className="movie-item">
      <h3 className='app-header'>{movie.title}</h3>
      <p><b>{movie.description}</b></p>
      <p>Release Year: <b>{movie.releaseYear}</b></p>
      <p>Genre: <b>{movie.genre}</b></p>
      <p>Watched: <b>{movie.watched ? 'Yes' : 'No'}</b></p>
      <div>
        Rating: 
        {[1, 2, 3, 4, 5].map(star => (
          <span 
            key={star} 
            onClick={() => handleRating(star)}
            style={{marginLeft: '3px',cursor: 'pointer', color: star <= movie.rating ? 'gold' : 'gray'}}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
}

export default Movie;