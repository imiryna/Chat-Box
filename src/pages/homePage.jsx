import React from 'react';
import { ChatComponent } from 'components/chatComponent/chatComponent';
import { useSelector } from 'react-redux';
import { selectAuthenticated } from 'Redux/authSelector';

import { TitleCss, TextCss } from 'components/navigation/navigation.styled';

const HomePage = () => {
  const authed = useSelector(selectAuthenticated);
  return (
    <div>
      <TitleCss>Get started</TitleCss>
      {authed ? (
        <ChatComponent />
      ) : (
        <>
          <TitleCss>Get started</TitleCss>
          <TextCss>all your documents in one place</TextCss>
        </>
      )}
    </div>
  );
};

export default HomePage;
