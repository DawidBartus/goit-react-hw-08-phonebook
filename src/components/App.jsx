import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Contacts from './pages/Contacts';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { useAuth } from './hooks/useAuth';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
