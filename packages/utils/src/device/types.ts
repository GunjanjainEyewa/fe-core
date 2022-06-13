import { devices } from './constants';


export type Device = keyof typeof devices;

export type Client = {
  device: Device,
  version?: string,
};
