import { NavLink } from 'react-router-dom'

const Nav = () => {

  return (
    <header>
      <nav className="header">
      <div className="Nav-text">
      <NavLink to='/' className="nav-link">Home</NavLink>
    <NavLink to='/About' className="nav-link">About</NavLink>
    <NavLink to='/Activities' className="nav-link">Activities</NavLink>  
    <NavLink to='/Registeration' className="nav-link">Registration</NavLink>
    <NavLink to='/Profile' className="nav-link">Profile</NavLink>
    <NavLink to='/Login' className="nav-link">Login</NavLink>
      </div>
    </nav>
    </header>
  )
}

export default Nav
