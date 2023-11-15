import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { options } from 'components/verification/verification';

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
  }, [movie, productName]);

  return (
    <>
      <form onSubmit={SearchedMovies}>
        <input
          type="text"
          value={query}
          onChange={e => {
            updateQueryString(e.target.value);
            setQuery(e.target.value);
          }}
        />
        <button type="submit">search</button>
      </form>
      {listMovies.length !== 0 && (
        <ul>
          {listMovies.map(movie => {
            return (
              <li key={movie.id}>
                <Link
                  to={`/movies/${movie.id}`}
                  state={{ from: `/movies?${searchParams}` }}
                >
                  <h3>{movie.title}</h3>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt=""
                    className="searchedMovie"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Movies;
