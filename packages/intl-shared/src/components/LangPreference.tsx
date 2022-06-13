import React, { useState } from 'react';
import { styled as Styled } from '@nykaa/ui-components';
import Radio from './Radio';
import { RequiredKeys } from '../types';

interface Props {
  options: RequiredKeys[],
  defaultSelected: number,
  onChange: (index: number) => void,
}

const UnorderedList = Styled.ul`
  margin: 25px 0;
`;

function LangPreference(props: Props) {
  const { options, defaultSelected } = props;
  const [isSelected, setIsSelected] = useState(defaultSelected);
  const handleRadioClick = (item: RequiredKeys, index: number) => {
    setIsSelected(index);
    props.onChange(index);
  };

  const printOptions = () => options?.map((item, index) => (
    <Radio
      key={item?.ID}
      isSelected={index === isSelected}
      onClick={() => handleRadioClick(item, index)}
      label={item?.TITLE}
    />
  ));

  return (
    <UnorderedList>
      { printOptions() }
    </UnorderedList>
  );
}

export default LangPreference;
