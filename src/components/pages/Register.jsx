import React from 'react';

const Register = () => {
  return (
    <div style={{ color: 'white', display: 'flex', flexDirection: 'column' }}>
      <form
        action=""
        style={{
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          padding: '15px',
          gap: '20px',
        }}
      >
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
        <input type="email" name="email" id="email" placeholder="Email" />
        <input
          type="password"
          name="passwors"
          id="passwors"
          placeholder="Passwors"
        />
        <button type="submit">Zarejestruj się</button>
      </form>
    </div>
  );
};

export default Register;
