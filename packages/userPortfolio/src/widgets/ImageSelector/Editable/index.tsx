import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import ImageViewer from './ImageViewer';
import ColorCodeBar from './ColorCodeBar';
import SelectButton from '../../../components/RoundedButton';
import { SELECT_BUTTON_TEXT } from '../../../constants';
import { OptionData } from '../../../types';


const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
  color: #E2007D;
  width: 190px;
  align-self: center;
  background: white;
  margin: 24px 0;
`;


interface ImageSelectorProps {
  options: OptionData[];
  selectedValue?: OptionData[];
  handleClick: (selectedImage: OptionData) => void;
}

const ImageSelector = (props: ImageSelectorProps) => {
  const {
    options,
    selectedValue,
    handleClick,
  } = props;
  const [activeImage, setActiveImage] = useState(0);
  const [previousImage, setPreviousImage] = useState(0);

  useEffect(() => {
    // To get the index of selected image from list
    if (selectedValue && (selectedValue.length > 0)) {
      const updatedIndex = options && options.findIndex(
        (option: any) => (option.optionId === selectedValue[0].optionId),
      );
      if (updatedIndex > -1) {
        setActiveImage(updatedIndex);
      }
    }
  }, [selectedValue]);

  const handleImageSelect = (index: number) => {
    setPreviousImage(activeImage);
    setActiveImage(index);
  };

  const handleSelect = () => {
    const selectedImage = options[activeImage];
    handleClick(selectedImage);
  };

  return (
    <>
      <ColorCodeBar
        options={options}
        handleImageSelect={handleImageSelect}
        activeImage={activeImage}
        previousImage={previousImage}
      />
      <ImageViewer
        options={options}
        handleImageSelect={handleImageSelect}
        activeImage={activeImage}
      />
      <ButtonWrapper>
        <SelectButton
          text={SELECT_BUTTON_TEXT}
          handleInteraction={() => handleSelect()}
        />
      </ButtonWrapper>
    </>
  );
};

export default ImageSelector;
