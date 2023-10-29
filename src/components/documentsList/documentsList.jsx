import React from "react";
import { ListDocWrapCss, DocumentBoxCss } from "./documentsList.styled";

export const DocumentsList = ({documents, removeDocumentById}) =>{

    return(
        <ListDocWrapCss>
         <DocumentBoxCss></DocumentBoxCss>
         <DocumentBoxCss></DocumentBoxCss>
         <DocumentBoxCss></DocumentBoxCss>
         </ListDocWrapCss>
    )
}