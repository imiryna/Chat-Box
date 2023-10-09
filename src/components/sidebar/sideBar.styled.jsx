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
  display: ${props => props.showmodal};
  background: var(--outgoing-chat-border);
  z-index: 1200;

  @media (min-width: 768px) {
    padding: 8px;
    height: 100vh;
    width: 244px;
    position: fixed;
    background: var(--outgoing-chat-border);
    overflow: auto;
    display: flex;
  }
`;

export const NavBoxCss = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: start;
  flex: 1 1 0%;
  background: inherit;
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
  & span {
    width: 16px;
    height: 16px;
    color: var(--outgoing-chat-bg);
    // margin-right: 24px;
  }
  & p {
    font-size: 12px;
    color: var(--outgoing-chat-bg);
    margin-right: 60px;
  }
`;
