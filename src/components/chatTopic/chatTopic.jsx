import { useState, useRef } from 'react';
import {
  TopiсBoxCss,
  SpanSt,
  SvgCss,
  ConfirmDialogCss,
} from 'components/chatTopic/chatTopic.styled';
import { confirmDialog, ConfirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';

import { useDispatch } from 'react-redux';
import { setCurrentChat } from 'Redux/chatComponentSlice';
import { deleteChatThunk } from 'Redux/chatComponentThunk';

export const ChatTopic = ({ chatName, chatId }) => {
  const [confirmVisible, setConfirmVisible] = useState(false);

  const dispatcher = useDispatch();

  /**
   * set the current chat to state
   * for loading its messages
   */
  const handleSelectChat = () => {
    dispatcher(setCurrentChat(chatId));
  };

  const accept = () => {
    dispatcher(deleteChatThunk(chatId));
  };

  const reject = () => setConfirmVisible(false);

  return (
    <TopiсBoxCss onClick={handleSelectChat}>
      <ConfirmDialogCss
        visible={confirmVisible}
        onHide={() => setConfirmVisible(false)}
        message="Are you sure you want to proceed?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        accept={accept}
        reject={reject}
      />
      <MessageSquare />
      <p>{chatName}</p>
      <SpanSt id={chatId}>
        {/*  */}
        <Button
          onClick={() => setConfirmVisible(true)}
          icon="pi pi-arrow-down-right"
          className="p-button-warning mr-2"
        >
          <Delete />
        </Button>
      </SpanSt>
    </TopiсBoxCss>
  );
};

export const Delete = ({ size = 18, color = '' }) => (
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

const MessageSquare = ({ size = 24, color = '#dad5d5' }) => (
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
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);
export default MessageSquare;
