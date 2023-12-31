import styled from 'styled-components';

export const DocumentComtCss = styled.div`
  display: ${props => props.showmodal || 'flex'};
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  padding: 75px 22px 10px 14px;
  width: 90vw;
  height: 100vh;
  background: var(--outgoing-chat-bg);
  z-index: 2;
  overflow: hidden;

  @media (min-width: 768px) {
    /* height: 100vh; */
    width: 344px;
    display: ${props => props.showmodal || 'flex'};
    /* background: var(--outgoing-chat-border); */
  }

  /* display: ${props => props.showmodal || 'flex'}; */
`;
export const ToolTipCss = styled.div`
  position: absolute;
  top: 11%;
  right: 102%;
  background: #051937;
  color: var(--outgoing-chat-bg);
  padding: 10px 20px;
  font-size: 12px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 3px rgba(56, 54, 54, 0.86);
  z-index: 6;
  width: auto;
  white-space: nowrap;
  border: 1px solid inherit;
  border-radius: 6px;
`;

export const ButtonBoxCss = styled.div`
  display: flex;
  height: 36px;
  width: 38px;
  margin-bottom: 10px;
  padding: 4px 10px;
  flex-direction: row;
  align-items: center;
  text-align: center;
  white-space: nowrap;
  color: var(--outgoing-chat-bg);
  background: inherit;
  border-radius: 6px;
  background: var(--placeholder-color);
  border: 1px solid var(--placeholder-color);

  /* border: 1px solid var(--outgoing-chat-bg); */

  &:hover {
    background: var(--outgoing-chat-bg);
    border: 1px solid var(--outgoing-chat-bg);
  }

  // hover to show tooltip
  &:hover ${ToolTipCss} {
    opacity: 1;
    visibility: visible;
  }

  & span {
    width: 16px;
    height: 16px;
    color: rgba(5, 25, 55, 1);
    position: relative;
  }

  & p {
    font-size: 12px;
    color: var(--outgoing-chat-bg);
    margin-right: 60px;
  }
`;

export const ListDocWrapCss = styled.div`
  background: var(--outgoing-chat-bg);
  height: 300px;
  overflow-y: auto;
`;

export const UploadBoxCss = styled.div`
  display: flex;
`;
