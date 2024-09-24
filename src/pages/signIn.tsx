import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

import { auth } from 'services/firebaseConfig'

export const SignIn = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth)

  return (
    <>
      {auth.currentUser ? (
        <button onClick={() => auth.signOut()}>Sair</button>
      ) : (
        <button onClick={() => signInWithGoogle()}>Login</button>
      )}
      {auth.currentUser?.displayName}
    </>

  )
}