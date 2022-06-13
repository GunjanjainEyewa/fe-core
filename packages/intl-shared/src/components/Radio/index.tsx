import React from 'react';
import { styled } from '@eyewa/ui-components';
import { Theme } from '@eyewa/ui-components/themes/types';

interface Props {
  label?: any,
  isSelected: boolean,
  onClick: ()=> void,
}

interface WrapperProps {
  onClick: ()=>void
  isSelected: boolean,
}

function Radio(props: Props) {
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
    cursor: pointer;
    color: #151515;
    font-weight: ${(styleProps: WrapperProps) => (styleProps.isSelected ? 'bold' : 'intitial')};
  `;

  const CircleWrapper = styled.div`
    margin-right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1.5px solid ${({ theme }) => theme.colors.primary};
    background: ${({ isSelected, theme }: { isSelected: boolean, theme: Theme }) => (isSelected ? theme.colors.primary : 'transparent')};
    position: relative;
    &:before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 3px;
      height: 8px;
      margin-top: -6px;
      margin-left: -2.5px;
      border: solid ${({ theme }) => theme.colors.white};
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  `;

  const {
    onClick = null,
    isSelected = false,
    label = '',
  } = props;

  return (
    <Wrapper
      onClick={onClick}
      isSelected={isSelected}
    >
      <CircleWrapper isSelected={isSelected} />
      { label }
    </Wrapper>
  );
}

export default Radio;
