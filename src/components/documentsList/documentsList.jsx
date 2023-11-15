import { useEffect } from 'react';
import { ListDocWrapCss, DocumentBoxCss } from './documentsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUploadFileThunk, uploadFilesListThunk } from 'Redux/uploadThunk';
import { selectFilteredUploads } from 'Redux/selectors';

export const DocumentsList = () => {
  // dispatcher for calling thunks
  const dispatcher = useDispatch();

  // update the list of the documents on component load
  useEffect(() => {
    dispatcher(uploadFilesListThunk());
  }, [dispatcher]);

  // state variables subscribe
  const filteredDocuments = useSelector(selectFilteredUploads);

  const handleRemoveItem = e => {
    dispatcher(deleteUploadFileThunk(e.target.id));
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
