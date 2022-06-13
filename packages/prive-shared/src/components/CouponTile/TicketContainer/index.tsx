import React, { useCallback } from 'react';
import { styled } from '@nykaa/ui-components';
import Button, { KIND, SHAPE, SIZE } from '@nykaa/ui-components/Button';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import InfoIcon from '../../../Icons/InfoIcon';

const TicketContainer = styled.div<{ bgColor: string; borderColor: string }>`
  border: ${({ theme }) => theme.borders.border100.borderWidth} dashed ${({ borderColor }) => borderColor};
  padding: 9px 7px 9px 15px;
  background: ${({ bgColor }) => bgColor};
  display: flex;
  align-items: center;
`;

const InfoIconWrapper = styled.div`
  margin-top: 6px;
  margin-right: 11px;
`;

const CouponCodeContainer = styled.div`
  flex-grow: 1;
`;

const CouponCode = styled.div`
  ${({ theme }) => theme.typography.labelMedium};
  margin-bottom: ${({ theme }) => theme.spacing.spacing10};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.64)};
`;

const CouponValidity = styled.div`
  ${({ theme }) => theme.typography.bodyXSmall};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.64)};
`;

const ActionButton = styled(Button)`
  background: none;
  &:hover {
    &::before {
      background-color: transparent;
    }
  }
`;

interface TicketContainerProps {
  couponCode: string;
  brandIcon: string;
  validity: string;
  ticketBgColor: string;
  ticketBorderColor: string;
  setToastMessage: React.Dispatch<(prevState: any) => any>;
  collectCb: (args0: any) => {};
}

const collectHandler = ({ couponCode, collectCb, setToastMessage }: any) => {
  if (navigator && navigator.clipboard) {
    navigator.clipboard.writeText(couponCode);
    setToastMessage('Coupon copied.');
    collectCb(true);
  } else {
    setToastMessage('Something went wrong.');
    collectCb(false);
  }
};

const TicketContainerComp = ({
  ticketBgColor,
  ticketBorderColor,
  couponCode,
  validity,
  collectCb,
  setToastMessage,
}: TicketContainerProps) => {
  const actionHandler = useCallback(() => {
    collectHandler({ couponCode, collectCb, setToastMessage });
  }, [couponCode, collectCb, setToastMessage]);

  return (
    <TicketContainer bgColor={ticketBgColor} borderColor={ticketBorderColor}>
      <InfoIconWrapper>
        <InfoIcon />
      </InfoIconWrapper>
      <CouponCodeContainer>
        <CouponCode>{couponCode}</CouponCode>
        <CouponValidity>{validity}</CouponValidity>
      </CouponCodeContainer>
      <ActionButton
        kind={KIND.tertiary}
        size={SIZE.medium}
        shape={SHAPE.default}
        onClick={(event) => {
          event.stopPropagation();
          actionHandler();
        }}
      >
        Copy
      </ActionButton>
    </TicketContainer>
  );
};

export default TicketContainerComp;
