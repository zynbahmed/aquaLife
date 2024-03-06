import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { RegisterUser } from "../services/Auth"

const Registration = () => {
  let navigate = useNavigate()
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
    })

    setFormValues(initialState)

    navigate("/Login")
  }

  return (
    <div className="background-image">
      <section id="update-form">
        <h1 class="account-title">Create Your Account</h1>
        <p class="account-description">
          Enter your name, email, and password to create your account
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name"></label>
            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              onChange={handleChange}
              value={formValues.name}
              required
            />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              onChange={handleChange}
              value={formValues.email}
              required
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              onChange={handleChange}
              value={formValues.password}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword"></label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              onChange={handleChange}
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
            type="submit"
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Create Account
          </button>
        </form>
      </section>
    </div>
  )
}

export default Registration
