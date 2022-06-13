import React, { memo } from 'react';

function WarningIcon() {
  return (
    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.555 9.927L12.072 0.444C11.48 -0.148 10.519 -0.148 9.927 0.444L0.444 9.927C-0.148 10.519 -0.148 11.48 0.444 12.072L9.927 21.555C10.519 22.147 11.48 22.147 12.072 21.555L21.555 12.072C22.147 11.48 22.147 10.52 21.555 9.927ZM11.999 16H9.999V14H11.999V16ZM9.999 12H11.999V6H9.999V12Z"
        fill="#DE3800"
      />
    </svg>
  );
}

export default memo(WarningIcon);
