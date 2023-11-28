import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const updateQueryString = name => {
    const nextParams = name !== '' ? { query: name } : {};
    setSearchParams(nextParams);
  };

  const SearchedMovies = event => {
    event.preventDefault();
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
