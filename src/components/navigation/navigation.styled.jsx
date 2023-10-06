import styled from "styled-components";

export const NavBoxCss = styled.div`
  display: flex;
  max-height: 100vh;
  flex-direction: row;
  align-items: center;
  padding: 4px 0 0 4px;
  outline: 2px solid lightcoral;
  background: var(--outgoing-chat-bg-dark);

  @media (min-width: 768px) {
    display: none;
  }
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
