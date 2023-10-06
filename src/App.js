// import { useState } from "react";
import { WrapperCss, WrapperChatCss } from "./App.styled.jsx";
import { Navigation } from "./components/navigation/navigation.jsx";
import { TypingBox } from "./components/typingBox/typingBox.jsx";
import { SideBar } from "./components/sidebar/sideBar.jsx";
import { ChatContainer } from "./components/chatContainer/chatContainer.jsx";

export const App = () => {
  return (
    <>
      <WrapperCss>
        <SideBar />
        <WrapperChatCss>
          <Navigation />
          <ChatContainer />
          <TypingBox />
        </WrapperChatCss>
      </WrapperCss>
    </>
  );
};
