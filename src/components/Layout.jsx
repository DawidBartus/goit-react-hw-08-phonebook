import { Suspense } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from './redux/auth/operations';
import { useEffect } from 'react';
import style from './Layout.module.css';

const Layout = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();

  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <>
      <div className={style.container}>
        <header className={style.headerStyle}>
          {location.pathname === '/' && (
            <div className={style.mainPageMenu}>
              <h3>Hi, how are you?</h3>
              <span className={style.pageLinkHolder}>
                <p>If you are new here, fell free to create an accont:</p>
                <Link className={style.pageLink} to="/register">
                  Register here
                </Link>
              </span>
              <span className={style.pageLinkHolder}>
                <p>Or log in if you have one:</p>
                <Link className={style.pageLink} to="/login">
                  Log in here
                </Link>
              </span>
            </div>
          )}

          {location.pathname === '/login' && (
            <span className={style.marginLeft}>
              <h3>Hi</h3> <p className={style.headerParam}>Are you new?</p>
              <Link className={style.pageLink} to="/register">
                Register here
              </Link>
            </span>
          )}

          {location.pathname === '/register' && (
            <span className={style.marginLeft}>
              <h3>Hi</h3>
              <p className={style.headerParam}>If you have an account</p>
              <Link className={style.pageLink} to="/login">
                Log in here
              </Link>
            </span>
          )}

          {isLoggedIn && (
            <>
              <span className={style.menuNavigate}>
                <span>
                  <h3>Hi</h3>
                  <p>{user.name}</p>
                </span>
                <button
                  className={style.logOutBttn}
                  type="button"
                  onClick={() => dispatch(logOut())}
                >
                  Log out
                </button>
              </span>
            </>
          )}
        </header>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
