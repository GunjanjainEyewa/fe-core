// libs
import React, { memo, useState, useEffect } from 'react';
import { keyframes } from '@emotion/core';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';

// components
import WarningIcon from '../icons/WarningIcon';
import ErrorIcon from '../icons/ErrorIcon';
import InfoIcon from '../icons/InfoIcon';
import SuccessIcon from '../icons/SuccessIcon';

// constants
import { TOASTER_TYPES, TOASTER_CLASSES } from '../constants';

// styles

const slideUp = keyframes`
    from {
        transform: translateX(-50%) translateY(150%);
    }

    to {
        transform: translateX(-50%) translateY(-50px);
    }
`;

const slideDown = keyframes`
    from {
        transform: translateX(-50%) translateY(-50px);
    }

    to {
        transform: translateX(-50%) translateY(150%);
    }
`;

const Container = styled.div`
    align-items: center;
    justify-content: center;
    bottom: 10px;
    display: flex;
    max-width: 100%;
    left: 50%;
    position: fixed;
    animation: ${slideUp} 0.35s ease forwards;
    z-index: 10;
    padding: ${({ theme }) => theme.spacing.spacing40} 0;
    min-width: 95%;
    border-radius: ${({ theme }) => theme.borders.radius30};

    &.success {
        background-color: ${({ theme }) => theme.colors.green50};
        ${({ theme }) => theme.borders.border150};
        border-color: ${({ theme }) => theme.colors.green500};
    }

    &.info {
        background-color: ${({ theme }) => theme.colors.info50};
        ${({ theme }) => theme.borders.border150};

        border-color: ${({ theme }) => theme.colors.info};
    }

    &.error {
        background-color: ${({ theme }) => theme.colors.negative50};
        ${({ theme }) => theme.borders.border150};
        border-color: ${({ theme }) => theme.colors.negative};
    }

    &.warning {
        background-color: ${({ theme }) => theme.colors.orange50};
        ${({ theme }) => theme.borders.border150};
        border-color: ${({ theme }) => theme.colors.orange500};
    }

    &.hide {
        animation: ${slideDown} 0.35s ease forwards;
    }

    & .icon {
        height: 20px;
        width: 20px;
        display: inline-block;
        margin-right: ${({ theme }) => theme.spacing.spacing60};
    }

    & .info {
        color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};
        ${({ theme }) => theme.typography.bodySmall};
        margin: 0;
    }
`;

// defs
interface IToastProps {
  type: TOASTER_TYPES;
  message: string;
  onHide: VoidFunction;
  hideTime?: number;
}

const getIcon = (type: TOASTER_TYPES) => {
  switch (type) {
    case TOASTER_TYPES.WARNING:
      return <WarningIcon />;
    case TOASTER_TYPES.ERROR:
      return <ErrorIcon />;
    case TOASTER_TYPES.SUCCESS:
      return <SuccessIcon />;
    case TOASTER_TYPES.INFO:
      return <InfoIcon />;
    default:
      return <SuccessIcon />;
  }
};

function Toast({
  type, message, onHide, hideTime = 1500,
}: IToastProps) {
  const [hide, setHide] = useState(false);
  const classes = [TOASTER_CLASSES[type], hide && 'hide'].filter(Boolean).join(' ');

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setHide(true);
    }, hideTime);

    return () => {
      window.clearTimeout(timer);
    };
  }, [hideTime, message]);

  const onAnimationEnd = () => {
    if (hide) {
      onHide();
    }
  };

  return (
    <Container className={classes} onAnimationEnd={onAnimationEnd}>
      <i className="icon">{getIcon(type)}</i>
      <p className="info">{message}</p>
    </Container>
  );
}

export default memo(Toast);
