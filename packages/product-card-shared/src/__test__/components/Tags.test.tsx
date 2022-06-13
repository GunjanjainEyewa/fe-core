import 'jsdom-global/register'; // for providing

import React from 'react';
import { mount } from 'enzyme';
import { NewTags } from '../../types/tags';
import CommmonComponent from '../../components/TagsComponent';

const TestComponent = ({ tag, index }) => (<div data-testid={`tag-${index}`}>{tag}</div>);

let Tags = ['Offer', 'Bestseller'];

const newTags: NewTags[] = [
  {
    title: 'Bestseller',
    borderColor: '#fff',
    bgColor: '#ffeed7',
    titleColor: '#f8649d',
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

const updatedTags = newTags.map((tag) => tag.title);
const sortedPDTTagTitles = updatedTags.sort();

const wrapper = mount(
  <CommmonComponent
    tags={updatedTags}
    Component={TestComponent}
    newTagsStyle={newTags}
    showMultipleTag
  />
);

const DynamicTagsWrapper = mount(
  <CommmonComponent
    tags={Tags}
    Component={TestComponent}
    showMultipleTag={false}
  />
);

describe('Component is rendering', () => {
  it('Null is not rendered', () => expect(wrapper).not.toEqual(null));
  it('Component is rendered', () => expect(wrapper).toBeTruthy());
});

describe('Test Tags rendering', () => {
  for(let i = 0 ; i<newTags.length; i++) {
    const tempTagName = newTags[i].title || '';
    it(`${tempTagName} Tag Rendered!`, () => expect(wrapper.contains(tempTagName)).toBeTruthy());
  }
});

describe('Tags sorting', () => {
  const sortedTagTitles = Tags.sort();
  for(let i = 0 ; i<sortedTagTitles.length; i++) {
    const testId = `tag-${i}`;
    it('${sortedTagTitles[i]} id Sorted tags for Dynamic Tags', () => {
      expect(DynamicTagsWrapper.find({'data-testid': testId}).text()).toEqual(sortedTagTitles[i]);
    });
  }
  it('Non Sorted tags for PDT Tags', () => {
    for(let i = 0 ; i<sortedPDTTagTitles.length; i++) {
      const testId = `tag-${i}`;
      expect(wrapper.find({'data-testid': testId}).text()).toEqual(sortedPDTTagTitles[i]);
    }
  });
});
