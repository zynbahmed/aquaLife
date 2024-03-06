import { NavLink, useLocation } from "react-router-dom"

const Nav = ({ user, handleLogOut }) => {
  const location = useLocation()

  let navbarClass = ""
  let headerClass = ""
  let textClass = ""

  if (location.pathname === "/") {
    navbarClass = "home-navbar"
    headerClass = "header"
  } else {
    navbarClass = "about-navbar"
    headerClass = "header2"
    textClass = "header-text"
  }
  let userOptions
  if (user) {
    userOptions = (
      <nav className={`nav-link ${headerClass}`}>
        <div className={`nav-link ${textClass}`}>
          <NavLink to="/" className={`nav-link ${navbarClass}`}>
            Home
          </NavLink>
          {user.userType === "user" && (
            <NavLink to="/Profile" className={`nav-link ${navbarClass}`}>
              Profile
            </NavLink>
          )}
          <NavLink to="/activities" className={`nav-link ${navbarClass}`}>
            Activities
          </NavLink>
          <NavLink to="/About" className={`nav-link ${navbarClass}`}>
            About
          </NavLink>
          {user.userType === "user" && (
            <NavLink to="/cart" className={`nav-link ${navbarClass}`}>
              Cart
            </NavLink>
          )}
          <NavLink
            onClick={handleLogOut}
            to="/"
            className={`nav-link ${navbarClass}`}
          >
            Logout
          </NavLink>
        </div>
      </nav>
    )
  }
  const publicOptions = (
    <nav className={`nav-link ${headerClass}`}>
      <div className={`nav-link ${textClass}`}>
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
