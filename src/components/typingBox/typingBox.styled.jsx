import styled from 'styled-components';

export const TextareaContainerCss = styled.div`
  position: fixed;
  bottom: 4%;
  left: 0;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 768px) {
    left: 264px;
    width: 40%;
  }

  @media (min-width: 1200px) {
    left: 304px;
    width: 50%;
  }
`;
export const SpanCss = styled.span`
  color: #7c767d;
  margin-right: 20px;
`;

export const TextareaCss = styled.textarea`
  resize: none;
  width: 100%;
  padding: 10px;
  background-color: #f0f0f0;

  border-top: 1px solid var(--icon-color);
  color: var(--outgoing-chat-bg-dark);
  border-radius: 6px;
  background: var(--outgoing-chat-bg);
  box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);
  border-color: transparent;
  border: inheret;
  outline: none;

  & :hover {
    outline: var(--incoming-chat-border);
  }

  & textarea::placeholder {
    color: var(--placeholder-color);
    font-size: 12px;
  }
  & textarea:valid ~ span {
    visibility: visible;
  }

  /* Optional styles for the text inside the textarea */
  & textarea {
    width: 100%;
    box-sizing: border-box;
  }
`;

export const TypingButtonCss = styled.span`
  position: absolute;
  bottom: 10px; /* Adjust the distance from the bottom as needed */
  right: 7px; /* Adjust the distance from the right as needed */
  background: inherit;

  color: var(--outgoing-chat-bg-dark);
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;

  & hover {
    background: var(--placeholder-color);
    box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);
  }
`;
