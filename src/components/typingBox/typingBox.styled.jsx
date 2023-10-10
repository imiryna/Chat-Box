import styled from 'styled-components';

export const TextareaContainerCss = styled.div`
  position: fixed;
  bottom: 4%;
  left: 0;
  width: 100%;

  @media (min-width: 768px){
    left: 300px;
    width: 50%;
  }
`

export const TextareaCss = styled.textarea`
  resize: none;
  width: 100%;
  padding: 10px;
  background-color: #f0f0f0;
  border-top: 1px solid var(--icon-color);
  color: var(--outgoing-chat-bg-dark);
  border-radius: 6px;
  background: var( --outgoing-chat-bg);
  box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);
  border: none;
  border: transparent;

  & textarea::placeholder {
      color: var(--placeholder-color);
      font-size: 12px;
   }
   & textarea:valid ~ span {
      visibility: visible;
}



/* Optional styles for the text inside the textarea */
& textarea {
  width: 100%;
  box-sizing: border-box;
}

/* Media query for responsiveness */
// @media (max-width: 768px) {
//     padding: 5px;

//   & textarea {
//     font-size: 14px;
//   }
// }
@media (min-width: 1200px) {
  // margin-left: 344px;
  // margin-right: 144px;
}

  // height: 55px;
  // width: 100%;
  // border: none;
  // padding: 10px 25px 10px 12px;
  // color: var(--text-color);
  // font-size: 1rem;
  // border-radius: 4px;
  // max-height: 200px;
  // overflow-y: hidden;

  // background: var(--incoming-chat-bg);
  // outline: 1px solid var(--incoming-chat-border);
  // box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);
  // & textarea::placeholder {
  //   color: var(--placeholder-color);
  // }
  // & textarea:valid ~ span {
  //   visibility: visible;
  // }

  // @media (min-width: 769px) {
  //   width: 100%;
  //   border: none;
  //   padding: 15px 45px 15px 20px;
  }
`;

export const TypingButtonCss = styled.span`
    position: absolute;
    bottom: 7px; /* Adjust the distance from the bottom as needed */
    right: 5px; /* Adjust the distance from the right as needed */
    background-color: inherit;
    // height: 40px;
  // width: 40px;
  fond-size: 30px;
    color: var(--outgoing-chat-bg-dark);
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 4px;

  // align-items: center;
  // text-align: center;
  // color: var(--outgoing-chat-border);
  // cursor: pointer;
  // background: var(--outgoing-chat-bg);
  // border: 1px solid var(--icon-color);
  // border-radius: 6px;

  // @media (max-width: 768px) {
  //   font-size: 1.25rem !important;
  // }
`;
