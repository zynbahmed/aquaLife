import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { SignInUser } from '../services/Auth'


//import { LoginUser } from '../services/auth'
const Login = ({setUser}) => {
  let navigate = useNavigate()
  const initialState = {
    email: '',
    password: ''
  }

  const [formValues, setFormValues] = useState(initialState)
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues(initialState)
    setUser(payload)
    

    navigate('/')
  }
  return (
    <div className="background-image2">
    <section id="update-form2">
      <h1 className="account-title">Login</h1>
      <p className="account-description">
          Enter your email and password</p>
        
      <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          required
        />
        </div>
        <div>
        <input
          id="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        </div>
       <div class="button-container">
        <button type="submit">Login</button>
        <div className="register-container">
        <p className="register">No account?</p>
        <Link to="/register" className="register-link">
    Create account
  </Link>
</div>
        </div>
      </form>
    </section>
    </div>
  )
}

export default Login
