import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchMovie } from 'services/services-api';

import {
  SearchMovieSection,
  MovieImage,
  MovieList,
  MovieItem,
  StyledLink,
  MovieTitle,
  FailedSearch,
} from './Movies.styled';

import SearchBox from 'components/SearchBox/SearchBox';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Movies = () => {
  const [listMovies, setListMovies] = useState([]);
  const [searchParams] = useSearchParams();

  const productName = searchParams.get('query') ?? '';

  useEffect(() => {
    SearchMovie(productName, 'search_movies')
      .then(data => {
        setListMovies(data.results);
      })
      .catch(error => {
        console.error('Помилка отримання даних про фільм:', error);
      });
  }, [productName]);

  return (
    <SearchMovieSection>
      <SearchBox />
      {listMovies.length !== 0 && (
        <MovieList>
          {listMovies.map(movie => {
            return (
              <MovieItem key={movie.id}>
                <StyledLink
                  to={`/movies/${movie.id}`}
                  state={{ from: `/movies?${searchParams}` }}
                >
                  <MovieTitle>{movie.title}</MovieTitle>
                  <MovieImage
                    src={
                      movie.backdrop_path
                        ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                        : defaultImg
                    }
                    alt="poster"
                    width="400"
                    height="250"
                    className="searchedMovie"
                  />
                </StyledLink>
              </MovieItem>
            );
          })}
        </MovieList>
      )}
      {listMovies.length === 0 && searchParams.get('query') && (
        <FailedSearch>
          We are sorry, but we couldn't find the movie you were looking for🥺
        </FailedSearch>
      )}
    </SearchMovieSection>
  );
};

export default Movies;
