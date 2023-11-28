import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SearchMovie } from 'services/services-api';

const Trending = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await SearchMovie(null, 'trending_movies');
        setTrends(data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
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
