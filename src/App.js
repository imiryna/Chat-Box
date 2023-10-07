import { useState, useEffect } from "react";
import { WrapperCss, WrapperChatCss } from "./App.styled.jsx";
import { Navigation } from "./components/navigation/navigation.jsx";
import { TypingBox } from "./components/typingBox/typingBox.jsx";
import { SideBar } from "./components/sidebar/sideBar.jsx";
import { ChatContainer } from "./components/chatContainer/chatContainer.jsx";

/** Stored message format:
 * {text: ...,
 * author: user || openAI,
 * timestamp: ...,}
 */
export const App = () => {
  const [messageStack, setMessageStack] = useState([]);

  const addToMessageStack = (newMessage) => {
    const newStack = [...messageStack, newMessage];
    setMessageStack(newStack);
  };

  useEffect(() => {
    console.log(messageStack);
  }, [messageStack]);

  return (
    <>
      <div>
        <WrapperCss>
          <SideBar />
          <WrapperChatCss id="wrapper">
            <Navigation />
            <ChatContainer messagesList={messageStack} />
            <TypingBox addMessage={addToMessageStack} />
          </WrapperChatCss>
        </WrapperCss>
      </div>
    </>
  );
};
