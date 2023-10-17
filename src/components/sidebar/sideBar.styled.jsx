import styled from 'styled-components';


export const MyTag = styled.button.attrs(props => ({
  title: props.myThisThingValue,
}))`
  background: ${props => props.thisIsAlsoMyThing};
`;


export const ContainerCss = styled.div`
  position: fixed;
  padding: 8px;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: ${props => props.showmodal || 'none'};
  background: var(--outgoing-chat-border);
  z-index: 1200;

  @media (min-width: 768px) {
    padding: 8px;
    height: 100vh;
    width: 244px;
    position: fixed;
    background: var(--outgoing-chat-border);
    overflow: auto;
    display: ${props => props.showmodal || "flex"};
  }
`;

export const NavBoxCss = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: start;
  flex: 1 1 0%;
  background: inherit;

  @media (max-width: 767px) {
    gap: 85px;
  }

`;

export const ToolTipCss = styled.div`
 position: absolute;
  top: 0;
  left: 100%;
  background: var(--outgoing-chat-border);
  color: var(--outgoing-chat-bg);
  padding: 10px 20px;
  border: 1px solid var(--outgoing-chat-bg);
  border-radius: 5px;
  font-size: 14px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 3px rgba(56, 54, 54, 0.86);
  z-index:1300;
`;

export const NavBoxItemsCss = styled.li`
  display: flex;
  height: 40px;
  padding: 4px 12px;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  text-align: center;
  color: var(--outgoing-chat-bg);
  cursor: pointer;
  background: inherit;
  border: 1px solid var(--icon-color);
  border-radius: 6px;
  user-select: none;

  // hover to show tooltip
  &:hover ${ToolTipCss} {
    opacity: 1;
    visibility: visible;
  }

  & span {
    width: 16px;
    height: 16px;
    color: var(--outgoing-chat-bg);
    position: relative;
  }
  /* & span:hover::after{
    content: attr(data-title);
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 46px;
    height: 16px;
    z-index: 100;
    background: var(--outgoing-chat-border);
    color: var(--outgoing-chat-bg);
    font-size: 12px;
    padding: 5px;
    border: 1px solid var(--outgoing-chat-bg);
    border-radius: 5px;
    }
  } */
  
  & p {
    font-size: 12px;
    color: var(--outgoing-chat-bg);
    margin-right: 60px;
  }

  @media (max-width: 768px) {
    flex-grow: 2;
    flex-grow: 3;
    flex-grow: 0.6;
  }
`;
