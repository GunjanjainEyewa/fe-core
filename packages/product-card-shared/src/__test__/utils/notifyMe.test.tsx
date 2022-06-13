import { emailIsValid } from '../../utils/noifyMe';

describe('GET VALID EMAIL', () => {
    test('it should return false when it receives invalid email', () => {
      expect(emailIsValid('xyz@gmail')).toBeFalsy();
      expect(emailIsValid('xyzgmail')).toBeFalsy();
      expect(emailIsValid('xyz@.com')).toBeFalsy();
      expect(emailIsValid(undefined)).toBeFalsy();
      expect(emailIsValid('')).toBeFalsy();
    });
    test('it should return true when it receives valid email', () => {
        expect(emailIsValid('xyz@gmail.com')).toBeTruthy();
        expect(emailIsValid('xyz@yahoo.com')).toBeTruthy();
    });
  });