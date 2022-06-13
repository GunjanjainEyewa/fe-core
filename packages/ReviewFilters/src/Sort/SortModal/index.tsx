import React from 'react';
import { styled } from '@eyewa/ui-components';
import { ThemeContext } from '../context';
import { SortModalProps, ThemeProps, OptionForSortModal } from '../../types';


const SortList = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 3;
  width: 92%;
  color: #3f414d;
  background-color: ${({ theme }: ThemeProps) => theme.backgroundColor};
  padding: 15px;
  border-radius: 2px 2px 0 0;
  font-weight: 600;
  max-width: 640px;
`;
const Text = styled.strong`
  display: inline-block;
  ${({ theme }) => theme.typography.bodyMedium};
  &.active {
    ${({ theme }) => theme.typography.subTitleMedium};
  }
`;
const CheckMark = styled.span`
  position: absolute;
  display:flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: ${({ theme }: ThemeProps) => theme.backgroundColor};
  border-radius: 50%;
  border: 1px solid ${({ theme }: ThemeProps) => theme.lightGrey};
  &:after {
    content: "";
    position: absolute;
    display: none;
  } 
`;
const Title = styled.div`
  ${({ theme }) => theme.typography.titleMedium};
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }: ThemeProps) => theme.lightBorder};
  margin-bottom: 24px;
`;
const CheckBox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;
const OptionWrapper = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 22px;
  cursor: pointer;
  ${({ theme }) => theme.typography.bodyLarge};
  &:focus{
    outline: none;
  }
  &:hover {
    .checkmark {
      background-color: transparent;
      border: 1px solid ${({ theme }: ThemeProps) => theme.primaryColor};
    }   
  }
`;
const ActiveState = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ theme }: ThemeProps) => theme.primaryColor};
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  background-color: rgba(0,0,0,0.5);
`;

const SortModal = ({
  options, text, changeSort, theme,
}: SortModalProps) => (
  <ThemeContext.Provider value={theme}>
    <section className="reviews-sort">
      <SortList theme={theme}>
        <Title theme={theme}>
          {text}
        </Title>
        {options && (options.map((option: OptionForSortModal) => (
          <OptionWrapper
            theme={theme}
            role="button"
            tabIndex={0}
            key={option.id}
            onClick={() => changeSort(option.id)}
            htmlFor={option.text}
          >
            <Text className={`${option.isSelected ? 'active' : ''}`}>
              {option.text}
            </Text>
            <CheckBox
              theme={theme}
              type="radio"
              name="radio"
              className={`${option.isSelected ? 'active' : ''}`}
            />
            {
            (option.isSelected)
              ? (
                <CheckMark theme={theme} className="checkmark">
                  <ActiveState theme={theme} />
                </CheckMark>
              )
              : (<CheckMark theme={theme} className="checkmark" />)
            }
          </OptionWrapper>
        )))}
      </SortList>
      <Overlay />
    </section>
  </ThemeContext.Provider>
);
export default SortModal;
