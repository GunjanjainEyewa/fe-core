import React from 'react';
import { styled } from '@nykaa/ui-components';
import { EmailFormProps, StyleProps } from '@nykaa/product-card-shared/types/notifyMe';


const Form = styled.form`
  ${({ theme }) => theme.borders.border100}
  border-color: ${({ theme, error }: StyleProps) => (error ? theme.colors.negative : theme.colors.state)};
  padding: ${({ theme }) => `${theme.spacing.spacing40} ${theme.spacing.spacing60}`};
  color: ${({ theme }) => theme.colors.state};
  border-radius: ${({ theme }) => theme.borders.radius20}
  display: flex;
  .input {
    display: inline-block;
    border: none;
    flex-grow: 1;
    ::placeholder {
      ${({ theme }) => theme.typography.bodyLarge};
      color: ${({ theme }) => theme.colors.state};
    }
    &:focus {
      outline: none;
    }
  }
  .submit-button {
    ${({ theme }) => theme.typography.buttonLarge};
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    left: 0;
    height: 50px;
    align-items: center;
    cursor: pointer;
 
  }
`;


function EmailForm({
  handleFormSubmit,
  handleChange,
  email,
  error,
}: EmailFormProps) {
  return (
    <Form error={error} onSubmit={handleFormSubmit}>
      <input
        type="email"
        className="input"
        placeholder="Your Email"
        value={email}
        onChange={handleChange}
      />
      <button type="submit" className="submit-button">
        Notify me
      </button>
    </Form>
  );
}

export default EmailForm;
