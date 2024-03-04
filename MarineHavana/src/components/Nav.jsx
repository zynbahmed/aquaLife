import { NavLink, useLocation } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  const location = useLocation()

  let navbarClass = ''
  let headerClass = ''

  if (location.pathname === '/') {
    navbarClass = 'home-navbar'
    headerClass = 'header'
  } else if (location.pathname === '/About') {
    navbarClass = 'about-navbar'
    headerClass = 'header2'
  } else if (location.pathname === '/register') {
    navbarClass = 'about-navbar'
    headerClass = 'header2'
  } else if (location.pathname === '/activities') {
    navbarClass = 'about-navbar'
    headerClass = 'header2'
  }
  let userOptions
  if (user) {
    userOptions = (
      <nav className={`nav-link ${headerClass}`}>
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
          <NavLink to="/cart" className={`nav-link ${navbarClass}`}>
            Cart
          </NavLink>
          <NavLink onClick={handleLogOut} to="/">
            Logout
          </NavLink>
        </div>
      </nav>
    )
  }
  const publicOptions = (
    <nav className={`nav-link ${headerClass}`}>
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
