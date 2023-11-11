import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { options } from 'components/verification/verification';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
      options
    )
      .then(response => response.json())
      .then(response => {
        setReviews(response.results);
        console.log(response);
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <>
      {reviews.length === 0 ? (
        <p>We dont have any reviews for this movie.</p>
      ) : (
        <>
          <h3>Reviews</h3>
          {reviews.map(review => {
            return (
              <div key={review.author}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default Reviews;
