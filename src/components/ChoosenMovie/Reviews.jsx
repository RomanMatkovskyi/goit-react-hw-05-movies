import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { options } from 'components/verification/verification';
import {
  ReviewsTitle,
  AuthorName,
  ReviewText,
  NoReviews,
} from './Reviews.styled';

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
      })
      .catch(err => console.error(err));
  }, [movieId]);
  return (
    <>
      {reviews.length === 0 ? (
        <NoReviews>We dont have any reviews for this movie.</NoReviews>
      ) : (
        <>
          <ReviewsTitle>Reviews</ReviewsTitle>
          {reviews.map(review => {
            return (
              <div key={review.author}>
                <AuthorName>{review.author}</AuthorName>
                <ReviewText>{review.content}</ReviewText>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default Reviews;
