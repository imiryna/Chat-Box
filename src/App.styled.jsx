import styled from 'styled-components';

export const WrapperCss = styled.div`
   /* display: flex; */
    width: 244px;
   

  @media (min-width: 768px){
  
   
  }
`;

export const WrapperChatCss = styled.div`
  min-width: 320px;
  display: block;

  @media (min-width: 768px) {
    min-width: 492px;
  }
  @media (min-width: 1200px) {
    min-width: 1147px;
  }
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
    color: rgba(5,25,55,1);
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
  
  
  &:hover{
    background:  var( --outgoing-chat-bg);
  }
  
 }

  &:hover ${ToolTipCss} {
    opacity: 1;
    visibility: visible;
  }
`;
