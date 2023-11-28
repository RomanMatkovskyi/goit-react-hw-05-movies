import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('query') ?? '';

  const updateQueryString = name => {
    const nextParams = name !== '' ? { query: name } : {};
    setSearchParams(nextParams);
  };

  const SearchedMovies = event => {
    event.preventDefault();
    setMovie(productName);
    updateQueryString(query);
  };

  return (
    <>
      <form onSubmit={SearchedMovies}>
        <input
          type="text"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
        <button type="submit">search</button>
      </form>
    </>
  );
};

export default SearchBox;
