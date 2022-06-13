import React from 'react';
import { styled } from '@nykaa/ui-components';
import Modal from '../Modal';

interface Props {
  onClose?: (modalStatus: boolean) => void;
  showModal?: boolean;
  closeText?: string;
  children: React.ReactNode
}


const modalStyles = {
  borderRadius: '16px 16px 0 0',
  boxSizing: 'border-box',
  padding: '20px',
};

const styles = {
  cursor: {
    cursor: 'pointer',
  },
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const View = ({
  onClose = null,
  showModal,
  closeText = 'Close',
  children,
}: Props): JSX.Element | null => {
  const CloseButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-bottom: 20px;
    align-items: center;
    p {
      color: ${({ theme }) => theme.colors.primary};
      ${({ theme }) => theme.typography.titleXSmall};
    }
  `;

  const handleOnClose = () => {
    onClose(!showModal);
  };

  return (showModal ? (
    <Modal
      isPartial
      isStickBottom
      contentStyle={modalStyles}
      onHide={handleOnClose}
    >
      <CloseButtonWrapper onClick={() => handleOnClose()}>
        <p style={styles.cursor}>
          {closeText}
        </p>
      </CloseButtonWrapper>
      <Wrapper>
        {children}
      </Wrapper>
    </Modal>
  ) : null
  );
};

export default View;
