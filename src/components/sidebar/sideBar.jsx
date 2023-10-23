import React from 'react';
import {
  ContainerCss,
  NavBoxCss,
  NavBoxItemsCss,
  ToolTipCss,
  BoxSt,
} from './sideBar.styled';
import { TopicChat } from 'components/topicChat/topiсChat';

export const SideBar = ({ showModal, toggleModal, messageStack, addChat, removeById }) => {
  let displayModal;
  if (typeof showModal === 'boolean') {
    displayModal = showModal ? 'flex' : 'none';
  } else if (typeof showModal === 'string') {
    displayModal = showModal;
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
    toggleModal(false);
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
        {messageStack.map(chat => (
          <TopicChat key={chat.id} chatName={chat.name} removeById={removeById} chatId={chat.id}/>
        ))}
      </BoxSt>
    </ContainerCss>
  );
};
