import { NavLink, Outlet } from 'react-router-dom';
import { Header, Navigation } from './Layout.styled';
import { Suspense } from "react";

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </Navigation>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
          </Suspense>
      </main>
    </>
  );
};

export default Layout;
