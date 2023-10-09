import styled from 'styled-components';

export const ChatContainerCss = styled.div`
  overflow-y: auto;
  max-height: 100vh;
  margin-left: 244px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & textarea::-webkit-scrollbar {
    width: 6px;
  }
  & textarea::-webkit-scrollbar-track {
    background: var(--icon-hover-bg);
    border-radius: 8px;
  }
  & textarea::-webkit-scrollbar-thumb {
    background: var(--icon-color);
    border-radius: 25px;
  }
`;

const MessageCss = styled.div`
  padding: 25px 10px;
  display: flex;
  width: 100%
  flex-direction: column;
  justify-content: center;
  color: var(--text-color);
  border-radius: 25px;
`;

export const OutgoingMessageCss = styled(MessageCss)`
  background: var(--outgoing-chat-bg-dark);
  border: 1px solid var(--outgoing-chat-border);
`;

export const IncomingMessageCss = styled(MessageCss)`
  background: var(--incoming-chat-bg);
  border: 1px solid var(--incoming-chat-border);
`;
