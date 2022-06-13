import React from 'react';
import { DEFAULT_VIEWPORT } from '@storybook/addon-viewport';
import { styled } from '@eyewa/ui-components';
import { action } from '@storybook/addon-actions';
import ArrowIcon from '../src/Icons/Arrow';
import CrossIcon from '../src/Icons/CloseIcon';


const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export default {
  title: 'Image shared icon',
  component: ArrowIcon,
  parameters: {
    viewport: {
      viewports: DEFAULT_VIEWPORT,
      defaultViewport: 'some default',
    },
  },
}


export const ImageIcon = () => (
  <>
  <Wrapper>
    <ArrowIcon inactive={true} forwardArrow={false}/>
    <img src="https://images-static.nykaa.com/prod-review/1617775570548_db193b7c-fd68-4856-892f-808df849621b_1.jpg?tr=w-550,h-550,pr-true" />
    <ArrowIcon inactive={false} forwardArrow={true}/>
    <CrossIcon/>
  </Wrapper>
  </>
);
