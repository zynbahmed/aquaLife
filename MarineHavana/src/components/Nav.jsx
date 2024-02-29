import { NavLink } from 'react-router-dom'

const Nav = () => {

  return (
    <header>
      <nav className="header">
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/About'>About</NavLink>
        <NavLink to='/Activities'>Activities</NavLink>  
        <NavLink to='/Registeration'>Registeration</NavLink>
        <NavLink to='/Profile'>Profile</NavLink>
        <NavLink to='/Login'>Login</NavLink>
      </div>
    </nav>
    </header>
  )
}

export default Nav
