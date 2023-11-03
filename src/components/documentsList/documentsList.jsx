import React from 'react';
import { ListDocWrapCss, DocumentBoxCss } from './documentsList.styled';

export const DocumentsList = ({
  documents,
  filterTerm,
  removeDocumentById,
}) => {
  const filteredDocuments = documents.filter(document =>
    document.name.toLowerCase().includes(filterTerm.toLowerCase())
  );

  const handleRemoveItem = e => {
    removeDocumentById(e.target.id);
  };

  return (
    <>
      <ListDocWrapCss>
        {filteredDocuments.map(document => (
          <DocumentBoxCss key={document.id}>
            <p>{document.name}</p>
            <span id={document.id} onClick={handleRemoveItem}>
              Delete
            </span>
          </DocumentBoxCss>
        ))}
      </ListDocWrapCss>
    </>
  );
};
