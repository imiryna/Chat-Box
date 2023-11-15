import styled from 'styled-components';

export const NavBoxCss = styled.nav`
  position: fixed;
  display: flex;
  /* min-width: 320px; */
  min-width: 100vw;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4px;

  z-index: 3;

  /* background: var(--outgoing-chat-bg-dark); */
  background: linear-gradient(
    31deg,
    rgba(27, 163, 196, 1) 0%,
    rgba(5, 25, 55, 1) 41%
  );

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

export const HambrgMenuCss = styled.span`
  font-size: 27px;
  font-weight: lighter;
  color: var(--outgoing-chat-bg);
  padding: 15px;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const BtnBox = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    margin-left: 300px;
    margin-right: 90px;
  }

  @media (min-width: 1200px) {
    margin-left: 344px;
    margin-right: 144px;
  }
`;

export const ToolTipCss = styled.div`
  /* Tooltip styles */
  position: absolute;
  top: 0;
  left: 117%;
  /* background: var(--outgoing-chat-border); */
  background: #051937;

  color: var(--outgoing-chat-bg);
  padding: 10px 20px;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 12px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;
  transition: all 0.3s ease-in-out;

  box-shadow: 0 0 3px rgba(56, 54, 54, 0.86);
`;

export const OpenSideBarCss = styled.div`
  display: none;

  @media (min-width: 768px) {
    position: absolute;
    top: 20%;
    left: 2%;
    /* z-index: 200; */
    z-index: 4; // igor
    display: flex;
    padding: 8px 10px;
    flex-direction: row;
    /* gap: 12px; */
    align-items: center;
    text-align: center;
    /* color: var(--outgoing-chat-border); */
    color: var(--outgoing-chat-bg);
    width: auto;
    white-space: nowrap;
    /* background: var(--outgoing-chat-bg); */
    background: inherit;
    border: 1px solid var(--outgoing-chat-bg);
    border-radius: 6px;

    & span {
      width: 16px;
      height: 16px;
      color: var(--outgoing-chat-bg);
      position: relative;
    }
  }

  &:hover ${ToolTipCss} {
    opacity: 1;
    visibility: visible;
  }
`;

export const OpenUploadCss = styled.div`
  display: none;

  @media (min-width: 768px) {
    position: absolute;
    top: 20%;
    right: 0;
    /* z-index: 200; */
    z-index: 4; // igor
    display: flex;
    padding: 8px 10px;
    flex-direction: row;
    /* gap: 12px; */
    align-items: center;
    text-align: center;
    /* color: var(--outgoing-chat-border); */
    color: var(--outgoing-chat-bg);
    width: auto;
    white-space: nowrap;
    /* background: var(--outgoing-chat-bg); */
    background: inherit;
    border: 1px solid var(--outgoing-chat-bg);
    border-radius: 6px;

    & span {
      width: 16px;
      height: 16px;
      color: var(--outgoing-chat-bg);
      position: relative;
    }
  }

  &:hover ${ToolTipCss} {
    opacity: 1;
    visibility: visible;
  }
`;

export const TitleCss = styled.h1`
  font-size: 28px;
  font-weight: normal;
  color: var(--outgoing-chat-bg);

  @media (min-width: 768px) {
    text-align: center;
    display: block;
    margin-right: auto;
    margin-left: 205px;
  }
`;

export const IconPlasCss = styled.span`
  font-size: 27px;
  font-weight: lighter;
  color: var(--outgoing-chat-bg);
  padding: 15px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const TextCss = styled.p`
  display: block;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  color: #e88606;
`;

export const Button = styled.button`
  padding: 8px 10px;
  font: inherit;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #fff;
  color: #cfcaca;
  font-size: 20px;
  background-image: linear-gradient(
    31deg,
    rgba(27, 163, 196, 1) 0%,
    rgba(5, 25, 55, 1) 41%
  );
  transition: all 250ms;

  &:hover,
  &:focus {
    color: #fff;
    border: 1px solid #dcd5d5;
    cursor: pointer;
  }
`;
