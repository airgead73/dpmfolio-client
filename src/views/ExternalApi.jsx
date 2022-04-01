import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ExternalApi = () => {
  const [message, setMessage] = useState('');
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const { getAccessTokenSilently } = useAuth0();

  const callBooks = async() => {
    try {

      const response = await fetch("/api/books");
      const responseData = await response.json();

      setMessage(responseData.message);

    } catch(err) {
      setMessage(err.message);
    }
  };

  const callAuthors = async() => {
    try {

      const token = await getAccessTokenSilently();

      const response = await fetch(
        "/api/authors",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const responseData = await response.json();

      setMessage(responseData.message);

    } catch(err) {
      setMessage(err.message);
    }
  };

  return (
    <div>
      <h2>external api</h2>
      <p>
      <button type="button" className="btn btn-primary" onClick={callBooks}>
          Get Books
        </button>        
      </p>
      <p>
      <button type="button" className="btn btn-primary" onClick={callAuthors}>
          Get Authors
        </button>        
      </p>  

      <div>
        {message && (
          <p>{message}</p>
        )}
      </div>    

    </div>
  )

};

export default ExternalApi;