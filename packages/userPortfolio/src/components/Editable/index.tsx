import React from 'react';
import styled from '@emotion/styled';

import { Option } from '../PillButton';
import PillButtons from '../PillButtonGroup';
import { OptionData } from '../../types';

const OptionWrapper = styled.div`
  text-align: right;
`;

interface EditProps {
  options: Option[];
  handleClick: (option: Option) => void;
  selectedValues?: OptionData[];
}

const Edit = (props: EditProps) => {
  const {
    options,
    handleClick,
    selectedValues,
  } = props;
  return (
    <>
      <OptionWrapper>
        <PillButtons
          options={options}
          selectedValues={selectedValues}
          handleClick={handleClick}
        />
      </OptionWrapper>
    </>
  );
};
export default Edit;
