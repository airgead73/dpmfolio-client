import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { NavBar, Loading } from './components';
import { ExternalApi, Home, Profile } from './views';
import ProtectedRoutes from './auth/protected-route';

function App() {
  const { isLoading } = useAuth0();
  
  if(isLoading) {
    return <Loading/>
  }

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/external" element={<ExternalApi/>} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
