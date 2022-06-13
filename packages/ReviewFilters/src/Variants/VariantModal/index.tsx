import React from 'react';
import styled from '@emotion/styled';
import Close from './CloseIcon';
import Header from './VariantHeader';
import Variants from './Variants';
import { ThemeContext } from '../context';
import { ThemeProps, VariantModalProps } from '../../types';


const Wrapper = styled.section`
  span, i, strong, svg {
    display: inline-block;
  }
  svg {
    vertical-align: middle;
  }
`;

const ButtonWrapper = styled.div`
position: fixed;
bottom: 0;
display: flex;
text-align: center;
${({ theme }) => theme.typography.titleXSmall};
text-transform: uppercase;
border-top: 1px solid ${({ theme }: ThemeProps) => theme.lightBorder} !important;
width: 100%;
background-color: ${({ theme }: ThemeProps) => theme.backgroundColor};
`;

const ClearButton = styled.button`
  padding: 15px 0;
  width: 50%;
  border: none;
  color: ${({ theme }: ThemeProps) => theme.primaryColor};
  background-color: ${({ theme }: ThemeProps) => theme.backgroundColor};
  ${({ theme }) => theme.typography.buttonLarge};
  &:disabled {
    border: none;
    cursor: none;
    opacity: 0.2;
  }
`;
const ApplyButton = styled.button`
  padding: 15px 0;
  width: 50%;
  border: none;
  color: ${({ theme }: ThemeProps) => theme.backgroundColor};
  background-color: ${({ theme }: ThemeProps) => theme.primaryColor};
  ${({ theme }) => theme.typography.buttonLarge};
  &:disabled {
    border: none;
    cursor: none;
    opacity: 0.2;
    background-color: ${({ theme }: ThemeProps) => theme.lightGrey};
  }
`;
const ModalHeader = styled.div`
  padding: 16px 16px 0 16px;
  background-color: ${({ theme }: ThemeProps) => theme.backgroundColor};
  border-bottom: 1px solid ${({ theme }: ThemeProps) => theme.borderColor};
  position: sticky;
  top:0;
  z-index: 1;
`;
const TitleBox = styled.div`
  ${({ theme }) => theme.typography.titleMedium};
  color: ${({ theme }: ThemeProps) => theme.secondaryTextColor};
  margin-bottom: 10px;

  span {
    ${({ theme }) => theme.typography.bodyLarge};
  }
`;
const CloseBox = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;
const VariantModal: React.FC<VariantModalProps> = (props: VariantModalProps) => {
  const {
    options, closeModal,
    selectedVariants, handleApply,
    handleClick, handleClose, isSelected,
    updateVariants,
    variantType,
    applyDisabled,
    theme,
  } = props;
  const clearDisabled = !(selectedVariants && (selectedVariants.length > 0));
  return (
    <ThemeContext.Provider value={theme}>
      <Wrapper theme={theme}>
        <ModalHeader theme={theme}>
          <TitleBox theme={theme}>
            {`Filter ${variantType}`}
            {(selectedVariants && (selectedVariants.length > 0)) && (
              <span>
                {`(${selectedVariants.length})`}
              </span>
            )}
          </TitleBox>
          {/* // eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <CloseBox onClick={closeModal}>
            <Close />
          </CloseBox>
          <Header
            selectedVariants={selectedVariants}
            handleClose={handleClose}
          />
        </ModalHeader>
        <Variants
          options={options}
          handleClick={handleClick}
          isSelected={isSelected}
        />
        <ButtonWrapper theme={theme}>
          <ClearButton
            theme={theme}
            type="button"
            onClick={() => updateVariants([])}
            disabled={clearDisabled}
          >
            Clear All
          </ClearButton>
          <ApplyButton
            theme={theme}
            type="button"
            onClick={handleApply}
            disabled={applyDisabled}
          >
            Apply
          </ApplyButton>
        </ButtonWrapper>
      </Wrapper>
    </ThemeContext.Provider>
  );
};

export default VariantModal;
