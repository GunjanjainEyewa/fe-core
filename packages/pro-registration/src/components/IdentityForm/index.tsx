import React from 'react';
import { styled } from '@eyewa/ui-components';
import { FileProps } from '../../types';
import InputBox from '../InputBox';
import DocumentUploader from '../DocumentUpload';

interface Props extends FileProps {
  nameLabel: string;
  idLabel: string;
  nameValue: string;
  idValue: string;
  isRequired?: boolean;
  onNameChange?: (value: string) => void;
  onIdChange?: (value: string) => void;
}

const Container = styled.section`
  margin: ${({ theme }) => theme.spacing.spacing80} 0;
  margin-left: ${({ theme }) => theme.spacing.spacing160};
`;

const IdentityForm: React.FunctionComponent<Props> = ({ ...props }: Props) => {
  const {
    nameLabel,
    nameValue,
    idLabel,
    idValue,
    files,
    isRequired: _isRequired,
    onNameChange,
    onIdChange,
    onUpload,
    onRemove,
  } = props;

  return (
    <Container>
      <InputBox
        label={nameLabel}
        value={nameValue}
        isRequired={_isRequired}
        onChange={(value) => onNameChange(value)}
      />
      <InputBox
        margin
        label={idLabel}
        value={idValue}
        isRequired={_isRequired}
        onChange={(value) => onIdChange(value)}
      />
      <DocumentUploader
        files={files}
        onRemove={(fileName) => onRemove(fileName)}
        onUpload={(file, name) => onUpload(file, name)}
      />
    </Container>
  );
};

export default IdentityForm;
