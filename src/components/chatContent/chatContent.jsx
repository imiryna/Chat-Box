import { useEffect } from 'react';
import {
  ChatContainerCss,
  IncomingMessageCss,
  OutgoingMessageCss,
  BoxMessageCss,
  ChatWrap,
  BtnBox,
} from './chatContent.styled';

import { UploadSection } from 'components/uploadSection/uploadSection';
import Chatbot from '../../images/chatbot.jpg';
import { getCurrentChat } from 'Redux/chatComponentSlice';
import { getMessagesThunk } from 'Redux/chatComponentThunk';
import { useSelector, useDispatch } from 'react-redux';
import { selectMessagesById } from 'Redux/selectors';

export const ChatContent = () => {
  const dispatcher = useDispatch();
  const currentChat = useSelector(getCurrentChat);

  useEffect(() => {
    dispatcher(getMessagesThunk(currentChat));
  }, [dispatcher, currentChat]);

  const messagesList = useSelector(selectMessagesById);

  return (
    <ChatWrap>
      <UploadSection />
      <ChatContainerCss>
        <BtnBox>
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
            <img
              src="../../images/user.jpg"
              alt="avatars"
              width={24}
              height={24}
            />
            <p> {text}</p>
          </BoxMessageCss>
        </OutgoingMessageCss>
      );

    case 'openai':
      return (
        <IncomingMessageCss id={id}>
          <BoxMessageCss>
            <img src={Chatbot} alt="" width={24} height={24} />
            <p> {text}</p>
          </BoxMessageCss>
        </IncomingMessageCss>
      );
    default:
      console.log('wrong user name');
  }
};
