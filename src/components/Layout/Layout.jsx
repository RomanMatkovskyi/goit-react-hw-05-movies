import { NavLink, Outlet } from 'react-router-dom';
import { Header, Navigation } from './Layout.styled';
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
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
