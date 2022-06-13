import 'jsdom-global/register'; // for providing

import React from 'react';
import { mount, render } from 'enzyme';
import RoundedButton from './';
import wrapWithTheme from '../../helpers/themeProvider';

describe('RoundedButton button', () => {
  it('should render the button', () => {
    const wrapper = wrapWithTheme(
      <RoundedButton handleInteraction={() => {}} text="Next" />,
      mount
    );
    expect(wrapper.text()).toBe('Next');
  });

  it('should render custom text for button', () => {
    const wrapper = wrapWithTheme(
      <RoundedButton text="Custom text" handleInteraction={() => {}} />,
      mount
    );
    expect(wrapper.text()).toBe('Custom text');
  });

  it('should handle click on the button', () => {
    const mockCallback = jest.fn();
    const wrapper = wrapWithTheme(
      <RoundedButton handleInteraction={mockCallback} text="Custom text" />,
      mount
    );

    const button = wrapper.find(RoundedButton).find('button');
    button.simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(1);
    button.simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(2);
  });

  it('should disable the button', () => {
    const mockCallback = jest.fn();
    const wrapper = wrapWithTheme(
      <RoundedButton isDisabled={true} handleInteraction={mockCallback} text="Custom text" />,
      mount
    );

    const button = wrapper.find(RoundedButton).find('button');
    button.simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(0);
    button.simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(0);
  });
})
