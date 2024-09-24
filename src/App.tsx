// react
import * as React from 'react';

// firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'services/firebaseConfig';

// pages
import { LoginPage } from 'pages/Login';

export const App = () => {
  const [user] = useAuthState(auth)

  return (
    <React.Fragment>
      {user ? <h1>Logado com sucesso</h1> : <LoginPage />}
    </React.Fragment>
  );
}