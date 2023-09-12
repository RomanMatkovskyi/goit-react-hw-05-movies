import { useState, useEffect } from 'react';
import { options } from '../verification/verification';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => {
        setCast(response.cast.splice(0, 10));
        console.log(response.cast.splice(0, 10));
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <ul>
      {cast.length !== 0 &&
        cast.map(actor => {
          return (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path &&
                  `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                }
                alt=""
                style={{ width: '150px' }}
              />
              <h3>{actor.name}</h3>
              <p>Character: {actor.character}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;
