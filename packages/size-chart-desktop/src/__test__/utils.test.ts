import getWidth from '../utils';


const threeColumns = [
  {
    id: '1',
    text: 'text',
  },
  {
    id: '2',
    text: 'text',
  },
  {
    id: '3',
    text: 'text',
  },
];
const fourColumns = [
  {
    id: '1',
    text: 'text',
  },
  {
    id: '2',
    text: 'text',
  },
  {
    id: '3',
    text: 'text',
  },
  {
    id: '4',
    text: 'text',
  },
];
describe('Test for getWidth function', () => {
  it('should return 0 if column is empty', () => {
    expect(getWidth([])).toEqual(0);
  });
  it('should return 0 if we passing null', () => {
    expect(getWidth(null)).toEqual(0);
  });
  it('should return 0 if we passing undefined', () => {
    expect(getWidth(undefined)).toEqual(0);
  });
  it('should return 400 if column length is less then or equals to 3', () => {
    expect(getWidth(threeColumns)).toEqual(420);
  });
  it('should return calculated width if column length is greater then or equals to 4', () => {
    expect(getWidth(fourColumns)).toEqual(520);
  });
});
