import validationCheck from '../../utils/validation';

const testInput1 = {
  value: '',
  label: 'Test 1',
  isRequired: true
}
const testOutput1 = 'Test 1 is required';

const testInput2 = {
  value: '12345',
  label: 'Test 2',
  isRequired: true,
  regex: new RegExp('^[0-9]{6}$'),
}
const testOutput2 = 'Test 2 is invalid';

const testInput3 = {
  value: '123456',
  label: 'Test 3',
  isRequired: true,
  regex: new RegExp('^[0-9]{6}$'),
}

const testInput4 = {
  value: '',
  label: 'Test 4',
  isRequired: false,
}

describe("sanitize Social Login Test", () => {
  it("should return a string for required validation",() => {
    const { value, label, isRequired } = testInput1;
    expect(validationCheck(value, label, isRequired)).toEqual(testOutput1);
  });
  it("should return a string for invalid input by user since it doesn't matches the pattern",() => {
    const { value, label, isRequired, regex} = testInput2;
    expect(validationCheck(value, label, isRequired, regex)).toEqual(testOutput2);
  });
  it("should return null since it does matches the pattern",() => {
    const { value, label, isRequired, regex} = testInput3;
    expect(validationCheck(value, label, isRequired, regex)).toBeNull();
  });
  it("should return null even if value is empty string since it is not required",() => {
    const { value, label, isRequired } = testInput4;
    expect(validationCheck(value, label, isRequired)).toBeNull();
  });
})