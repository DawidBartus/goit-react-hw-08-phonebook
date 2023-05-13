import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from './redux/auth/operations';

const style = {
  backgroundColor: '#1C1C1C',
  padding: '10px 10px',
  margin: '10px auto',
  width: '412px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
};
const headerStyle = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-around',
  marginBottom: '30px',
};

const Layout = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();

  return (
    <>
      <div style={style}>
        <header style={headerStyle}>
          {isLoggedIn && <Link to="/contacts">Contacts</Link>}
          <span>
            <h3>Cześć</h3>{' '}
            {isLoggedIn ? user.name : 'Zaloguj się lub zarejestruj ->'}
          </span>
          <span>
            {!isLoggedIn && <Link to="/Login">Log in</Link>}
            {!isLoggedIn && <Link to="/Register">Register</Link>}
            {isLoggedIn && (
              <button type="button" onClick={() => dispatch(logOut())}>
                Log out
              </button>
            )}
          </span>
        </header>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
