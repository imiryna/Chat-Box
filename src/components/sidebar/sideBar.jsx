import React from 'react';
import { ContainerCss, NavBoxCss, NavBoxItemsCss, ToolTipCss } from './sideBar.styled';

export const SideBar = ({ showModal, toggleModal }) => {
  let displayModal;
  if (typeof showModal === 'boolean') {
    displayModal = showModal ? 'flex' : 'none';
  }else if (typeof showModal === "string") {
    displayModal = showModal;
    
  } 

  const closeModal = () => {
    toggleModal(false);
  };
  return (
    <ContainerCss showmodal={displayModal}>
      <NavBoxCss>
        <NavBoxItemsCss>
          <span>&#9998;</span>
          <p>New Chat</p>
        </NavBoxItemsCss>
        <NavBoxItemsCss onClick={closeModal} data-title='Close sidebar'>
          <span>&#128386;</span>
          <ToolTipCss>Close sidebar</ToolTipCss>
        </NavBoxItemsCss>
      </NavBoxCss>
    </ContainerCss>
  );
};
