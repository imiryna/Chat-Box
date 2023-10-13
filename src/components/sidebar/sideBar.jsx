import React from 'react';
import { ContainerCss, NavBoxCss, NavBoxItemsCss } from './sideBar.styled';

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
        <NavBoxItemsCss>
          <span onClick={closeModal} data-title='Close sidebar'>&#128386;</span>
        </NavBoxItemsCss>
      </NavBoxCss>
    </ContainerCss>
  );
};
