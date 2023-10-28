import React from 'react';
import {
  ContainerCss,
  NavBoxCss,
  NavBoxItemsCss,
  ToolTipCss,
  BoxSt,
  HistiryWrap,
} from './sideBar.styled';
import { TopicChat } from 'components/topicChat/topiсChat';

export const SideBar = ({
  showSidebar,
  toggleSidebar,
  messageStack,
  addChat,
  removeById,
}) => {
  let displayModal;
  if (typeof showSidebar === 'boolean') {
    displayModal = showSidebar ? 'flex' : 'none';
  } else if (typeof showSidebar === 'string') {
    displayModal = showSidebar;
  }

  const generateChatName = listOfName => {
    let defaultName = 'Default';
    let returnName = defaultName;
    let count = 1;
    if (!listOfName.includes(defaultName)) {
      return defaultName;
    }
    while (listOfName.includes(returnName)) {
      returnName = defaultName + count;
      count += 1;
    }
    return returnName;
  };
  const addTopicChat = () => {
    const chatName = generateChatName(messageStack.map(chat => chat.name));
    addChat(chatName);
  };

  const closeModal = () => {
    toggleSidebar(false);
  };
  return (
    <ContainerCss showmodal={displayModal}>
      <BoxSt>
        <NavBoxCss>
          <NavBoxItemsCss onClick={addTopicChat}>
            <span>&#9998;</span>
            <p>New Chat</p>
          </NavBoxItemsCss>
          <NavBoxItemsCss onClick={closeModal} data-title="Close sidebar">
            <span>&#128386;</span>
            <ToolTipCss>Close sidebar</ToolTipCss>
          </NavBoxItemsCss>
        </NavBoxCss>
        <HistiryWrap>
          {messageStack.map(chat => (
            <TopicChat
              key={chat.id}
              chatName={chat.name}
              removeById={removeById}
              chatId={chat.id}
            />
          ))}
        </HistiryWrap>
      </BoxSt>
    </ContainerCss>
  );
};
