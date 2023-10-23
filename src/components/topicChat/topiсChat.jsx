import React from "react";
import { TopiсBoxCss, SpanSt } from "./topiсChat.styled";

export const TopicChat = ({chatName, removeById, chatId})=>{

  const handleOnClick = e => {
    removeById(e.target.id);
  };
 

 return(
    <TopiсBoxCss >
    <svg width="16" height="16">
      <use href="../../images/chat.svg"></use>
    </svg>
    <p>{chatName}</p>
    <SpanSt 
    id={chatId}
    onClick={handleOnClick}>Delete</SpanSt>
  </TopiсBoxCss>
 )
}