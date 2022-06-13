import React from 'react';

interface Props {
  size: number;
}

const StarInActive = ({ size }: Partial<Props>) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.00004 13.5166L4.20838 16.9499C4.15137 16.9933 4.08191 17.0172 4.01027 17.018C3.93862 17.0188 3.86863 16.9965 3.81064 16.9545C3.75266 16.9124 3.70978 16.8527 3.68836 16.7844C3.66694 16.716 3.66811 16.6425 3.69171 16.5749L5.47504 10.9582L0.733377 7.45822C0.679338 7.41521 0.639604 7.35683 0.619415 7.29077C0.599226 7.22472 0.599529 7.1541 0.620284 7.08823C0.641039 7.02235 0.681272 6.96431 0.735678 6.92177C0.790084 6.87922 0.856107 6.85416 0.925043 6.84989L6.81671 6.80822L8.68338 1.21655C8.7053 1.14987 8.74771 1.0918 8.80457 1.05063C8.86144 1.00947 8.92984 0.987305 9.00004 0.987305C9.07024 0.987305 9.13865 1.00947 9.19551 1.05063C9.25238 1.0918 9.29479 1.14987 9.31671 1.21655L11.1834 6.80822L17.075 6.84989C17.144 6.85416 17.21 6.87922 17.2644 6.92177C17.3188 6.96431 17.359 7.02235 17.3798 7.08823C17.4006 7.1541 17.4009 7.22472 17.3807 7.29077C17.3605 7.35683 17.3207 7.41521 17.2667 7.45822L12.525 10.9582L14.3084 16.5749C14.332 16.6425 14.3332 16.716 14.3117 16.7844C14.2903 16.8527 14.2474 16.9124 14.1894 16.9545C14.1315 16.9965 14.0615 17.0188 13.9898 17.018C13.9182 17.0172 13.8487 16.9933 13.7917 16.9499L9.00004 13.5166Z"
      fill="#001325"
      fillOpacity="0.92"
    />
  </svg>
);

export default StarInActive;