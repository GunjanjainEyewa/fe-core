import { checkEligibilty } from '../utils/region';

describe('Test for checkRegionalizationABStatus function', () => {
  it('should return false if cookie value does not match with variants list', () => {
    expect(checkEligibilty(['A', 'B'], 'C')).toEqual(false);
  });
  it('should return true if cookie value matches with variants list', () => {
    expect(checkEligibilty(['A', 'B'], 'A')).toEqual(true);
  });
  it('should return false if variants list is empty', () => {
    expect(checkEligibilty([], 'A')).toEqual(false);
  });
  it('should return false if variants list is marked as *', () => {
    expect(checkEligibilty(['*'], 'A')).toEqual(true);
  });
  it('should return false if variants list is marked as * and empty cookie', () => {
    expect(checkEligibilty(['*'], '')).toEqual(true);
  });
});
