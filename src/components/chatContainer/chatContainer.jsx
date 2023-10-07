import React from "react";
import { ChatContainerCss } from "./chatContainer.styled";

export const ChatContainer = ({ messagesList }) => {
  return <ChatContainerCss>{JSON.stringify(messagesList)}</ChatContainerCss>;
};
