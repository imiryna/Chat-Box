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
    // add user message to messageStack of App component
    addMessage(createMessageObj(message, 'user'));

    await API.fetchMessageChat(message.trim())
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

  const getInputValue = e => {
    setMessage(e.target.value);
  };
  return (
    
   
    
    <TextareaContainerCss>
      <TextareaCss
        onChange={getInputValue}
        id="chat-input"
        spellCheck="false"
        placeholder="Enter a prompt here"
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
