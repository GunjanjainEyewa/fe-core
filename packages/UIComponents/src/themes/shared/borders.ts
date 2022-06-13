import { Borders } from '../types';

const radiusNone = '0';
const radius10 = '2px';
const radius20 = '4px';
const radius30 = '8px';
const radius40 = '16px';
const radius50 = '32px';
// this is deprecated using for backward compatibility
const radius60 = '12px';
const radiusFull = '100%';
const borders: Borders = {
  // need to discuss
  border100: {
    borderStyle: 'solid',
    borderWidth: '1px',
  },
  border150: {
    borderStyle: 'solid',
    borderWidth: '1.5px',
  },
  radiusNone,
  radius10,
  radius20,
  radius30,
  radius40,
  radius50,
  radiusFull,
  radius60,
};

// vradius0 -> radiusNone
//   vradius10 -> radius10
//   vradius20 =-> radius20,
//   vradius40 => radius30,
//   vradius60 =?,
//   vradius80 => radius40,
//   vradius160 => radius50,
//   vradiusFull =? radiusFull,

export default borders;
