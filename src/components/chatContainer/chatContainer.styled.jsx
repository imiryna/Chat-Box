import styled from "styled-components";

export const ChatContainerCss = styled.div`
  overflow-y: auto;
  max-height: 100vh;
  padding-bottom: 150px;
  display: flex;

  & textarea::-webkit-scrollbar {
    width: 6px;
  }
  & textarea::-webkit-scrollbar-track {
    background: var(--icon-hover-bg);
    border-radius: 25px;
  }
  & textarea::-webkit-scrollbar-thumb {
    background: var(--icon-color);
    border-radius: 25px;
  }
`;

//chat-container .chat {
//   padding: 25px 10px;
//   display: flex;
//   justify-content: center;
//   color: var(--text-color);
// }
// .chat-container .chat.outgoing {
//   background: var(--outgoing-chat-bg);
//   border: 1px solid var(--outgoing-chat-border);
// }
// .chat-container .chat.incoming {
//   background: var(--incoming-chat-bg);
//   border: 1px solid var(--incoming-chat-border);
// }
