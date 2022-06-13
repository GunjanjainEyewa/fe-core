import { getPageLocation } from '../../utils';

const input = {
  root: 'search',
  categoryId: '123',
  suggestionType: 'type',
};
const output = {
  pageType: 'Search',
  listingPageType: 'type',
  id: '123',
};
const defaultOutput = {
  pageType: 'Listing',
  listingPageType: '',
  id: '',
};
describe('get page location', () => {
  test('should return page location when we pass location params', () => {
    expect(getPageLocation(input)).toEqual(output);
  });
  test('should return location when we pass invalid location', () => {
    expect(getPageLocation(null)).toEqual(defaultOutput);
    expect(getPageLocation(undefined)).toEqual(defaultOutput);
    expect(getPageLocation({ categoryId: '' })).toEqual(defaultOutput);
  });
});
