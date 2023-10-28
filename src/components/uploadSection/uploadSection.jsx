import React from "react";
import { DocumentComtCss, UploadBoxCss, FormCss, ButtonBoxCss, ToolTipCss, ListDocWrapCss} from "./uploadSection.styled";
import { UploadForm } from "components/uploadForm/uploadForm";

export const UploadSection = ({showUpload, changeShowUpload})=>{

    let displayModal;
  if (typeof showUpload === 'boolean') {
    displayModal = showUpload ? 'flex' : 'none';
  } else if (typeof showUpload === 'string') {
    displayModal = showUpload;
  }

  const closeModal = () => {
    changeShowUpload(false);
  };

    return(
        <DocumentComtCss showmodal={displayModal}>
            <ButtonBoxCss onClick={closeModal}>
                <span>&#128386;</span>
                <ToolTipCss>Close upload</ToolTipCss>
            </ButtonBoxCss>
            <FormCss>
                <label>
                    <span>Filter</span>
                    <input type="text" />
                </label>
            </FormCss>
            <ListDocWrapCss>
                list of documents
            </ListDocWrapCss>
            <UploadBoxCss>
            <UploadForm/>
            </UploadBoxCss>
        </DocumentComtCss>
    )
}