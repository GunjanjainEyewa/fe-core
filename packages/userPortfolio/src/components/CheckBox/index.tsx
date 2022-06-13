import React from 'react';
import { styled } from '@eyewa/ui-components';


const Wrapper = styled.div`
  border: none;
`;

const Input = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

const Label = styled.label`
 ${({ theme }) => theme.typography.subTitleMedium};
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 0;
  cursor: pointer;
  color: #001325;
`;

const Control = styled.div`
  position: absolute;
  top: 1px;
  left: 0;
  height: 20px;
  width: 20px;
  background: rgba(101, 119, 134, 0.08);
  border: 1.5px solid rgba(0, 19, 37, 0.16);
  box-sizing: border-box;
  border-radius: 4px;
  &.active {
    background: #EC0076;
    border-radius: 4px;
    border: 0;
    &::after {
      content: "";
      position: absolute;
      left: 8px;
      top: 4px;
      width: 3px;
      height: 8px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
`;

interface CheckBoxProps {
  text: string;
  handleInteraction: () => void;
  isSelected: boolean;
}

const CheckBox = (props: CheckBoxProps) => {
  const {
    text,
    handleInteraction,
    isSelected,
  } = props;

  return (
    <Wrapper>
      <Input
        id="checkbox"
        type="checkbox"
        onChange={(e) => {
          handleInteraction();
          e.stopPropagation();
        }}
        checked={isSelected}
      />
      <Label
        htmlFor="checkbox"
      >
        <span>
          {text}
        </span>
        <Control className={isSelected ? 'active' : ''} />
      </Label>
    </Wrapper>
  );
};

export default CheckBox;
