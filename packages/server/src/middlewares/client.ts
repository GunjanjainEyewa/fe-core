import { Response, Request, NextFunction } from 'express';
import { Client, Device } from '@nykaa/utils/device';
import { devices } from '@nykaa/utils/device/constants';


const IOS_APP = /nykaa-ios/i;
const IOS_VERSION = /nykaa-ios-version:([\d.]+)/;
const ANDROID_APP = /nykaa-android/i;
const ANDROID_VERSION = /nykaa-android-version:([\d.]+)/;

const extractClientView = (req: Request, res: Response, next: NextFunction) => {
  const { headers } = req;
  const userAgent = headers['user-agent'];

  let device: Device = devices.WEB;
  let version;

  if (userAgent?.match(IOS_APP)) {
    device = devices.IOS;
    version = userAgent?.match(IOS_VERSION)?.[1] || '';
  } else if (userAgent?.match(ANDROID_APP)) {
    device = devices.ANDROID;
    version = userAgent.match(ANDROID_VERSION)?.[1] || '';
  }

  const client: Client = {
    device,
    version,
  };

  res.locals.client = client;

  next();
};

export default extractClientView;
