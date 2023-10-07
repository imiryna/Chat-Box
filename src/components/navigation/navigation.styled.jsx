import styled from "styled-components";

export const NavBoxCss = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  outline: 2px solid lightcoral;
  background: var(--outgoing-chat-bg-dark);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const HambrgMenuCss = styled.span`
  font-size: 30px;
  font-weight: lighter;
  color: var(--outgoing-chat-bg);
  padding: 10px;
  cursor: pointer;
`;

export const TitleCss = styled.h1`
  font-size: 20px;
  font-weight: normal;
  color: var(--outgoing-chat-bg);
`;

export const IconPlasCss = styled.span`
  font-size: 30px;
  font-weight: lighter;
  color: var(--outgoing-chat-bg);
  padding: 10px;
  cursor: pointer;
`;
// .btn {
//   width: 24px;
//   height: 24px;
// }
// .box.text {
//   text-align: center;
//   color: #d9d9e3;
// }
// .box-text {
//   margin-left: auto;
//   margin-right: auto;
// }
