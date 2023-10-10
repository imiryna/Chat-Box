import { useState } from 'react';
import * as API from '../../services/Api';
import { nanoid } from 'nanoid';

import {
  TextareaCss,
  TypingButtonCss,
  TextareaContainerCss
} from './typingBox.styled';

export const TypingBox = ({ addMessage }) => {
  const [message, setMessage] = useState('');

  const handleOutputMessage = async () => {
    if (message === '') {
      return;
    }
    const inputMessage = message;
    inputReset();
    // add user message to messageStack of App component
    addMessage(createMessageObj(inputMessage, 'user'));

    await API.fetchMessageChat(inputMessage.trim())
      .then(res => {
        const answer = res.choices[0].text.trim();
        addMessage(createMessageObj(answer, 'openai'));
      })
      .catch(error => {
        console.log(error);
      });      
  };
  

  const createMessageObj = (text, author) => {
    return {
      text: text,
      author: author,
      timestamp: Date.now(),
      messageId: nanoid(),
    };
  };
  const inputReset = ()=>{
    setMessage('');
  }

  const getInputValue = e => {
    setMessage(e.target.value);

  };
 
  const handleKeyPressed = e => {
    if (e.key === 'Enter') {
      handleOutputMessage();
    }
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
        <span>&#10147;</span>
      </TypingButtonCss>
    </TextareaContainerCss>
  
   
  );
};
