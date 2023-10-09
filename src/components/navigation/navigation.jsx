import {
  NavBoxCss,
  HambrgMenuCss,
  TitleCss,
  IconPlasCss,
} from './navigation.styled';
import React from 'react';

export const Navigation = ({ changeShowModal }) => {
  const openModal = () => {
    changeShowModal(true);
  };

  return (
    <NavBoxCss>
      <HambrgMenuCss>&#x2630;</HambrgMenuCss>
      <TitleCss> New chat</TitleCss>
      <IconPlasCss onClick={openModal}>&#65291;</IconPlasCss>
    </NavBoxCss>
  );
};
