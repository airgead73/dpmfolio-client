import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

const container = document.getElementById('app');

const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Router>    
  </React.StrictMode>,  
)
