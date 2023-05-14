import { logIn } from 'components/redux/auth/operations';
import { useDispatch } from 'react-redux';
import style from './allPageStyle.module.css';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor="" className={style.label}>
        Email
      </label>
      <input className={style.input} type="email" name="email" />
      <label className={style.label} htmlFor="">
        Password
      </label>
      <input className={style.input} type="password" name="password" />
      <button className={style.submit_bttn} type="submit">
        Log In
      </button>
    </form>
  );
};
export default Login;
