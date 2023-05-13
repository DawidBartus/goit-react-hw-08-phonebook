import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';

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
  return (
    <>
      <div style={style}>
        <header style={headerStyle}>
          <Link to="/">Home</Link>
          <p>Cześć</p>
          <span>
            <Link to="/Login">Log in</Link>
            <Link to="/Register">Register</Link>
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
