// ! move this to __test__ 🤔
import {
  devices,
  detectClient,
} from '../device';

describe('device:detectClient', () => {
  it('should throw error when userAgent is empty/invalid', () => {
    expect(() => detectClient()).toThrow();
    expect(() => detectClient(false)).toThrow();
    expect(() => detectClient({})).toThrow();
  });

  it('should return "web" when a valid user agent is passed', () => {
    expect(detectClient('Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Mobile Safari/537.36'))
      .toEqual({
        device: devices.WEB,
      });
  });

  it('should return "android" when the custom android agent is passed', () => {
    expect(detectClient('Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.75 Mobile Safari/537.36 nykaa-android-version:2.4.2'))
      .toEqual({
        device: devices.ANDROID,
        version: '2.4.2',
      });
  });

  it('should return "ios" when the custom ios agent is passed', () => {
    expect(detectClient('Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.75 Mobile Safari/537.36 nykaa-ios-version:3.5.1'))
      .toEqual({
        device: devices.IOS,
        version: '3.5.1',
      });
  });
});
