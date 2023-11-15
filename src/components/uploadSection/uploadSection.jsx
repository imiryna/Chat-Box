import {
  DocumentComtCss,
  UploadBoxCss,
  ButtonBoxCss,
  ToolTipCss,
} from './uploadSection.styled';
import { UploadForm } from 'components/uploadForm/uploadForm';
import { FilterUploads } from 'components/filterUploads/filterUploads';
import { DocumentsList } from 'components/documentsList/documentsList';

import { useDispatch, useSelector } from 'react-redux';
import { getUploadVisibility, setUploadVisibility } from 'Redux/modalSlice';

export const UploadSection = () => {
  const showUpload = useSelector(getUploadVisibility);
  const dispatcher = useDispatch();

  let displayModal;
  if (typeof showUpload === 'boolean') {
    displayModal = showUpload ? 'flex' : 'none';
  } else if (typeof showUpload === 'string') {
    displayModal = showUpload;
  }

  const closeModal = () => {
    dispatcher(setUploadVisibility(false));
  };

  return (
    <DocumentComtCss showmodal={displayModal}>
      <ButtonBoxCss onClick={closeModal}>
        <span>&#128386;</span>
        <ToolTipCss>Close upload</ToolTipCss>
      </ButtonBoxCss>
      <FilterUploads />
      <DocumentsList />
      <UploadBoxCss>
        <UploadForm />
      </UploadBoxCss>
    </DocumentComtCss>
  );
};
