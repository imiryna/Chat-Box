import React from "react";
import { TypingBoxCss, TypingContentCss, TypingControlsCss, TypingTextareaCss, TextareaCss, SpanCss } from "./typinBox.styled";

export const TypingBox = () => {
  return (
    <TypingBoxCss>
      <TypingContentCss>
        <TypingTextareaCss>
          <TextareaCss id="chat-input" spellCheck="false" placeholder="Enter a prompt here" required></TextareaCss>
          <SpanCss id="send-btn" className="material-symbols-rounded">
            send
          </SpanCss>
        </TypingTextareaCss>
        <TypingControlsCss>
          <span id="theme-btn" className="material-symbols-rounded">
            light_mode
          </span>
          <span id="delete-btn" className="material-symbols-rounded">
            delete
          </span>
        </TypingControlsCss>
      </TypingContentCss>
    </TypingBoxCss>
  );
};
