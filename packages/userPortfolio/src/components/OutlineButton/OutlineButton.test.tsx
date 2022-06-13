import 'jsdom-global/register'; // for providing

import React from 'react';
import { mount } from 'enzyme';
import OutlineButton from './';
import wrapWithTheme from '../../helpers/themeProvider';

describe('OutlineButton button', () => {
  it('should render the button', () => {
    const wrapper = wrapWithTheme(
      <OutlineButton handleInteraction={() => {}} text ='Skip for now' />,
      mount
    );
    expect(wrapper.text()).toBe('Skip for now');
  });

  it('should render custom text for button', () => {
    const wrapper = wrapWithTheme(
      <OutlineButton text="Custom text" handleInteraction={() => {}} />,
      mount
    );
    expect(wrapper.text()).toBe('Custom text');
  });

  it('should handle click on the button', () => {
    const mockCallback = jest.fn();
    const wrapper = wrapWithTheme(
      <OutlineButton handleInteraction={mockCallback} text="Custom text" />,
      mount
    );

    const button = wrapper.find(OutlineButton).find('button');
    button.simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(1);
    button.simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(2);
  });

  it('should disable the button', () => {
    const mockCallback = jest.fn();
    const wrapper = wrapWithTheme(
      <OutlineButton isDisabled={true} handleInteraction={mockCallback} text="Custom text" />,
      mount
    );

    const button = wrapper.find(OutlineButton).find('button');
    button.simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(0);
    button.simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(0);
  });
})
