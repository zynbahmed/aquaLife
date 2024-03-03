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
    // await LoginUser({
    //   email: formValues.email,
    //   password: formValues.password
    // })

    // setFormValues(initialState)

    navigate('/')
  }
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          required
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
       <div class="button-container">
        <button type="submit">Login</button>
        <Link to="/register">
          <button type="button">Register</button>
        </Link>
        </div>
      </form>
    </section>
  )
}

export default Login
