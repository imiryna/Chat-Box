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
  /* margin-right: 8px; */
  margin-bottom:24px;
  border: 1px solid rgba(5,25,55,1);
  border-radius: 6px;

  &:hover{
    background: radial-gradient(circle, rgba(27,163,196,1) 0%, rgba(5,25,55,1) 100%), border-box;
    border-radius: 6px;
  }
  &:active{
    border: 1px solid;
    background: linear-gradient(309deg, rgba(27,163,196,1) 0%, rgba(5,25,55,1) 41%), border-box;
    border-radius: 6px;
  }
`;
export const SpanSt = styled.span`
  border: 1px solid var(--icon-color);
  border-radius: 6px;
  padding: 4px;
`;
