import React, { memo } from 'react';

function InfoIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM9 15V9H11V15H9ZM9 5V7H11V5H9Z"
        fill="#006DFF"
      />
    </svg>
  );
}

export default memo(InfoIcon);
