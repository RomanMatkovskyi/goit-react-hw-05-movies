import { Route, Routes } from 'react-router-dom';
import { lazy } from "react";

// import Trending from './Trending/Trending';
const Trending = lazy(() => import('./Trending/Trending'));

// import ChoosenMovie from './ChoosenMovie/ChoosenMovie';
const ChoosenMovie = lazy(() => import('./ChoosenMovie/ChoosenMovie'));

// import Reviews from './ChoosenMovie/Reviews';
const Reviews = lazy(() => import('./ChoosenMovie/Reviews'));

// import Cast from './ChoosenMovie/Cast';
const Cast = lazy(() => import('./ChoosenMovie/Cast'));

// import Movies from 'pages/Movies';
const Movies = lazy(() => import('pages/Movies'));

// import Layout from './Layout/Layout';
const Layout = lazy(() => import('./Layout/Layout'));

export const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Trending />} />
          <Route
            path="movies"
            element={
              <div>
                <Movies />
              </div>
            }
          />
          <Route path="movies/:movieId" element={<ChoosenMovie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
