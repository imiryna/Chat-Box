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
        <IconPlasCss onClick={openUpload}>
          <Layout6 />
        </IconPlasCss>
      </NavBoxCss>
      <Outlet />
    </>
  );
};

const Layout6 = ({ size = 24, color = '#ffffff' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M15 3v18" />
  </svg>
);
export default Layout6;
