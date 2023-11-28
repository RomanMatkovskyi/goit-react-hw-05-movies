import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Trending = lazy(() => import('./Trending/Trending'));
const ChoosenMovie = lazy(() => import('../pages/ChoosenMovie'));
const Reviews = lazy(() => import('./ChoosenMovie/Reviews'));
const Cast = lazy(() => import('./ChoosenMovie/Cast'));
const Movies = lazy(() => import('pages/Movies'));
const Layout = lazy(() => import('../pages/Layout'));

export const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Trending />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<ChoosenMovie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
