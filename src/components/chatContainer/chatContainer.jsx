import React from 'react';
import {
  ChatContainerCss,
  IncomingMessageCss,
  OutgoingMessageCss,
} from './chatContainer.styled';

export const ChatContainer = ({ messagesList }) => {
  return (
    <ChatContainerCss>
      {messagesList.map(message => (
        <MessageChat
          author={message.author}
          key={message.messageId}
          text={message.text}
          dateTime={message.timestamp}
        />
      ))}
    </ChatContainerCss>
  );
};

const MessageChat = ({ author, id, text, dateTime }) => {
  switch (author) {
    case 'user':
      return (
        <OutgoingMessageCss id={id}>
          <p>You:</p>
          <p>{text}</p>
          <p>{dateTime}</p>
        </OutgoingMessageCss>
      );

    case 'openai':
      return (
        <IncomingMessageCss id={id}>
          <p>ChatGPT:</p>
          <p>{text}</p>
          <p>{dateTime}</p>
        </IncomingMessageCss>
      );
  }
};
