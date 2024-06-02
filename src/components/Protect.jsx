import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function authUser() {
  const User = { Login: true };
  return User.Login;
}

const Protect = () => {
  const isAuthUser = authUser();
  return isAuthUser ? <Outlet /> : <Navigate to="/" />;
}

export default Protect;
