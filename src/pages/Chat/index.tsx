// react
import * as React from 'react'

// styles
import * as s from './style'

// firebase
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth'
import { auth, databaseApp } from 'services/firebaseConfig'
import { addDoc, collection, limit, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

// assets
import * as icon from 'assets/icons'

export const ChatPage = () => {
  const [user] = useAuthState(auth)
  const [signOut] = useSignOut(auth)

  const messageRef = collection(databaseApp, "messages") // ref db table
  const queryMessages = query(messageRef, orderBy("createdAt"), limit(25))
  const [messages] = useCollectionData(queryMessages)

  const [inputValue, setInputValue] = React.useState<string>('')

  const handleMessage = async (e: any) => {
    e.preventDefault()

    if (inputValue === '') return

    await addDoc(messageRef, {
      text: inputValue,
      uid: auth.currentUser?.uid,
      photoURL: auth.currentUser?.photoURL,
      createdAt: serverTimestamp()
    })

    // clear input
    setInputValue('')
  }

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
          <div className='messages-list'>
            {messages?.map((msg, index) => (
              // TODO: ESTILIZAR OS MENSSAGENS
              <s.Message key={index} $class={msg.uid === auth.currentUser?.uid ? 'primary' : 'secondary'}>
                {msg.text}
              </s.Message>
            ))}
          </div>

          <s.InputContainer onSubmit={(e) => handleMessage(e)}>
            <input
              type="text"
              name="messageInput"
              id="messageInput"
              placeholder='Type your message ...'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button>
              <icon.Send />
            </button>
          </s.InputContainer>
        </s.ConversationBox>
      </s.Chat>
    </s.Container>
  )
}