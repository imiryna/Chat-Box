import styled from 'styled-components';


export const MyTag = styled.button.attrs(props => ({
  title: props.myThisThingValue,
}))`
  background: ${props => props.thisIsAlsoMyThing};
`;


export const ContainerCss = styled.div`
  position: fixed;
  padding-left: 8px;
  padding-right: 8px;
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
    /* overflow: auto; */
    display: ${props => props.showmodal || "flex"};
  }
`;

export const BoxSt = styled.div`
  display: block;
`;

export const NavBoxCss = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  align-items: start;
  flex: 1 1 0%;
  background: inherit;
 margin-bottom: 24px;


  @media (max-width: 767px) {
    gap: 95px;
  }

`;

export const ToolTipCss = styled.div`
 position: absolute;
  top: 2%;
  left: 102%;
  background: var(--outgoing-chat-border);
  color: var(--outgoing-chat-bg);
  padding: 10px 20px;
  font-size: 12px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 3px rgba(56, 54, 54, 0.86);
  z-index:1300;
  width: auto;
	white-space: nowrap;
  border: 1px solid var(--outgoing-chat-bg);
  border-radius: 6px;
`;

export const NavBoxItemsCss = styled.li`
  display: flex;
  height: 40px;
  padding: 4px 12px;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  text-align: center;
  white-space: nowrap;
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

