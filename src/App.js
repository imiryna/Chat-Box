import { useState } from 'react';
import { WrapperCss } from './App.styled.jsx';
import { Navigation } from './components/navigation/navigation.jsx';
import { TypingBox } from './components/typingBox/typingBox.jsx';
import { SideBar } from './components/sidebar/sideBar.jsx';
import { ChatContainer } from './components/chatContainer/chatContainer.jsx';
import { nanoid } from 'nanoid';

/** Stored message format:
 * {text: ...,
 * author: user || openAI,
 * timestamp: ...,}
 */
export const App = () => {
  const [messageStack, setMessageStack] = useState([{
      name:  'Default',
      id: nanoid(),
      message: [],
    },]
    
  );
  // {
  //   text: 'loresdf gbjsdhbck sdjnc jsnvl jbhj bvhbdkcn viherb vijdnc jdhbvhebvu',
  //   author: 'user',
  //   timestamp: '1234567890',
  //   messageId: 'fg45673',
  // },
  // {
  //   text: 'lores dfgb js dhbcksdjn cjsn vljbhj bvhbd kcnvihe rbvijd ncjdhb vhebvu',
  //   author: 'openai',
  //   timestamp: '1234567890',
  //   messageId: 'fg45674',
  // },
  // {
  //   text: 'loresdfgbjsdhbcksdjncjsnvljbhjbvhbdkcnviherbvijdncjdhbvhebvu',
  //   author: 'user',
  //   timestamp: '1234567890',
  //   messageId: 'fg45675',
  // },

  const [showModal, setShowModal] = useState('');

  const addChat = newChatName => {
    setMessageStack([
      ...messageStack,
      {
        name: newChatName,
        id: nanoid(),
        message: [],
      },
    ]);
  };

  const addToMessageStack = newMessage => {
    setMessageStack(messageStack => [...messageStack, newMessage]);
  };
  const changeShowModal = newState => {
    setShowModal(newState);
  };

  const removeById = removedId => {
    
    setMessageStack(messageStack => messageStack.filter(chat => chat.id !== removedId));
  };

  return (
    <>
      <div>
        <WrapperCss>
          <SideBar
            toggleModal={changeShowModal}
            showModal={showModal}
            messageStack={messageStack}
            addChat={addChat}
            removeById={removeById}
          />
        </WrapperCss>
        {/* <WrapperChatCss id="wrapper"> */}
        <Navigation id="nav" changeShowModal={changeShowModal} />
        <ChatContainer
          id="chatcontainer"
          messagesList={messageStack}
          changeShowModal={changeShowModal}
        />
        <TypingBox id="typingbox" addMessage={addToMessageStack} />
        {/* </WrapperChatCss> */}
      </div>
    </>
  );
};
