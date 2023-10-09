import styled from 'styled-components';

export const TypingBoxCss = styled.div`
  min-width: 320px;
  padding: 35px 6px;
  align-items: flex-start;
  // position: relative;

  // position: fixed;
  // bottom: 4%;
  // left: 3%;
  // min-width: 320px;
  // display: flex;
  // justify-content: center;
  // background: var(--outgoing-chat-bg);
  border: transporent;
`;
export const TypingContentCss = styled.div`
  margin-left: 0;
  position: relative;

  @media (min-width: 768px) {
    margin-left: 300px;
    margin-right: 90px;
  }

  @media (min-width: 1200px) {
    margin-left: 344px;
    margin-right: 144px;
  }

  & span {
    position: absolute;
    right: 0;
    width: 55px;
    height: 55px;
    display: flex;
    border-radius: 4px;
    font-size: 1.35rem;
    align-items: center;
    justify-content: center;
    color: var(--icon-color);
  }
  // @media (min-width: 769px) {
  //   width: 492px;
  // }
`;

export const TypingTextareaCss = styled.div`
  display: flex;
  position: relative;
`;

export const TextareaCss = styled.textarea`
  height: 55px;
  width: 100%;
  border: none;
  padding: 10px 25px 10px 12px;
  color: var(--text-color);
  font-size: 1rem;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: hidden;

  background: var(--incoming-chat-bg);
  outline: 1px solid var(--incoming-chat-border);
  box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);
  & textarea::placeholder {
    color: var(--placeholder-color);
  }
  & textarea:valid ~ span {
    visibility: visible;
  }

  @media (min-width: 769px) {
    width: 100%;
    border: none;
    padding: 15px 45px 15px 20px;
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
  // flex-direction: row;

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
