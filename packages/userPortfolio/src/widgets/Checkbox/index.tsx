import React, { useState } from 'react';
// import styled from '@emotion/styled';
import CheckBox from '../../components/CheckBox';
import NonSelectedInfo from './NotSelectedInfo';
import SelectedInfo from './SelectedInfo';
import { UserInfoProps } from '../../types/CheckboxWidget';


interface WidgetProps {
  questionText: string;
  attribute: string;
  isPrivateAttribute: boolean;
  isSkippable?: boolean;
  handleCallBack: (isSelected: boolean, attribute: string) => void;
  profilePic: string;
  name: string;
  showInfoSection: boolean;
  createdOnText: string;
  infoText: string;
  userInfo: UserInfoProps[]
}
const CheckBoxSelect = (props: WidgetProps) => {
  const {
    questionText,
    isPrivateAttribute = false,
    attribute,
    profilePic,
    name,
    showInfoSection,
    createdOnText,
    userInfo,
    infoText,
    handleCallBack,
  } = props;


  const [isSelected, setSelected] = useState(!isPrivateAttribute);
  const handleCheckBoxClick = () => {
    if (!showInfoSection) {
      handleCallBack(isSelected, attribute);
    }
    setSelected(!isSelected);
  };

  const handleGotItClick = () => {
    handleCallBack(!isSelected, attribute);
  };

  return (
    <>
      <CheckBox
        text={questionText}
        isSelected={isSelected}
        handleInteraction={handleCheckBoxClick}
      />
      {
        isSelected
          ? (
            <SelectedInfo
              profilePic={profilePic}
              name={name}
              createdOnText={createdOnText}
              userInfo={userInfo}
              showInfoSection={showInfoSection}
              handleInteraction={handleGotItClick}
            />
          )
          : (
            <NonSelectedInfo
              infoText={infoText}
              handleInteraction={handleGotItClick}
              showInfoSection={showInfoSection}
            />
          )
      }
    </>
  );
};

export default CheckBoxSelect;
