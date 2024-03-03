import { NavLink, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();

  let navbarClass = '';

  if (location.pathname === '/') {
    navbarClass = 'home-navbar';
  } else if (location.pathname === '/About') {
    navbarClass = 'about-navbar';
  } else if (location.pathname === '/Activities') {
    navbarClass = 'activities-navbar';
  }
  return (
    <header>
      <nav className="header">
        <div className="Nav-text">
          <NavLink exact to="/" className={`nav-link ${navbarClass}`}>Home</NavLink>
          <NavLink to="/About" className={`nav-link ${navbarClass}`}>About</NavLink>
          <NavLink to="/Activities" className={`nav-link ${navbarClass}`}>Activities</NavLink>
          <NavLink to="/register" className={`nav-link ${navbarClass}`}>Registration</NavLink>
          <NavLink to="/Profile" className={`nav-link ${navbarClass}`}>Profile</NavLink>
          <NavLink to="/login" className={`nav-link ${navbarClass}`}>Login</NavLink>
          <NavLink to="/creategame" className={`nav-link ${navbarClass}`}>game</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Nav;