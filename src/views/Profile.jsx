import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {

  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div>
      <h2>profile</h2>
      <div>
        <img src={picture} alt="Profile" title="Profile" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
      <div>
        <pre>
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default Profile;
