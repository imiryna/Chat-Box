import { useEffect } from 'react';
import {
  ChatContainerCss,
  IncomingMessageCss,
  OutgoingMessageCss,
  BoxMessageCss,
  ChatWrap,
  OpenUploadSectionCss,
  BtnBox,
  ToolTipCss,
} from './chatContent.styled';

import { UploadSection } from 'components/uploadSection/uploadSection';

import { getCurrentChat } from 'Redux/chatComponentSlice';
import { getMessagesThunk } from 'Redux/chatComponentThunk';
import { setUploadVisibility } from 'Redux/modalSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectMessagesById } from 'Redux/selectors';

export const ChatContent = () => {
  const dispatcher = useDispatch();
  const currentChat = useSelector(getCurrentChat);

  const openModal = () => {
    dispatcher(setUploadVisibility(true));
  };

  useEffect(() => {
    dispatcher(getMessagesThunk(currentChat));
  }, [dispatcher, currentChat]);

  const messagesList = useSelector(selectMessagesById);

  return (
    <ChatWrap>
      <UploadSection />
      <ChatContainerCss>
        <BtnBox>
          <OpenUploadSectionCss onClick={openModal} data-title="Open upload">
            <span>&#128386;</span>
            <ToolTipCss>Open upload section</ToolTipCss>
          </OpenUploadSectionCss>
          {messagesList.map(message => (
            <MessageChat
              author={message.author}
              key={message.messageId}
              text={message.text}
            />
          ))}
        </BtnBox>
      </ChatContainerCss>
    </ChatWrap>
  );
};

const MessageChat = ({ author, id, text }) => {
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
