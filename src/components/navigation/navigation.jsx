import { NavBoxCss } from "./navigation.styled";
import React from "react";
import { ReactComponent as Logo } from "../../images/side_bar_menu.svg";

export const Navigation = () => {
  return (
    <NavBoxCss>
      <button type="button" style={{ background: "yellow", color: "green" }}>
        <Logo height="24" width="24" fill="currentColor" />
      </button>
      <h1> Multichat in React</h1>
      <button type="button">&#9746;</button>
    </NavBoxCss>
  );
};
