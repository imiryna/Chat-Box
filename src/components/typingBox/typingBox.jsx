import { useState } from "react";
import * as API from "../../services/Api";

import { TypingBoxCss, TypingContentCss, TypingButtonCss, TypingTextareaCss, TextareaCss, SpanCss } from "./typingBox.styled";

export const TypingBox = ({ addMessage }) => {
  const [message, setMessage] = useState("");

  const handleOutputMessage = async () => {
    if (message === "") {
      return;
    }
    // add user message to messageStack of App component
    addMessage(createMessageObj(message, "user"));

    await API.fetchMessageChat(message.trim())
      .then((res) => {
        const answer = res.choices[0].text.trim();
        addMessage(createMessageObj(answer, "openai"));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createMessageObj = (text, author) => {
    return {
      text: text,
      author: author,
      timestamp: Date.now(),
    };
  };

  const getInputValue = (e) => {
    setMessage(e.target.value);
  };
  return (
    <TypingBoxCss>
      <TypingContentCss>
        <TypingTextareaCss>
          <TextareaCss onChange={getInputValue} id="chat-input" spellCheck="false" placeholder="Enter a prompt here" required></TextareaCss>
          {/* <TypingSentButton onClick={handleOutputMessage} /> */}
          <TypingButtonCss onClick={handleOutputMessage} id="send-btn" className="material-symbols-rounded">
            <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <g>
                <g>
                  <g>
                    <path
                      d="M0,234.919l174.682,102.399l102.399,174.682L512,0.001L0,234.919z M275.387,478.16l-85.176-145.304l52.097-52.097
				l-11.068-11.068l-52.098,52.098L33.84,236.612L459.726,41.206L293.249,207.681l11.068,11.068L470.795,52.275L275.387,478.16z"
                    />

                    <rect x="257.132" y="223.121" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 277.6292 609.0733)" width="15.652" height="47.834" />
                  </g>
                </g>
              </g>
            </svg>
          </TypingButtonCss>
        </TypingTextareaCss>
        <TypingDeleteButton />
      </TypingContentCss>
    </TypingBoxCss>
  );
};

const TypingDeleteButton = () => {
  return (
    <TypingButtonCss>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48px" height="48px">
        <path d="M 28 11 C 26.895 11 26 11.895 26 13 L 26 14 L 13 14 C 11.896 14 11 14.896 11 16 C 11 17.104 11.896 18 13 18 L 14.160156 18 L 16.701172 48.498047 C 16.957172 51.583047 19.585641 54 22.681641 54 L 41.318359 54 C 44.414359 54 47.041828 51.583047 47.298828 48.498047 L 49.839844 18 L 51 18 C 52.104 18 53 17.104 53 16 C 53 14.896 52.104 14 51 14 L 38 14 L 38 13 C 38 11.895 37.105 11 36 11 L 28 11 z M 18.173828 18 L 45.828125 18 L 43.3125 48.166016 C 43.2265 49.194016 42.352313 50 41.320312 50 L 22.681641 50 C 21.648641 50 20.7725 49.194016 20.6875 48.166016 L 18.173828 18 z" />
      </svg>
    </TypingButtonCss>
  );
};

const TypingSentButton = () => {
  return (
    <TypingButtonCss id="send-btn" className="material-symbols-rounded">
      <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <g>
          <g>
            <g>
              <path
                d="M0,234.919l174.682,102.399l102.399,174.682L512,0.001L0,234.919z M275.387,478.16l-85.176-145.304l52.097-52.097
				l-11.068-11.068l-52.098,52.098L33.84,236.612L459.726,41.206L293.249,207.681l11.068,11.068L470.795,52.275L275.387,478.16z"
              />

              <rect x="257.132" y="223.121" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 277.6292 609.0733)" width="15.652" height="47.834" />
            </g>
          </g>
        </g>
      </svg>
    </TypingButtonCss>
  );
};
