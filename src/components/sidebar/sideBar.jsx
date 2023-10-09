import React from 'react';
import { ContainerCss, NavBoxCss, NavBoxItemsCss } from './sideBar.styled';

export const SideBar = ({ showModal, toggleModal }) => {
  const displayModal = showModal ? 'flex' : 'none';
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
          <span onClick={closeModal}>&#128386;</span>
        </NavBoxItemsCss>
      </NavBoxCss>
    </ContainerCss>
  );
};
