import { Route, Routes, NavLink, Outlet } from 'react-router-dom';
import Trending from './Trending/Trending';
import ChoosenMovie from './ChoosenMovie/ChoosenMovie';
import Cast from './ChoosenMovie/Cast';

export const App = () => {
  return (
    <div className="container">
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/home" element={<Trending />} />
        <Route
          path="/movies"
          element={
            <div>
              <h1> AT MOVIE PAGE</h1>
              <Outlet />
            </div>
          }
        >
          <Route path=":movieId" element={<ChoosenMovie />}>
            <Route path="cast" element={<Cast />} />
          </Route>
        </Route>
        <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
      </Routes>
    </div>
  );
};
