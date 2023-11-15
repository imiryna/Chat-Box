import React, { useEffect } from 'react';
import {
  BoxSt,
  ContainerCss,
  HistoryWrap,
  NavBoxCss,
  NavBoxItemsCss,
  ToolTipCss,
} from './sideBar.styled';

import { useSelector, useDispatch } from 'react-redux';
import { selectChats } from 'Redux/selectors';
import { getChatsThunk, createChatThunk } from 'Redux/chatComponentThunk';
import { getSidebarVisibility, setSidebarVisibility } from 'Redux/modalSlice';

import { ChatTopic } from 'components/chatTopic/chatTopic';

export const SideBar = () => {
  const showSidebar = useSelector(getSidebarVisibility);
  // calculating state of sidebar (show/hide)
  let displayModal;
  if (typeof showSidebar === 'boolean') {
    displayModal = showSidebar ? 'flex' : 'none';
  } else if (typeof showSidebar === 'string') {
    displayModal = showSidebar;
  }

  // dispatcher for calling thunks
  const dispatcher = useDispatch();
  const chats = useSelector(selectChats);

  // update the list of the chats on component load
  useEffect(() => {
    dispatcher(getChatsThunk());
  }, [dispatcher]);

  /**
   * Generate default chat name based on
   * already listed. Take name "default"
   * and add the first free number to it
   * @param {string} listOfName
   * @returns
   */
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
    const chatName = generateChatName(chats.map(chat => chat.name));
    dispatcher(createChatThunk(chatName));
  };

  const closeSidebar = () => {
    dispatcher(setSidebarVisibility(false));
  };

  return (
    <ContainerCss showmodal={displayModal}>
      <BoxSt>
        <NavBoxCss>
          <NavBoxItemsCss onClick={addTopicChat}>
            <span>&#9998;</span>
            <p>New Chat</p>
          </NavBoxItemsCss>
          <NavBoxItemsCss onClick={closeSidebar} data-title="Close sidebar">
            <span>&#128386;</span>
            <ToolTipCss>Close sidebar</ToolTipCss>
          </NavBoxItemsCss>
        </NavBoxCss>
        <HistoryWrap>
          {chats.map(chat => (
            <ChatTopic key={chat.id} chatName={chat.name} chatId={chat.id} />
          ))}
        </HistoryWrap>
      </BoxSt>
    </ContainerCss>
  );
};
