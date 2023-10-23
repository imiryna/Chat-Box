import styled from "styled-components";

export const TopiсBoxCss = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: start;
  padding: 12px 56px 12px 12px;
  gap: 24px;
  background: inherit;
  text-align: center;
  font-size: 12px;
  white-space: nowrap;
  color: var(--outgoing-chat-bg);
  margin-right: 8px;
  margin-bottom:24px;
  border: 1px solid var(--outgoing-chat-border);
  border-radius: 6px;

  &:hover{
    background: var(--incoming-chat-bg);
  }
  &:active{
    background: var(--incoming-chat-bg);
  }
`;
export const SpanSt = styled.span`
  border: 1px solid var(--icon-color);
  border-radius: 6px;
  padding: 4px;
`;
