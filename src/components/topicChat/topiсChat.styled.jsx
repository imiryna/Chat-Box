import styled from "styled-components";

export const TopiсBoxCss = styled.div`
  position: relative;
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
  color:  #7c767d; 
  /* margin-right: 8px; */
  margin-bottom:24px;
  border: 1px solid rgba(5,25,55,1);
  border-radius: 6px;
  transition: color 250ms ease-in-out,  background 250ms ease-in-out;

  &:hover{
    color: var(--outgoing-chat-bg);
    background: radial-gradient(circle, rgba(27,163,196,1) 0%, rgba(5,25,55,1) 100%), border-box;

  }
  
`;
export const SpanSt = styled.span`
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 10px;

  position: absolute;
  top: 3px;
  right: 2%;
`;

export const SvgCss = styled.svg`
  stroke: #7c767d;
  transition: strike 250ms ease-in-out;
  &:hover{
    stroke:#dad5d5;
  }
`
