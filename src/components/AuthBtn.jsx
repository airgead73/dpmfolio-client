import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import LoginBtn from './LoginBtn';
import LogoutBtn from './LogoutBtn';

const AuthBtn = () => {

  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutBtn/> : <LoginBtn/>;

};

export default AuthBtn;

