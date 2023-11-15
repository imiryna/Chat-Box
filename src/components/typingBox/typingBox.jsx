import { useState } from 'react';
import { nanoid } from 'nanoid';

import {
  TextareaCss,
  TypingButtonCss,
  TextareaContainerCss,
  SpanCss,
} from './typingBox.styled';

import { sendMessageThunk } from 'Redux/chatComponentThunk';
import { useDispatch } from 'react-redux';

export const TypingBox = () => {
  const [message, setMessage] = useState('');

  const dispatcher = useDispatch();

  const createMessageObj = (text, author) => {
    return {
      text: text,
      author: author,
      timestamp: Date.now(),
      messageId: nanoid(),
    };
  };
  const inputReset = () => {
    setMessage('');
  };

  const getInputValue = e => {
    setMessage(e.target.value);
  };

  const handleKeyPressed = e => {
    if (e.key === 'Enter') {
      handleOutputMessage();
    }
  };

  const handleOutputMessage = async () => {
    if (message === '') {
      return;
    }
    const inputMessage = message;
    inputReset();
    dispatcher(sendMessageThunk(createMessageObj(inputMessage, 'user')));
  };

  return (
    <TextareaContainerCss>
      <TextareaCss
        onKeyDown={handleKeyPressed}
        onChange={getInputValue}
        id="chat-input"
        spellCheck="false"
        placeholder="Enter a prompt here"
        value={message}
        required
      ></TextareaCss>
      <TypingButtonCss
        onClick={handleOutputMessage}
        id="send-btn"
        className="material-symbols-rounded"
      >
        <SpanCss>&#10148;</SpanCss>
      </TypingButtonCss>
    </TextareaContainerCss>
  );
};
