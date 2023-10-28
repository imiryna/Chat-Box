import React from 'react';
import {
  ChatContainerCss,
  IncomingMessageCss,
  OutgoingMessageCss,
  BoxMessageCss,
  ChatWrap,
  // ChatCss,
  // AvatarCss,
} from './chatContainer.styled';
import { UploadSection } from 'components/uploadSection/uploadSection';

export const ChatContainer = ({
  messagesList,
  showUpload,
  changeShowUpload,
}) => {
  return (
    <ChatWrap>
      <UploadSection
        showUpload={showUpload}
        changeShowUpload={changeShowUpload}
      />
      <ChatContainerCss>
        {/* <BtnBox>
        <OpenSideBarCss onClick={openModal} data-title='Open sidebar'>
          <span >&#128386;</span>
          <ToolTipCss>Open sidebar</ToolTipCss>
        </OpenSideBarCss> */}
        {/* {messagesList.map(message => (
          <MessageChat
            author={message.author}
            key={message.messageId}
            text={message.text}
            dateTime={message.timestamp}
          />
        ))} */}
        {/* </BtnBox> */}
      </ChatContainerCss>
    </ChatWrap>
  );
};

const MessageChat = ({ author, id, text, dateTime }) => {
  switch (author) {
    case 'user':
      return (
        <OutgoingMessageCss id={id}>
          <BoxMessageCss>
            <img src="../../images/user.jpg" alt="avatars" />
            <p> {text}</p>
          </BoxMessageCss>
        </OutgoingMessageCss>
      );

    case 'openai':
      return (
        <IncomingMessageCss id={id}>
          <div className="chat-info">
            <img src="../../images/chatbot.jpg" alt="user avatar" />
            <p>ChatGPT: {text}</p>
          </div>
        </IncomingMessageCss>
      );
    default:
      console.log('wrong user name');
  }
};
