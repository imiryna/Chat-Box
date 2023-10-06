import styled from "styled-components";

export const ContainerCss = styled.div`
  padding: 8px;
  height: 100vh;
  width: 244px;
  // display: flex;
  background: var(--outgoing-chat-border);

  @media (min-widht: 320px; max-widht: 768px) {
    display: none;
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
