import styled from "styled-components";

export const WrapperCss = styled.div`
  padding: 0;
  display: flex;
`;

export const WrapperChatCss = styled.div`
  min-width: 320px;
  display: block;

  @media (max-width: 768px) {
    min-width: 492px;
  }
  @media (max-width: 1200px) {
    min-width: 1147px;
  }
`;
// .box-text.box {
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   padding: 4px 0 0 4px;
//   outline: 2px solid lightcoral;
//   background-color: #343541;
// }

// .btn {
//   width: 24px;
//   height: 24px;
// }
//.box.text {
//   text-align: center;
//   color: #d9d9e3;
// }
// .box-text {
//   margin-left: auto;
//   margin-right: auto;
// }
