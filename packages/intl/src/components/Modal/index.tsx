import React, { memo, useState, useEffect } from 'react';
import { styled } from '@nykaa/ui-components';

import Portal from './Portal';


interface ModalContentProps {
  background: string;
}

const ModalContent = styled.div`
  position: fixed;
  max-width: 100%;
  background: ${({ background }: ModalContentProps) => background};
  border-radius: 2px;
  z-index: 10;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 30px 6px rgba(0, 0, 0, 0.15);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;

  &.partial-modal {
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    height: auto;
    max-width: 500px;
    overflow: hidden;
    max-width: 500px;
  }
  &.stick-to-bottom {
    top: unset;
    bottom: 0;
    margin: auto;
    max-width: 500px;
    transform: translateX(-50%);
    overflow: hidden;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;

  .hide-overlay {
    z-index: 1;
    background-color: rgba(0, 0, 0, 0);
  }
`;


interface ModalProps {
  children: React.ReactNode;
  onHide: VoidFunction;
  modalContentClass?: string;
  allowBackdropClick?: boolean;
  modalBackground?: string;
  isVisible?:boolean;
  isPartial?: boolean;
  isStickBottom?: boolean;
  contentStyle?: {[key: string]: string};
}


const Modal = ({
  children,
  onHide,
  allowBackdropClick = true,
  modalContentClass = '',
  modalBackground = '#fff',
  isVisible,
  isPartial,
  isStickBottom,
  contentStyle,
}: ModalProps) => {
  const [isHidden, setIsHidden] = useState(isVisible);
  const BODY_OVERFLOW_FOR_MODAL = 'overflow-hidden';

  useEffect(() => {
    document.body.classList.add(BODY_OVERFLOW_FOR_MODAL);
    return (() => (
      document.body.classList.remove(BODY_OVERFLOW_FOR_MODAL))
    );
  }, []);

  const hide = () => {
    setIsHidden(true);
    onHide();
  };
  // TODO: Quicker fix is done but need to update this (not able to pass custom class here
  const modalCustomClass = `${modalContentClass} ${isStickBottom ? 'stick-to-bottom' : ''} ${isPartial ? 'partial-modal' : ''} `;
  const overlayClass = isHidden ? '' : 'hide-overlay';
  const backdropClick = allowBackdropClick ? hide : () => { };

  return (
    <Portal>
      <ModalContent
        className={modalCustomClass}
        background={modalBackground}
        style={contentStyle}
      >
        {children}
      </ModalContent>
      <Overlay
        className={overlayClass}
        onClick={backdropClick}
      />
    </Portal>
  );
};

export default memo(Modal);
