import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { NavBar, Loading } from './components';
import { ExternalApi, Home, Profile } from './views';
import ProtectedRoutes from './auth/protected-route';
import React from 'react';

function App() {
  const { isLoading } = useAuth0();
  
  if(isLoading) {
    return <Loading/>
  }

  return (

    <React.Fragment>
      <NavBar/>
      <main className='container'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/external" element={<ExternalApi/>} />
        </Route>
      </Routes>
      </main>
    </React.Fragment>
 
  );
}

export default App;
