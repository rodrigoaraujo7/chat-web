// react
import * as React from 'react';

// firebase
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'services/firebaseConfig';

// pages
import { ChatPage, LoginPage } from 'pages';

export const App = () => {
  const [user] = useAuthState(auth)

  return (
    <React.Fragment>
      {user ? <ChatPage /> : <LoginPage />}
    </React.Fragment>
  );
}