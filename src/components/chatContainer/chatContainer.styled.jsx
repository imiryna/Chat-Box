import styled from 'styled-components';

export const ChatWrap = styled.div`
  display: block;
  position: relative;
  /* z-index:1; */
`;

export const ChatContainerCss = styled.div`
  overflow: auto;
  color: #d9d9e3;
  min-width: 320px;
  padding: 25px 8px;
  margin-bottom: 50px;
  align-items: flex-start;
  position: relative;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #7c767d;
    
    border: 3px solid #ffffff;
  }

  @media (min-width: 7250px) {
    margin-bottom: 250px;
  }
`;

export const BtnBox = styled.div`
//   margin-right: 0;

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
 
  border-radius: 10px;
  align-items: flex-start;
  font-size: 14px;
  overflow: auto;
`;

export const BoxMessageCss = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: start;
 gap: 20px;
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


