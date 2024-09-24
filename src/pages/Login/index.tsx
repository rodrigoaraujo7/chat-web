// firebase
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from 'services/firebaseConfig'

// styles
import * as s from './style'

// assets
import * as icon from 'assets/icons'

export const LoginPage = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth)

  return (
    <s.Container>
      <icon.Logo />
      <h1>Welcome</h1>
      <button onClick={() => signInWithGoogle()}><icon.Google /> Login in With Google</button>
    </s.Container>
  )
}