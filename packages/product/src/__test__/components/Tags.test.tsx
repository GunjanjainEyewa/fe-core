import 'jsdom-global/register'; // for providing

import React from 'react';
import { mount, shallow } from 'enzyme';
import wrapWithTheme from '@eyewa/ui-components/themes/helpers/themeProvider';
import Tag from '../../Tags';

const MockNewTags = [
  {
    title: 'Bestseller',
    borderColor: '#fff',
    bgColor: 'rgb(255, 238, 215)',
    titleColor: 'rgb(248, 100, 157)',
    fontSize: '14px',
    fontWeight: 500,
    opacity: 0.6,
  },
  {
    title: 'Featured',
    bgColor: '#ffeed7',
    borderColor: '#fff',
    titleColor: '#fea838',
    fontSize: '14px',
    fontWeight: 500,
    opacity: 0.6,
  },
  {
    title: 'Offer',
    bgColor: '#ffeed7',
    borderColor: '#fff',
    titleColor: '#fea838',
    fontSize: '14px',
    fontWeight: 500,
    opacity: 0.6,
  },
];

const MockNewTag = MockNewTags[0];
const Wrapper = wrapWithTheme(<Tag tag={MockNewTag.title} showMultipleTag customStyle={MockNewTag}/>, shallow);

describe('Component is Rendering', () => {
  test('With Tag', () => {
    expect(Wrapper.props().children).toEqual(MockNewTag.title)
  });

  test('With Dynamic Tag Color', () => {
    const MountedWrapper = wrapWithTheme(<Tag tag={MockNewTag.title} showMultipleTag customStyle={MockNewTag}/>, mount);
    const Node = MountedWrapper.getDOMNode()[1];
    expect(window.getComputedStyle(Node).getPropertyValue('color')).toEqual(MockNewTag.titleColor);
  });

  test('With tag class styling when custom style is not provided', () => {
    const MountedWrapper = wrapWithTheme(<Tag tag={MockNewTag.title} />, mount);
    const defaultColor = 'rgb(104, 166, 119)';
    const Node = MountedWrapper.getDOMNode()[1];
    expect(window.getComputedStyle(Node).getPropertyValue('color')).toEqual(defaultColor);
  });
});


describe('Component works correctly with incorrect Inputs', () => {
  it('When passed unexpected data', () => {
    const OfferWrapper = wrapWithTheme(<Tag tag={[]} index={0}/>, shallow);
    expect(OfferWrapper).toEqual({});
  });

  it('When data was not provided', () => {
    const OfferWrapper = wrapWithTheme(<Tag index={0}/>, shallow);
    expect(OfferWrapper).toEqual({});
  });

  it('When passed unexpected data', () => {
    const OfferWrapper = wrapWithTheme(<Tag tag={null} index={0}/>, shallow);
    expect(OfferWrapper).toEqual({});
  });
})

