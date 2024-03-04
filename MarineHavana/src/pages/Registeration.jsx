import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterUser } from '../services/Auth';

const Registration = () => {
  let navigate = useNavigate();
  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
    });

    setFormValues(initialState);

    // navigate('/Login');
  };

  return (
    <div className="background-image">
    <section id="update-form">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            value={formValues.name}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={handleChange}
            value={formValues.email}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            value={formValues.password}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
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
          Register
        </button>
      </form>
    </section>
    </div>
  );
};

export default Registration;