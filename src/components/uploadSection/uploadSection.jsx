import {useState} from "react";
import { DocumentComtCss, UploadBoxCss, ButtonBoxCss, ToolTipCss, } from "./uploadSection.styled";
import { UploadForm } from "components/uploadForm/uploadForm";
import { Filter } from "components/filter/filter";
import { DocumentsList } from "components/documentsList/documentsList";

export const UploadSection = ({showUpload, changeShowUpload})=>{
  
  const [documents, setDocuments] = useState([]);
  const [filter, setFilter] = useState('');

  

    let displayModal;
  if (typeof showUpload === 'boolean') {
    displayModal = showUpload ? 'flex' : 'none';
  } else if (typeof showUpload === 'string') {
    displayModal = showUpload;
  }

  const closeModal = () => {
    changeShowUpload(false);
  };

  const removeDocumentById = documentId => {
    setDocuments(documents => documents.filter(document => document.id !== documentId)
    );
  };

  const filteringDocuments = filteredList => {
    setFilter([...filteredList])
  };

    return(
        <DocumentComtCss showmodal={displayModal}>
            <ButtonBoxCss onClick={closeModal}>
                <span>&#128386;</span>
                <ToolTipCss>Close upload</ToolTipCss>
            </ButtonBoxCss>
            <Filter 
              documentData={documents}
              filteredDocuments={filteringDocuments}
            /> 
            <DocumentsList
            documents={filter ? filter : documents} 
            removeDocumentById={removeDocumentById}
            />
            <UploadBoxCss>
            <UploadForm/>
            </UploadBoxCss>
        </DocumentComtCss>
    )
}