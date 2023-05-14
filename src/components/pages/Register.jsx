import { register } from 'components/redux/auth/operations';
import React from 'react';
import { useDispatch } from 'react-redux';
import style from './allPageStyle.module.css';
import { useState } from 'react';

const initialState = {
  username: '',
  email: '',
  password: '',
};

const Register = () => {
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState(initialState);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setInputValues(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setInputValues(initialState);
    dispatch(
      register({
        name: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={style.container}>
      <form
        action=""
        className={style.form}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label className={style.label} htmlFor="username">
          Name
        </label>
        <input
          className={inputValues.username ? style.inputChanged : style.input}
          type="text"
          name="username"
          id="username"
          onChange={handleInputChange}
        />

        <label className={style.label} htmlFor="email">
          Email
        </label>
        <input
          className={inputValues.email ? style.inputChanged : style.input}
          type="email"
          name="email"
          id="email"
          onChange={handleInputChange}
        />
        <label className={style.label} htmlFor="password">
          Password
        </label>
        <input
          className={inputValues.password ? style.inputChanged : style.input}
          type="password"
          name="password"
          id="password"
          onChange={handleInputChange}
        />
        <button className={style.submit_bttn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
