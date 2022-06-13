import { transformedSizeData } from '../utils';


const inputSizeData = {
  underbust: { inch: '29-30', cm: '77-79' },
  overbust: { inch: '30-31', cm: '77-79' },
  overbust2: { inch: '30-31', cm: '77-79' },
  sleeve: { inch: '30-31', cm: '77-79' },
  overbust3: { inch: '30-31', cm: '77-79' },
};

const inputSizeOptions = [
  { id: 'underbust', text: 'UNDERBUST' },
  { id: 'overbust', text: 'OVERBUST' },
  { id: 'overbust2', text: 'Overbust Size two' },
  { id: 'sleeve', text: 'Sleeve Length' },
  { id: 'overbust3', text: 'Overbust Size Three' },
];

const transformSizeOption = [
  { data: { cm: '77-79', inch: '29-30' }, id: 'underbust', text: 'UNDERBUST' },
  { data: { cm: '77-79', inch: '30-31' }, id: 'overbust', text: 'OVERBUST' },
  { data: { cm: '77-79', inch: '30-31' }, id: 'overbust2', text: 'Overbust Size two' },
  { data: { cm: '77-79', inch: '30-31' }, id: 'sleeve', text: 'Sleeve Length' },
  { data: { cm: '77-79', inch: '30-31' }, id: 'overbust3', text: 'Overbust Size Three' },
];

const transformSizeOptionWithDataUndefined = [
  { data: undefined as any, id: 'underbust', text: 'UNDERBUST' },
  { data: undefined, id: 'overbust', text: 'OVERBUST' },
  { data: undefined, id: 'overbust2', text: 'Overbust Size two' },
  { data: undefined, id: 'sleeve', text: 'Sleeve Length' },
  { data: undefined, id: 'overbust3', text: 'Overbust Size Three' },
];


describe('Test for transformSizeData function', () => {
  it('should return empty array when we pass sizeColumns empty', () => {
    expect(
      transformedSizeData({ sizeData: inputSizeData, sizeColumns: [] }),
    )
      .toEqual([]);
  });
  it('should return empty array when we pass sizeColumns null', () => {
    expect(
      transformedSizeData({ sizeData: inputSizeData, sizeColumns: null }),
    )
      .toEqual([]);
  });
  it('should return empty array when we pass sizeColumns undefined', () => {
    expect(
      transformedSizeData({ sizeData: inputSizeData, sizeColumns: undefined }),
    )
      .toEqual([]);
  });
  it('should return transform sizeData with data undefined when we pass sizeData empty and sizeColumns', () => {
    expect(
      transformedSizeData({ sizeData: {}, sizeColumns: inputSizeOptions }),
    )
      .toEqual(transformSizeOptionWithDataUndefined);
  });
  it('should return empty array when we pass sizeData null and sizeColumns', () => {
    expect(
      transformedSizeData({ sizeData: null, sizeColumns: inputSizeOptions }),
    )
      .toEqual([]);
  });
  it('should return empty array when we pass sizeData null and sizeColumns', () => {
    expect(
      transformedSizeData({ sizeData: undefined, sizeColumns: inputSizeOptions }),
    )
      .toEqual([]);
  });
  it('should return transform sizeData when we pass sizeData and sizeColumns', () => {
    expect(
      transformedSizeData({ sizeData: inputSizeData, sizeColumns: inputSizeOptions }),
    )
      .toEqual(transformSizeOption);
  });
});
