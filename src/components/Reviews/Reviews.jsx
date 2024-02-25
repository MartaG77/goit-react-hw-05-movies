import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'Api/api';

const Reviews = () => {
  const [ setMovieReviews] = useState([]);
  const { movieId } = useParams();

  const fetchMovieReviews = async () => {
    try {
      const result = await getMovieReviews(movieId);
      setMovieReviews(result.data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchMovieReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <>
      {Reviews.length !== 0 && (
        <div>
          <h2>Movie Reviews</h2>
          <ul>
            {Reviews.map(review => (
              <li key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {Reviews.length === 0 && (
        <div>We don't have any reviews for this movie.</div>
      )}
    </>
  );
};

export default Reviews;