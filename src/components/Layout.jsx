import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

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
          <p>Cześć</p>
          <span>
            <button>Log in</button>
            <button>Register</button>
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
