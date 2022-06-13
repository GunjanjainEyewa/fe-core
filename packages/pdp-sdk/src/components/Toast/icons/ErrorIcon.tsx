import React, { memo } from 'react';

function ErrorIcon() {
  return (
    <svg viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7179 15.451L11.9209 0.816C11.6139 0.305 11.0749 0 10.4789 0C9.88289 0 9.34389 0.305 9.03789 0.815L0.239888 15.451C-0.0721117 15.97 -0.0801117 16.619 0.217888 17.146C0.514888 17.673 1.07589 18 1.68189 18H19.2769C19.8819 18 20.4439 17.673 20.7409 17.146C21.0389 16.619 21.0299 15.97 20.7179 15.451ZM9.47889 15V13H11.4789V15H9.47889ZM9.47889 11H11.4789V6H9.47889V11Z"
        fill="#B60000"
      />
    </svg>
  );
}

export default memo(ErrorIcon);
