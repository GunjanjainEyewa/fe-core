import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import SingleSelect from '../src/widgets/SingleSelect';
import Question from '../src/components/Question';
import MultiSelect from '../src/widgets/MultiSelect';
import CheckBox from '../src/widgets/Checkbox';
import actionTypes from './actionTypes';
import ImageSelect from '../src/widgets/ImageSelector';
import TextSelect from '../src/widgets/TextWidget';
import { questionData, CheckBoxWidgetData, ImageSelectData } from './constants';

export default {
  title: 'UserPortfolio',
  component: SingleSelect,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex'
    },
  },
};


export const SingleSelectWidget = () => (
  <SingleSelect
    attribute={questionData.attribute}
    questionText={questionData.questionText}
    options={questionData.options}
    selectedValues={questionData.selectedValues}
    handleSelectAnswer={action(actionTypes.CLICK_ON_ANSWER)}
    isSkippable = {questionData.isSkippable}
    showEditButton={true}
    isPrivate={questionData.isPrivate}
    isEditable={true}
    keyIndex={3}
    handleEditClick={action(actionTypes.CLICK_ON_EDIT)}
    handleSkipClick={action(actionTypes.CLICK_ON_SKIP)}
  />
);

export const QuestionComponent = () => (
  <div>
    <Question text="testing the question part of portfolio" />
    <Question text="testing the question part of portfolio with very long text to check how it looks in multiple lines"/>
  </div>
);

export const MultiSelectWidget = () => (
  <MultiSelect
    attribute={questionData.attribute}
    questionText={questionData.questionText}
    options={questionData.options}
    selectedValues={questionData.selectedValues}
    handleSelectAnswer={action(actionTypes.CLICK_ON_ANSWER)}
    handleSkipClick={action(actionTypes.CLICK_ON_SKIP)}
    isSkippable = {questionData.isSkippable}
    isPrivate={questionData.isPrivate}
    showEditButton={true}
    isEditable={true}
    keyIndex={1}
    handleEditClick={action(actionTypes.CLICK_ON_EDIT)}
  />
);

export const CheckBoxWidget = () => (
  <CheckBox
    attribute={CheckBoxWidgetData.attribute}
    questionText={CheckBoxWidgetData.questionText}
    isPrivateAttribute={CheckBoxWidgetData.isPrivateAttribute}
    handleCallBack={action(actionTypes.CLICK_ON_CHECKBOX_BUTTON)}
    isSkippable = {CheckBoxWidgetData.isSkippable}
    profilePic={CheckBoxWidgetData.profilePic}
    name={CheckBoxWidgetData.name}
    showInfoSection={CheckBoxWidgetData.showInfoSection}
    createdOnText={CheckBoxWidgetData.createdOnText}
    userInfo={CheckBoxWidgetData.userInfo}
    infoText={CheckBoxWidgetData.infoText}
  />
);


export const ImageSelectWidget = () => (
  <ImageSelect
    attribute={ImageSelectData.attribute}
    questionText={ImageSelectData.questionText}
    options={ImageSelectData.options}
    handleSelectAnswer={action(actionTypes.CLICK_ON_ANSWER)}
    isSkippable = {ImageSelectData.isSkippable}
    showEditButton={true}
    isPrivate={ImageSelectData.isPrivate}
    handleSkipClick={action(actionTypes.CLICK_ON_SKIP)}
    showInfoSection={true}
    selectedValue={ImageSelectData.selectedValues}
    infoText={ImageSelectData.infoText}
    isEditable={true}
    keyIndex={0}
    handleEditClick={action(actionTypes.CLICK_ON_EDIT)}
  />
);

export const TextWidget = () => (
  <TextSelect
    attribute={ImageSelectData.attribute}
    questionText={ImageSelectData.questionText}
    option={{value: 'Sure Why not!', optionId: 'Sure Why Not!'}}
    handleSelectAnswer={action(actionTypes.CLICK_ON_ANSWER)}
  />
);
