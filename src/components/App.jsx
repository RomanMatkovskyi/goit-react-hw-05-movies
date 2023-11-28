import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const ChoosenMovie = lazy(() => import('../pages/ChoosenMovie'));
const Reviews = lazy(() => import('./ChoosenMovie/Reviews'));
const Cast = lazy(() => import('./ChoosenMovie/Cast'));
const Movies = lazy(() => import('pages/Movies'));
const Layout = lazy(() => import('./Layout/Layout'));

export const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
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
