import { Route, Routes } from 'react-router-dom';
import Trending from './Trending/Trending';
import ChoosenMovie from './ChoosenMovie/ChoosenMovie';
import Reviews from './ChoosenMovie/Reviews';
import Cast from './ChoosenMovie/Cast';
import Movies from 'pages/Movies';
import Layout from './Layout/Layout';

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
