import 'jsdom-global/register'; // for providing

import React from 'react';
import { mount, render } from 'enzyme';
import PillButton from './';
import wrapWithTheme from '../../helpers/themeProvider';

describe('Pill button', () => {
  const data = {
    option: { value: 'Amazing Option', optionId: 'fsd'}, isSelected: false
  };

  const dataSelected = {
    option: { value: 'Amazing Option', optionId: 'fsd'}, isSelected: true
  }

  it('should render the button', () => {
    const wrapper = wrapWithTheme(
      <PillButton {...data} handleClick={() => {}} />,
      mount
    );
    expect(wrapper.text()).toBe(data.option.value);
  });

  it('should handle click on the button', () => {
    const mockCallback = jest.fn();
    const wrapper = wrapWithTheme(
      <PillButton {...data} handleClick={mockCallback} />,
      mount
    );

    const button = wrapper.find(PillButton).find('button');
    button.simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(1);
    button.simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(2);
  });

  it('should render the selected state', () => {
    const wrapper = wrapWithTheme(
      <PillButton {...dataSelected} handleClick={() => {}} />,
      mount
    );
    expect(wrapper.find('button.selected')).toHaveLength(1);
  });

  it('should render the unselected state', () => {
    const wrapper = wrapWithTheme(
      <PillButton {...data} handleClick={() => {}} />,
      mount
    );
    expect(wrapper.find('button.selected')).toHaveLength(0);
  });
})