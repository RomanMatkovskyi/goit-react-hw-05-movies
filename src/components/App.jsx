import { Route, Routes, NavLink } from 'react-router-dom';
import Trending from './Trending';
import ChoosenMovie from './ChoosenMovie';

export const App = () => {
  return (
    <div className="container">
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/home" element={<Trending />} />
        <Route path="/movies" element={<h1> AT MOVIE PAGE</h1>} />
        <Route path="/movies/:movieId" element={<ChoosenMovie />} />
        <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
      </Routes>
    </div>
  );
};
