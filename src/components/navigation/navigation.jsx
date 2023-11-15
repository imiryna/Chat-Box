import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  NavBoxCss,
  HambrgMenuCss,
  TitleCss,
  IconPlasCss,
  BtnBox,
  OpenSideBarCss,
  ToolTipCss,
  OpenUploadCss,
  Button,
} from './navigation.styled';

import { useDispatch } from 'react-redux';
import { setSidebarVisibility, setUploadVisibility } from 'Redux/modalSlice';
import { logoutThunk } from 'Redux/authThunk';

export const Navigation = () => {
  // dispatcher for calling actions
  const dispatcher = useDispatch();

  const openSidebar = () => {
    dispatcher(setSidebarVisibility(true));
  };

  const openUpload = () => {
    dispatcher(setUploadVisibility(true));
  };

  const handleLogout = () => {
    dispatcher(logoutThunk());
  };

  return (
    <>
      <NavBoxCss>
        {/*  nav */}
        <HambrgMenuCss onClick={openSidebar}>&#x2630;</HambrgMenuCss>
        {/* //span */}
        <BtnBox>
          {/* div */}
          <OpenSideBarCss onClick={openSidebar} data-title="Open sidebar">
            <span>&#128386;</span>
            <ToolTipCss>Open sidebar</ToolTipCss>
          </OpenSideBarCss>
        </BtnBox>
        <TitleCss> Logo</TitleCss>
        <Button onClick={handleLogout}>Logout</Button>
        <OpenUploadCss onClick={openSidebar} data-title="Open sidebar">
          <IconPlasCss onClick={openUpload}>&#65291;</IconPlasCss>
          <ToolTipCss>Open upload</ToolTipCss>
        </OpenUploadCss>
      </NavBoxCss>
      <Outlet />
    </>
  );
};
