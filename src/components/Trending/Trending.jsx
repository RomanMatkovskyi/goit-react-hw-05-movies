import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Trending = () => {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDVhMmVmOTBkZWY1YzMzZDRhMzFkMGRhMDViMDE1MCIsInN1YiI6IjY0ZjBiYjU5Y2FhNTA4MDEwYWU2YWUyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.68fXrEUL_FZnMg6SyMTGJwfTB01TSdh9bAAu1u2Pz14',
      },
    };

    fetch(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      options
    )
      .then(response => response.json())
      .then(response => {
        setTrends(response.results);
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <ul className="trendList">
        {trends.map(trend => {
          return (
            <li className="trendItem" key={trend.id} id={trend.id}>
              <Link to={`/movies/${trend.id}`}>
                <h2>{trend.title ? trend.title : trend.name}</h2>
                <img
                  src={`https://image.tmdb.org/t/p/w500${trend.poster_path}`}
                  alt={trend.title ? trend.title : trend.name}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Trending;
