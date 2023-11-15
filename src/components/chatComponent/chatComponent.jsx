import {
  WrapperCss,
  WrapperChatCss,
  OpenUploadSectionCss,
  ToolTipCss,
} from 'components/chatComponent/chatComponent.styled';
import { TypingBox } from 'components/typingBox/typingBox.jsx';
import { SideBar } from 'components/sidebar/sideBar.jsx';
import { ChatContent } from 'components/chatContent/chatContent.jsx';

import { useDispatch } from 'react-redux';
import { setUploadVisibility } from 'Redux/modalSlice';

export const ChatComponent = () => {
  const dispatcher = useDispatch();

  const openUploadBar = () => {
    dispatcher(setUploadVisibility(true));
  };

  return (
    <>
      <WrapperCss>
        <SideBar />
      </WrapperCss>

      <WrapperChatCss id="wrapper">
        <OpenUploadSectionCss onClick={openUploadBar} data-title="Open upload">
          <span>&#128386;</span>
          <ToolTipCss>Open upload section</ToolTipCss>
        </OpenUploadSectionCss>
        <ChatContent id="chatcontainer" />
        <TypingBox id="typingbox" />
      </WrapperChatCss>
    </>
  );
};
