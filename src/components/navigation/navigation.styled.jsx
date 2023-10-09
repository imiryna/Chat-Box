import styled from 'styled-components';

export const NavBoxCss = styled.div`
  display: flex;
  min-width: 320px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4px;

  background: var(--outgoing-chat-bg-dark);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const HambrgMenuCss = styled.span`
  font-size: 27px;
  font-weight: lighter;
  color: var(--outgoing-chat-bg);
  padding: 15px;
  cursor: pointer;
`;

export const TitleCss = styled.h1`
  font-size: 17px;
  font-weight: normal;
  color: var(--outgoing-chat-bg);
`;

export const IconPlasCss = styled.span`
  font-size: 27px;
  font-weight: lighter;
  color: var(--outgoing-chat-bg);
  padding: 15px;
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
