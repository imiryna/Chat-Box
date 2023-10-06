import React from "react";
import { ContainerCss, NavBoxCss, NavBoxItemsCss } from "./sideBar.styled";

export const SideBar = () => {
  return (
    <ContainerCss>
      <NavBoxCss>
        <NavBoxItemsCss>
          <span>&#9998;</span>
          <p>New Chat</p>
        </NavBoxItemsCss>
        <NavBoxItemsCss>
          <span>&#128386;</span>
        </NavBoxItemsCss>
      </NavBoxCss>
    </ContainerCss>
  );
};
