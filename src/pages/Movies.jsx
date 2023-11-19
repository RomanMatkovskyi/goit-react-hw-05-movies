import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { options } from 'components/verification/verification';
import {
  MovieSearch,
  SearchBtn,
  MovieImage,
  MovieList,
  MovieItem,
  StyledLink,
  MovieTitle,
} from 'pages/Movies.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Movies = () => {
  const [movie, setMovie] = useState('');
  const [query, setQuery] = useState('');
  const [listMovies, setListMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('query') ?? '';

  const SearchedMovies = event => {
    event.preventDefault();
    setMovie(productName);
    setQuery('');
  };

  const updateQueryString = name => {
    const nextParams = name !== '' ? { query: name } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${productName}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then(response => response.json())
      .then(data => {
        setListMovies(data.results);
      })
      .catch(err => console.error(err));
  }, [movie]);
  return (
    <>
      <form onSubmit={SearchedMovies}>
        <MovieSearch
          type="text"
          value={query}
          onChange={e => {
            updateQueryString(e.target.value);
            setQuery(e.target.value);
          }}
        />
        <SearchBtn type="submit">search</SearchBtn>
      </form>
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
                    width="450"
                    height="250"
                    className="searchedMovie"
                  />
                </StyledLink>
              </MovieItem>
            );
          })}
        </MovieList>
      )}
    </>
  );
};

export default Movies;
