import styled from 'styled-components';

export const TypingBoxCss = styled.div`
  position: fixed;
  bottom: 4%;
  left: 3%;
  min-width: 320px;
  display: flex;
  justify-content: center;
  background: var(--outgoing-chat-bg);
  border: transporent;

  @media (min-width: 768px) {
    min-width: 492px;
    left: 35%;
  }
  @media (min-width: 1200px) {
    min-width: 1147px;
  }
`;
export const TypingContentCss = styled.div`
  display: flex;
  min-width: 320px;
  width: 100%;
  align-items: center;
  position: relative;

  & span {
    position: absilut;
    width: 50px;
    height: 50px;
    display: flex;
    border-radius: 4px;
    font-size: 1.35rem;
    align-items: center;
    justify-content: center;
    color: var(--icon-color);
  }
  // @media (min-width: 769px) {
  //   min-width: 492px;
  // }
  // @media (min-width: 1200px) {
  //   min-width: 1147px;
  // }
`;

export const TypingTextareaCss = styled.div`
  display: flex;
  position: relative;
`;

export const TextareaCss = styled.textarea`s
    resize: none;
    height: 50px;
    width: 100%;
    border: none;
    padding: 10px 20px 10px 12px;
    color: var(--text-color);
    font-size: 1rem;
    border-radius: 4px;
    max-height: 200px;
    overflow-y: hidden;
    
    background: var(--incoming-chat-bg);
    outline: 1px solid var(--incoming-chat-border);
  }
  & textarea::placeholder {
    color: var(--placeholder-color);
  }
  & textarea:valid ~ span {
    visibility: visible;
  }

  @media (min-width: 769px) {
    
    max-height: 250px;
    padding: 15px 45px 15px 20px;
    overflow-y: auto;
  }
 
`;

export const SpanCss = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  visibility: hidden;
`;

export const TypingControlsCss = styled.div`
  display: flex;
  & span {
    margin-left: 7px;
    font-size: 1.4rem;
    background: var(--incoming-chat-bg);
    outline: 1px solid var(--incoming-chat-border);
  }
  &span:hover {
    background: var(--icon-hover-bg);
  }
`;

export const TypingButtonCss = styled.span`
  user-select: none;
  cursor: pointer;
  display: flex;
  height: 40px;
  padding: 4px 12px;
  margin-left: 8px;
  flex-direction: row;

  align-items: center;
  text-align: center;
  color: var(--outgoing-chat-bg);
  cursor: pointer;
  background: var(--incoming-chat-bg);
  border: 1px solid var(--icon-color);
  border-radius: 6px;

  @media (max-width: 768px) {
    font-size: 1.25rem !important;
  }
`;

// .default-text {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   height: 70vh;
//   padding: 0 10px;
//   text-align: center;
//   color: var(--text-color);
// }
// .default-text h1 {
//   font-size: 3.3rem;
// }
// .default-text p {
//   margin-top: 10px;
//   font-size: 1.1rem;
// }
//
// .chat .chat-content {
//   display: flex;
//   max-width: 1200px;
//   width: 100%;
//   align-items: flex-start;
//   justify-content: space-between;
// }
// span.material-symbols-rounded {
//   user-select: none;
//   cursor: pointer;
// }
// .chat .chat-content span {
//   cursor: pointer;
//   font-size: 1.3rem;
//   color: var(--icon-color);
//   visibility: hidden;
// }
// .chat:hover .chat-content:not(:has(.typing-animation), :has(.error)) span {
//   visibility: visible;
// }
// .chat .chat-details {
//   display: flex;
//   align-items: center;
// }
// .chat .chat-details img {
//   width: 35px;
//   height: 35px;
//   align-self: flex-start;
//   object-fit: cover;
//   border-radius: 2px;
// }
// .chat .chat-details p {
//   white-space: pre-wrap;
//   font-size: 1.05rem;
//   padding: 0 50px 0 25px;
//   color: var(--text-color);
//   word-break: break-word;
// }
// .chat .chat-details p.error {
//   color: #e55865;
// }
// .chat .typing-animation {
//   padding-left: 25px;
//   display: inline-flex;
// }
// .typing-animation .typing-dot {
//   height: 7px;
//   width: 7px;
//   border-radius: 50%;
//   margin: 0 3px;
//   opacity: 0.7;
//   background: var(--text-color);
//   animation: animateDots 1.5s var(--delay) ease-in-out infinite;
// }
// .typing-animation .typing-dot:first-child {
//   margin-left: 0;
// }
// @keyframes animateDots {
//   0%,44% {
//     transform: translateY(0px);
//   }
//   28% {
//     opacity: 0.4;
//     transform: translateY(-6px);
//   }
//   44% {
//     opacity: 0.2;
//   }
// }
//
//
// }
// .
// .typing-controls {
//
// }
// .typing-controls span {
//   margin-left: 7px;
//   font-size: 1.4rem;
//   background: var(--incoming-chat-bg);
//   outline: 1px solid var(--incoming-chat-border);
// }
// .typing-controls span:hover {
//   background: var(--icon-hover-bg);
// }
// /* Reponsive Media Query */
// @media screen and (max-width: 600px) {
//   .default-text h1 {
//     font-size: 2.3rem;
//   }
//   :where(.default-text p, textarea, .chat p) {
//     font-size: 0.95rem!important;
//   }
//   .chat-container .chat {
//     padding: 20px 10px;
//   }
//   .chat-container .chat img {
//     height: 32px;
//     width: 32px;
//   }
//   .chat-container .chat p {
//     padding: 0 20px;
//   }
//   .chat .chat-content:not(:has(.typing-animation), :has(.error)) span {
//     visibility: visible;
//   }
//   .typing-container {
//     padding: 15px 10px;
//   }
//   .typing-textarea textarea {
//     height: 45px;
//     padding: 10px 40px 10px 10px;
//   }
//   .typing-content span {
//     height: 45px;
//     width: 45px;
//     margin-left: 5px;
//   }
//   span.material-symbols-rounded {
//     font-size: 1.25rem!important;
//   }
// }
