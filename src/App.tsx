import { LoginPage } from 'pages/Login';
import React from 'react';
import { auth } from 'services/firebaseConfig';

export const App = () => {
  return (
    <React.Fragment>
      {auth.currentUser ? <h1>Logado com sucesso</h1> : <LoginPage />}
    </React.Fragment>
  );
}