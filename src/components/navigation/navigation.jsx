import { NavBoxCss, HambrgMenuCss, TitleCss, IconPlasCss } from "./navigation.styled";
import React from "react";

export const Navigation = () => {
  return (
    <NavBoxCss>
      <HambrgMenuCss>&#x2630;</HambrgMenuCss>
      <TitleCss> Multichat in React</TitleCss>
      <IconPlasCss>&#65291;</IconPlasCss>
    </NavBoxCss>
  );
};
