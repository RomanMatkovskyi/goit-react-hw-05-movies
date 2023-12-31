import { useState, useEffect, useRef } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import {
  Score,
  MovieTitle,
  MovieImage,
  Container,
  Overwiew,
  Description,
  GenresList,
} from './ChoosenMovie.styled';

import { SearchMovie } from 'services/services-api';

const ChoosenMovie = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    SearchMovie(movieId, 'movie')
      .then(data => {
        setMovieInfo(data);
      })
      .catch(error => {
        console.error('Помилка отримання даних про фільм:', error);
      });
  }, [movieId]);

  return (
    <Container>
      <div>
        <MovieTitle>{movieInfo.original_title}</MovieTitle>
        <MovieImage
          className="choosenbookimg"
          src={
            movieInfo.poster_path &&
            `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`
          }
          alt={movieInfo.title ? movieInfo.title : movieInfo.name}
        />
        <Link to={backLinkLocationRef.current}>Back to search page</Link>
      </div>
      <div>
        <Score>Users score: {movieInfo.vote_average}</Score>
        <Overwiew>Overview</Overwiew>
        <Description>{movieInfo.overview}</Description>
        <h3>Genres</h3>
        {movieInfo.genres && (
          <GenresList>
            {movieInfo.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </GenresList>
        )}
        <h3>Additional information</h3>
        <GenresList>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </GenresList>
        <Outlet />
      </div>
    </Container>
  );
};

export default ChoosenMovie;
