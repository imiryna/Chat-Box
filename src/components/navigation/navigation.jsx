import {
  NavBoxCss,
  HambrgMenuCss,
  TitleCss,
  IconPlasCss,
  BtnBox,
  OpenSideBarCss,
  ToolTipCss,
} from './navigation.styled';
import React from 'react';

export const Navigation = ({ changeShowSidebar }) => {
  const openModal = () => {
    changeShowSidebar(true);
  };

  return (
    <NavBoxCss>
      <HambrgMenuCss onClick={openModal}>&#x2630;</HambrgMenuCss>
      <BtnBox>
        <OpenSideBarCss onClick={openModal} data-title='Open sidebar'>
          <span >&#128386;</span>
          <ToolTipCss>Open sidebar</ToolTipCss>
        </OpenSideBarCss>
        </BtnBox> 
      <TitleCss> Logo</TitleCss>
      <IconPlasCss>&#65291;</IconPlasCss>
    </NavBoxCss>
  );
};
