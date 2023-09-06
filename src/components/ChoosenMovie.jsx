import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ChoosenMovie = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();
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
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => {
        setMovieInfo(response);
        console.log(response);
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <>
      <h2>{movieInfo.original_title}</h2>
      <img
        className="choosenbookimg"
        src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
        alt={movieInfo.title ? movieInfo.title : movieInfo.name}
      />
      <button
        type="button"
        onClick={() => {
          console.log(movieInfo.original_title);
        }}
      >
        SHOW STATE
      </button>
    </>
  );
};

export default ChoosenMovie;
