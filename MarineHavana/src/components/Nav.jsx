import { NavLink, useLocation } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  const location = useLocation()

  let navbarClass = ''

  if (location.pathname === '/') {
    navbarClass = 'home-navbar'
  } else if (location.pathname === '/About') {
    navbarClass = 'about-navbar'
  } else if (location.pathname === '/Activities') {
    navbarClass = 'activities-navbar'
  }
  let userOptions
  if (user) {
    userOptions = (
      <nav className="header">
        <div className="Nav-text">
          <NavLink to="/" className={`nav-link ${navbarClass}`}>
            Home
          </NavLink>
          <NavLink to="/Profile" className={`nav-link ${navbarClass}`}>
            Profile
          </NavLink>
          <NavLink to="/activities" className={`nav-link ${navbarClass}`}>
            Activities
          </NavLink>
          <NavLink to="/About" className={`nav-link ${navbarClass}`}>
            About
          </NavLink>
          <NavLink onClick={handleLogout} to="/Home">
            Logout
          </NavLink>
        </div>
      </nav>
    )
  }
  const publicOptions = (
    <nav className="header">
      <div className="Nav-text">
        <NavLink exact to="/" className={`nav-link ${navbarClass}`}>
          Home
        </NavLink>
        <NavLink to="/About" className={`nav-link ${navbarClass}`}>
          About
        </NavLink>

        <NavLink to="/register" className={`nav-link ${navbarClass}`}>
          Registration
        </NavLink>

        <NavLink to="/login" className={`nav-link ${navbarClass}`}>
          Login
        </NavLink>
      </div>
    </nav>
  )
  return (
    <header>
      <nav>{user ? userOptions : publicOptions}</nav>
    </header>
  )
}

export default Nav
