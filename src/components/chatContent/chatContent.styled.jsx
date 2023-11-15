import styled from 'styled-components';

export const ChatWrap = styled.div`
  display: block;
  position: relative;
  padding-top: 50px;

  /* z-index:1; */
`;

export const ChatContainerCss = styled.div`
  overflow: auto;
  color: #d9d9e3;
  min-width: 320px;
  padding: 25px 8px;
  margin-bottom: 50px;
  margin-left: 0;
  margin-right: 0;
  align-items: flex-start;
  position: relative;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #7c767d;

    border: 3px solid #ffffff;
  }

  @media (min-width: 768px) {
    margin-bottom: 250px;
  }
`;

export const BtnBox = styled.div`
  //   margin-right: 0;

  @media (min-width: 768px) {
    margin-left: 275px;
    margin-right: 244px;
  }

  @media (min-width: 1200px) {
    margin-left: 260px;
    margin-right: 360px;
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
  background: rgba(5, 25, 55, 1);
  color: #fff;
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
  right: 117%;
  /* background: var(--outgoing-chat-border); */
  background: #051937;

  color: var(--outgoing-chat-bg);
  padding: 10px 20px;
  border: 1px solid inherit;
  border-radius: 5px;
  font-size: 12px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;
  transition: all 0.3s ease-in-out;

  box-shadow: 0 0 3px rgba(56, 54, 54, 0.86);
`;

export const OpenUploadSectionCss = styled.div`
  display: none;

  @media (min-width: 768px) {
    position: absolute;
    top: 12%;
    right: 2%;
    /* z-index: 200; */
    z-index: 2; // igor
    display: flex;
    padding: 8px 10px;
    flex-direction: row;
    align-items: center;
    text-align: center;
    color: rgba(5, 25, 55, 1);
    /* color: var(--outgoing-chat-bg); */
    width: auto;
    white-space: nowrap;
    /* background: var(--outgoing-chat-bg); */
    /* background: inherit; */
    border: 1px solid var(--outgoing-chat-bg);
    border-radius: 6px;

    & span {
      width: 16px;
      height: 16px;
      /* color: var(--outgoing-chat-bg); */
      position: relative;
    }

    &:hover {
      background: var(--outgoing-chat-bg);
    }
  }

  &:hover ${ToolTipCss} {
    opacity: 1;
    visibility: visible;
  }
`;
