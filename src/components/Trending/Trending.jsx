import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SearchMovie } from 'services/services-api';
import {
  TrendingTitle,
  TrendingList,
  TrendItem,
  MovieLink,
  MovieTitle,
  MovieImg,
} from './Trending.styled';

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
      <TrendingTitle>Trending today</TrendingTitle>
      <TrendingList>
        {trends.map(trend => {
          return (
            <TrendItem key={trend.id} id={trend.id}>
              <MovieLink to={`/movies/${trend.id}`}>
                <MovieTitle>
                  {trend.title ? trend.title : trend.name}
                </MovieTitle>
                <MovieImg
                  src={`https://image.tmdb.org/t/p/w500${trend.poster_path}`}
                  alt={trend.title ? trend.title : trend.name}
                />
              </MovieLink>
            </TrendItem>
          );
        })}
      </TrendingList>
    </>
  );
};

export default Trending;
