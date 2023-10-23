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
    background-color: #7c767d;
    
    border: 3px solid #ffffff;
  }

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

export const ToolTipCss = styled.div`
  /* Tooltip styles */
  position: absolute;
  top: 0;
  left: 115%;
  background: var(--outgoing-chat-border);
  color: var(--outgoing-chat-bg);
  padding: 10px 20px;
  border: 1px solid var(--outgoing-chat-bg);
  border-radius: 5px;
  font-size: 12px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;
  transition: all 0.3s ease-in-out;
  
  box-shadow: 0 0 3px rgba(56, 54, 54, 0.86);
`;

export const OpenSideBarCss = styled.div`
  display: none;

  @media (min-width: 768px) {
    position: absolute;
    top: 10%;
    left: 2%;
    z-index: 200;
    display: flex;
    padding: 4px 12px;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    text-align: center;
    color: var(--outgoing-chat-border);
    width: auto;
	  white-space: nowrap;
    background: var(--outgoing-chat-bg);
    border: 1px solid var(--outgoing-chat-bg);
    border-radius: 6px;
    
    & span {
      width: 16px;
      height: 16px;
      color: var(--outgoing-chat-border);
      position: relative;

  }
 }

  &:hover ${ToolTipCss} {
    opacity: 1;
    visibility: visible;
  }
`;
