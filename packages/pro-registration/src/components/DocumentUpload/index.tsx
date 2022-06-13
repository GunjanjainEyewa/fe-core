import React, { useRef, useState } from 'react';
import { styled } from '@eyewa/ui-components';
import Attachment from '../../icons/attachment';
import StyledIcon from '../Styled/Icon';
import Add from '../../icons/add';
import { FileInfo, FileProps as Props } from '../../types';
import { convertToBase64 } from '../../utils';
import { ErrorMessage } from '../Styled';
import Close from '../../icons/close';


const FILE_SIZE_VALIDATION_MSG: string = 'File size must be less than 5MB';

const FileInput = styled.input`
  display: none;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.spacing80};
  margin-bottom: ${({ theme }) => theme.spacing.spacing40};
  span {
    ${({ theme }) => theme.typography.titleXSmall};
  }
`;

const Content = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing.spacing40};
`;

const AttachmentContainer = styled.div`
  position: relative;
  ${({ theme }) => theme.borders.border100};
  border-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 40px;
  width: 40px;
  margin-right: ${({ theme }) => theme.spacing.spacing80};
  border-radius: ${({ theme }) => theme.borders.radius10};
`;

const ImageContainer = styled.div`
  position: relative;
  width: inherit;
  height: inherit;
  &:hover div {
    display: block;
  }
`;

const Icon = styled.div`
  display: none;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;
`;

const AttachmentNote = styled.span`
  ${({ theme }) => theme.typography.bodyMedium};
`;

const DocumentUploader: React.FunctionComponent<Props> = ({ ...props }: Props) => {
  const { files: _files, onUpload, onRemove } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState(_files);
  const [isError, setIsError] = useState(false);

  const pushFiles = (): FileInfo[] => {
    if (files.length === 2) {
      return files;
    }
    const { fieldName } = files[0];
    const lastChar = fieldName?.charAt(fieldName.length - 1);
    const updatedField = lastChar === '2' ? fieldName.substring(0, (fieldName.length - 1)) : `${fieldName}2`;
    return [...files, {
      fieldName: updatedField,
      filePath: '',
    }];
  };

  const handleRemoveClick = (field: string) => {
    const index = files.findIndex((file) => file.fieldName === field);
    if (files.length === 1) {
      setFiles([{
        filePath: '',
        fieldName: files[0].fieldName,
      }]);
    } else {
      const currentFile = files[index];
      files.splice(index, 1, { ...currentFile, filePath: '' });
      setFiles([...files]);
    }
    onRemove(field);
  };

  const handleUpload = (e: any, _fieldName: string) => {
    const uploadedfile: Blob = e.target?.files[0];
    const fileSize = uploadedfile.size / (1024 * 1024);
    if (fileSize > 5) {
      setIsError(true);
    } else {
      setIsError(false);
    }
    const updatedFiles = pushFiles();
    convertToBase64(e.target.files[0]).then((response: string) => {
      setFiles(updatedFiles.map((file) => {
        if (file.fieldName === _fieldName) {
          return {
            fieldName: _fieldName,
            filePath: response,
          };
        }
        return file;
      }));
      onUpload(uploadedfile, _fieldName);
    });
  };

  const renderImage = (fileInfo: FileInfo) => (
    <ImageContainer>
      <img
        src={fileInfo.filePath}
        alt={fileInfo.fieldName}
        height={40}
      />
      <Icon onClick={() => handleRemoveClick(fileInfo.fieldName)}>
        <Close />
      </Icon>
    </ImageContainer>
  );

  const renderAddIcon = (file: FileInfo) => (
    <StyledIcon size={16} onClick={() => inputRef.current.click()} pointer>
      <Add />
      <FileInput type="file" ref={inputRef} accept="image/*,.pdf" onChange={(evt) => handleUpload(evt, file.fieldName)} />
    </StyledIcon>
  );

  return (
    <>
      <HeaderContainer>
        <StyledIcon size={12} margin>
          <Attachment />
        </StyledIcon>
        <span>Attach Document (image/pdf)</span>
      </HeaderContainer>
      <Content>
        {files?.map((file: FileInfo) => (
          <AttachmentContainer key={file.fieldName}>
            {file.filePath ? renderImage(file) : renderAddIcon(file)}
          </AttachmentContainer>
        ))}
      </Content>
      {isError && <ErrorMessage>{FILE_SIZE_VALIDATION_MSG}</ErrorMessage>}
      <AttachmentNote>
        NOTE: Maximum upload file size is 5MB
      </AttachmentNote>
    </>
  );
};

export default DocumentUploader;
