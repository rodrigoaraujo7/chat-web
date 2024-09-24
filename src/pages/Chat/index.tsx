// styles
import * as s from './style'

// auth
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth'
import { auth } from 'services/firebaseConfig'

// assets
import * as icon from 'assets/icons'

export const ChatPage = () => {
  const [user] = useAuthState(auth)
  const [signOut] = useSignOut(auth)

  return (
    <s.Container>
      <s.Chat>
        <header>
          <h1>Chat</h1>

          <div>
            <button onClick={() => signOut()}><icon.Arrow /> sair</button>
            <img src={user?.photoURL as string} alt="" />
          </div>
        </header>

        <s.ConversationBox>
          <div></div>

          <s.InputContainer>
            <input type="text" name="" id="" placeholder='Type your message ...' />
            <icon.Send />
          </s.InputContainer>
        </s.ConversationBox>
      </s.Chat>
    </s.Container>
  )
}