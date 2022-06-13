import 'jsdom-global/register'; // for providing

import React from 'react';
import { mount, shallow } from 'enzyme';
import wrapWithTheme from '@nykaa/ui-components/themes/helpers/themeProvider';
import Tag from '../../components/CardInfo/Tags/TagName';

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

const dummyTag = MockNewTags[0];
const title = dummyTag?.title;
const tagColor = dummyTag.titleColor;
const Wrapper = wrapWithTheme(<Tag tag={title} showMultipleTag customStyle={dummyTag}/>, shallow);

describe('Component is Rendering', () => {
  test('With Tag', () => {
    expect(Wrapper.props().children).toEqual(title)
  });

  test('With Dynamic Tag Color', () => {
    const MountedWrapper = wrapWithTheme(<Tag tag={title} showMultipleTag customStyle={dummyTag}/>, mount);
    const Node = MountedWrapper.getDOMNode()[1];
    expect(window.getComputedStyle(Node).getPropertyValue('color')).toEqual(tagColor);
  });
})


describe('Desktop Tag Component works correctly with incorrect Inputs', () => {
  it('when passed unexpected data', () => {
    const OfferWrapper = wrapWithTheme(<Tag tag={[]} index={0}/>, shallow);
    expect(OfferWrapper).toEqual({});
  });

  it('when data was not provided', () => {
    const OfferWrapper = wrapWithTheme(<Tag index={0}/>, shallow);
    expect(OfferWrapper).toEqual({});
  });

  it('when passed unexpected data', () => {
    const OfferWrapper = wrapWithTheme(<Tag tag={null} index={0}/>, shallow);
    expect(OfferWrapper).toEqual({});
  });
})
