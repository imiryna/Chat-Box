import React from 'react';
import {
  ChatContainerCss,
  IncomingMessageCss,
  OutgoingMessageCss,
  OpenSideBarCss,
  BtnBox,
  // ChatCss,
  // AvatarCss,
} from './chatContainer.styled';

export const ChatContainer = ({ messagesList, changeShowModal }) => {
  const openModal = () => {
    changeShowModal(true);
  };
  return (
    <ChatContainerCss>
      <BtnBox>
        <OpenSideBarCss>
          <span onClick={openModal} data-title='Open sidebar'>&#128386;</span>
        </OpenSideBarCss>
        {messagesList.map(message => (
          <MessageChat
            author={message.author}
            key={message.messageId}
            text={message.text}
            dateTime={message.timestamp}
          />
        ))}
      </BtnBox>
    </ChatContainerCss>
  );
};

const MessageChat = ({ author, id, text, dateTime }) => {
  switch (author) {
    case 'user':
      return (
        <OutgoingMessageCss id={id}>
          <div className="chat-info">
            {/* img with logo> */}
            <p>You: {text}</p>
          </div>
        </OutgoingMessageCss>
      );

    case 'openai':
      return (
        <IncomingMessageCss id={id}>
          <div className="chat-info">
            <p>ChatGPT: {text}</p>
          </div>
        </IncomingMessageCss>
      );
    default:
      console.log('wrong user name');
  }
};
