import React, { memo } from 'react';

function SuccessIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10ZM8.65176 11.714L14.8658 5.5L16.2588 6.89298L8.65176 14.5L4 9.84824L5.39298 8.45527L8.65176 11.714Z"
        fill="#008945"
      />
    </svg>
  );
}

export default memo(SuccessIcon);
