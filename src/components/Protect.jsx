import { Outlet } from "react-router-dom";
import Login from "./Pages/Login";

import React from 'react'


function authUser() {
    const User = {Login : true};
  return User.Login;
}

function Protect() {
    const isAuthUser = authUser();
  return isAuthUser ? <Outlet/> : <Login/>
}

export default Protect