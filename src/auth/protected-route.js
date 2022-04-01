import { Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function ProtectedRoutes() {

  const { isAuthenticated, loginWithRedirect, loading } = useAuth0();
  if(loading) {
    return <div>loading...</div>
  }
  return isAuthenticated ? <Outlet/> : loginWithRedirect()
}

export default ProtectedRoutes;