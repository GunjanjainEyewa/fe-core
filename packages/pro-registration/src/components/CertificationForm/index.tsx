import React from 'react';
import { styled } from '@eyewa/ui-components';
import { FileProps } from '../../types';
import InputBox from '../InputBox';
import DocumentUploader from '../DocumentUpload';

interface Props extends FileProps {
  label: string;
  value: string;
  onInputChange: (value: string) => void;
}

const Container = styled.section`
  margin: ${({ theme }) => theme.spacing.spacing80} 0;
  margin-left: ${({ theme }) => theme.spacing.spacing160};
`;

const CertifcateForm: React.FunctionComponent<Props> = ({ ...props }: Props) => {
  const {
    label, value, files, onInputChange, onUpload, onRemove,
  } = props;

  return (
    <Container>
      <InputBox
        label={label}
        value={value}
        isRequired
        margin
        onChange={(updatedValue) => onInputChange(updatedValue)}
      />
      <DocumentUploader
        files={files}
        onRemove={(fileName) => onRemove(fileName)}
        onUpload={(file, name) => onUpload(file, name)}
      />
    </Container>
  );
};

export default CertifcateForm;
