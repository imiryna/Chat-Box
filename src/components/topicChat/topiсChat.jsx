import { useState, React } from 'react';
import { TopiсBoxCss, SpanSt, SvgCss } from './topiсChat.styled';
import { ConfirmDialog } from 'primereact/confirmdialog';

export const TopicChat = ({ chatName, removeById, chatId }) => {
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [removingId, setRemovingId] = useState(null);

  const handleOnClick = e => {
    setConfirmVisible(true);
    setRemovingId(e.target.id);
    // removeById(e.target.id);
  };

  const confirmationAccept = () => {
    removeById(removingId);
    setRemovingId(null);
  };

  const confirmationReject = () => {
    setRemovingId(null);
  };

  return (
    <TopiсBoxCss>
      <svg width="16" height="16">
        <use href="../../images/chat.svg"></use>
      </svg>
      <p>{chatName}</p>
      <SpanSt id={chatId} onClick={handleOnClick}>
        <Delete />
        {/* <Toast ref={toast} /> */}
        <ConfirmDialog
          visible={confirmVisible}
          onHide={() => setConfirmVisible(false)}
          message="Are you sure you want to proceed?"
          header="Confirmation"
          icon="pi pi-exclamation-triangle"
          accept={confirmationAccept}
          reject={confirmationReject}
        />
      </SpanSt>
    </TopiсBoxCss>
  );
};

const Delete = ({ size = 18, color = '' }) => (
  <SvgCss
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="butt"
    strokeLinejoin="bevel"
  >
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </SvgCss>
);
export default Delete;
