import styled from 'styled-components';

export const ChatContainerCss = styled.div`
  overflow: auto;
  color: #d9d9e3;
  min-width: 320px;
  padding: 35px 6px;
  margin-bottom: 50px;
  align-items: flex-start;
  position: relative;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8f54a0;
    
    border: 3px solid #ffffff;

  @media (min-width: 7250px) {
    margin-bottom: 250px;
  }
`;

export const BtnBox = styled.div`
  margin-left: 0;

  @media (min-width: 768px) {
    margin-left: 300px;
    margin-right: 90px;
  }

  @media (min-width: 1200px) {
    margin-left: 344px;
    margin-right: 144px;
  }
`;

export const ChatCss = styled.div`
  display: flex;
  // flex-direcyion: column;
  padding: 15px 10px;
  margin-bottom: 20px;
  justify-content: center;
  border-radius: 10px;
  align-items: flex-start;
  font-size: 14px;
  overflow: auto;
`;

export const OutgoingMessageCss = styled(ChatCss)`
  background: var(--outgoing-chat-bg-dark);
  border: 1px solid var(--outgoing-chat-border);
  // margin-left: 250px;
`;

export const IncomingMessageCss = styled(ChatCss)`
  background: var(--placeholder-color);
  color: var(--outgoing-chat-bg-dark);
  border: 1px solid var(--incoming-chat-border);
  // margin-right: 250px;
`;

export const OpenSideBarCss = styled.div`
  display: none;

  @media (min-width: 767px) {
   position: absolute;
  top: 10%;
  left: 2%;
  z-index: 200;
  display: flex;
  height: 40px;
  padding: 4px 12px;

  flex-direction: row;
  gap: 12px;
  align-items: center;
  text-align: center;
  color: var(--outgoing-chat-border);
  cursor: pointer;
  background: var(--outgoing-chat-bg);
  border: 1px solid var(--outgoing-chat-bg);
  border-radius: 6px;
  & span {
    width: 16px;
    height: 16px;
    color: var(--outgoing-chat-border);
  
  }
  
`;
