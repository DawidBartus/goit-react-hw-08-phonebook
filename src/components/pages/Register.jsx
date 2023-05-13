import { register } from 'components/redux/auth/operations';
import React from 'react';
import { useDispatch } from 'react-redux';

const container = { color: 'white', display: 'flex', flexDirection: 'column' };
const form = {
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  padding: '15px',
  gap: '20px',
};

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    console.log(form.elements.username.value);
    console.log(form.elements.email.value);
    console.log(form.elements.password.value);
    dispatch(
      register({
        name: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };

  return (
    <div style={container}>
      <form action="" style={form} autoComplete="off" onSubmit={handleSubmit}>
        <label>
          Your unique login
          <input type="text" name="username" placeholder="Username" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input type="password" name="password" placeholder="Password" />
        </label>
        <button type="submit">Zarejestruj się</button>
      </form>
    </div>
  );
};

export default Register;
