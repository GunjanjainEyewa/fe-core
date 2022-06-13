import React from 'react';
import { dateTypes } from '../constants';

const getMarkerPos = (markerAmount: number, maxAmount: number): number => {
  const percent: number = (markerAmount * 100) / maxAmount;
  return percent;
};

export default getMarkerPos;

export const getUpdatedDate = (date: string | number, type?: string) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const monthShort = dateObj.toLocaleDateString('en-US', { month: 'short' });
  // const monthLong = dateObj.toLocaleDateString("en-US",{ month: 'long' });
  // const monthNum = dateObj.toLocaleDateString("en-US",{ month: 'numeric' });
  const fullYear = dateObj.getFullYear();
  switch (type) {
    case dateTypes.membershipCard:
      return `${monthShort} ${fullYear}`;
    default:
      return `${day} ${monthShort} ${fullYear}`;
  }
};

type ImageProps = {
  imgUrl: string;
  altText: string;
};

export const getImgElementFromUrl = ({ imgUrl = '', altText = 'image' }:ImageProps) => React.createElement('img', { src: imgUrl, alt: altText });
