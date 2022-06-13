import React, { useState } from 'react';
import { styled } from '@nykaa/ui-components';
import { EmailFormProps, StyleProps } from '@nykaa/product-card-shared/types/notifyMe';
import { ProgressStrip } from '@nykaa/product-card-desktop/components/Animation';
import BellIcon from '@nykaa/size-chart-shared/Icons/Bell';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;
const Form = styled.input`
  ${({ theme }) => theme.borders.border100}
  border-color: ${({ theme, error }: StyleProps) => (error ? theme.colors.negative : hexToRgb(theme.colors.state, 0.22))};
  padding: ${({ theme }) => `${theme.spacing.spacing40} ${theme.spacing.spacing60}`};
  color: ${({ theme }) => theme.colors.state};
  border-radius: ${({ theme }) => theme.borders.radius10};
  height: 42px;
  margin-right: ${({ theme }) => theme.spacing.spacing40};
  display: inline-block;
  flex-grow: 1;
  &::placeholder {
    ${({ theme }) => theme.typography.bodyMedium};
    color: ${({ theme }) => theme.colors.state};
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
const SubmitButton = styled(ProgressStrip)`
  ${({ theme }) => theme.typography.buttonLarge};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borders.radius10};
  border: none;
  height: 45px;
  width: 20%;
  min-width: 134px;
  display: flex;
  justify-content: center;
  height: 50px;
  align-items: center;
  cursor: pointer;
  height: 42px;
`;
const Icon = styled.i`
  height: 16px;
  width: 16px;
  margin-left: 0;
  margin-right: ${({ theme }) => theme.spacing.spacing20};
`;


function EmailForm({
  handleFormSubmit,
  handleChange,
  email,
  error,
}: EmailFormProps) {
  const [animationClass, setAnimationClass] = useState('');
  const handleSubmit = (e: React.FormEvent<Element>) => {
    setAnimationClass('progress-striped');
    handleFormSubmit(e);
    setTimeout(() => {
      setAnimationClass('');
    }, 2500);
  };
  return (
    <Wrapper>
      <Form
        type="email"
        className="input"
        placeholder="Enter the Email Address"
        value={email}
        onChange={handleChange}
        error={error}
      />
      <SubmitButton
        type="button"
        className={animationClass}
        onClick={(e: React.FormEvent<Element>) => handleSubmit(e)}
      >
        <Icon>
          <BellIcon />
        </Icon>
        Notify me
      </SubmitButton>
    </Wrapper>
  );
}

export default EmailForm;
