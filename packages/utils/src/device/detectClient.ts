import { Client, Device } from './types';
import {
  devices,
  ANDROID_APP,
  IOS_APP,
  ANDROID_VERSION,
  IOS_VERSION,
} from './constants';


const detectClient = (userAgent: string): Client => {
  if (!userAgent) {
    throw new Error('"userAgent" cannot be empty');
  }

  if (typeof userAgent !== 'string') {
    throw new Error(`"userAgent" has to be a string passes: ${userAgent}`);
  }


  let device: Device = devices.WEB;
  let version;

  if (userAgent.match(ANDROID_APP)) {
    device = devices.ANDROID;
    const [, versionString] = userAgent.match(ANDROID_VERSION) || [];
    if (versionString) {
      version = versionString;
    }
  }

  if (userAgent.match(IOS_APP)) {
    device = devices.IOS;
    const [, versionString] = userAgent.match(IOS_VERSION) || [];
    if (versionString) {
      version = versionString;
    }
  }

  return {
    device,
    version,
  };
};

export default detectClient;
