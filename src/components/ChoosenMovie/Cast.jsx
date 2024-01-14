import { useState, useEffect } from 'react';
import { options } from '../verification/verification';
import { useParams } from 'react-router-dom';
import {
  CastList,
  ActorFoto,
  CastItem,
  ActorName,
  ActorRole,
} from './Cast.styled';

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
      })
      .catch(err => console.error(err));
  }, [movieId]);
  return (
    <CastList>
      {cast.length !== 0 &&
        cast.map(actor => {
          return (
            <CastItem key={actor.id}>
              <ActorFoto
                src={
                  actor.profile_path &&
                  `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                }
                alt="photo not available"
                width={150}
              />
              <ActorName>{actor.name}</ActorName>
              <ActorRole>Character: {actor.character}</ActorRole>
            </CastItem>
          );
        })}
    </CastList>
  );
};

export default Cast;
