import styled from 'styled-components';
import { ConfirmDialog } from 'primereact/confirmdialog';

export const Button = styled.button`
  padding: 8px 10px;
  font: inherit;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid transparent;
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

export const ConfirmDialogCss = styled(ConfirmDialog)`
  padding: 34px;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;

  .p-dialog-title {
    margin-bottom: 8px;
  }

  .p-confirm-dialog-message {
    margin-bottom: 24px;
  }

  .p-confirm-dialog-reject {
    margin-right: 8px;
    padding: 8px 14px;
  }
  .p-confirm-dialog-accept {
    padding: 8px 10px;
  }

  .p-confirm-dialog-reject,
  .p-confirm-dialog-accept {
    font: inherit;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid transparent;
    color: #cfcaca;
    font-size: 14px;
    background: rgba(5, 25, 55, 1);
    transition: all 250ms;

    .p-confirm-dialog-reject:hover,
    .p-confirm-dialog-accept:hover {
      color: #fff;
      border: 1px solid #dcd5d5;
      cursor: pointer;
    }
  }
  .p-button-label {
    /* span */
  }
`;

export const TopiсBoxCss = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding: 12px 56px 12px 12px;
  gap: 24px;
  background: inherit;
  text-align: center;
  font-size: 12px;
  white-space: nowrap;
  color: #7c767d;
  /* margin-right: 8px; */
  margin-bottom: 24px;
  border: 1px solid rgba(5, 25, 55, 1);
  border-radius: 6px;
  transition: color 250ms ease-in-out, background 250ms ease-in-out;

  &:hover {
    color: var(--outgoing-chat-bg);
    background: radial-gradient(
        circle,
        rgba(27, 163, 196, 1) 0%,
        rgba(5, 25, 55, 1) 100%
      ),
      border-box;
  }
`;
export const SpanSt = styled.span`
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 10px;

  position: absolute;
  top: 3px;
  right: 2%;
`;

export const SvgCss = styled.svg`
  stroke: #7c767d;
  transition: strike 250ms ease-in-out;
  &:hover {
    stroke: #dad5d5;
  }
`;
