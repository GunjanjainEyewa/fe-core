import React, { FC, useState } from 'react';
import { styled } from '@eyewa/ui-components';
import Toast, { VARIANT } from '@eyewa/ui-components/Toast';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import TicketContainer from './TicketContainer';

const Wrapper = styled.div<{tierBased: boolean}>`
  ${({ theme }) => theme.borders.border100};
  border-color: ${({ theme }) => hexToRgb(theme.colors.pebble900, 0.16)};
  border-radius: ${({ theme }) => theme.borders.radius30};
  padding: ${({ tierBased, theme }) => (tierBased ? theme.spacing.spacing60 : theme.spacing.spacing80)};
  padding-bottom: ${({ theme }) => theme.spacing.spacing60};
  min-width: 300px;
  height: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const BrandIcon = styled.img`
  width: 48px;
  max-width: 48px;
  margin-left: auto;
`;

const TicketContainerMask = styled.div`
  position: relative;
  overflow: hidden;
`;

const Title = styled.div<{tierBased: boolean, titleColor: string}>`
  ${({ tierBased, theme }) => (tierBased ? theme.typography.buttonMedium : theme.typography.titleSmall)};
  margin-bottom: ${({ tierBased, theme }) => (tierBased ? theme.spacing.spacing20 : theme.spacing.spacing40)};
  color: ${({ tierBased, titleColor, theme }) => (tierBased ? titleColor : hexToRgb(theme.colors.pebble900, 0.92))};
`;

const Info = styled.div<{tierBased: boolean}>`
  ${({ tierBased, theme }) => (tierBased ? theme.typography.bodySmall : theme.typography.bodyMedium)};
  color: ${({ theme }) => hexToRgb(theme.colors.pebble900, 0.92)};
  display: -webkit-box;
  -webkit-line-clamp: ${({ tierBased }) => (tierBased ? 2 : null)};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: ${({ tierBased }) => (tierBased ? '40px' : 'auto')};
  margin-bottom: ${({ tierBased, theme }) => (tierBased ? theme.spacing.spacing40 : theme.spacing.spacing60)};
`;

const DashedCircle = styled.div<{ borderColor: string }>`
  width: 12px;
  height: 12px;
  border-radius: ${({ theme }) => theme.borders.radiusFull};
  border: ${({ theme }) => theme.borders.border100.borderWidth} dashed ${({ borderColor }) => borderColor};
  position: absolute;
  top: 50%;
  background-color: white;
`;

const DashedCircleLeft = styled(DashedCircle)`
  left: 0;
  transform: translate(-50%, -50%);
`;

const DashedCircleRight = styled(DashedCircle)`
  right: 0;
  transform: translate(50%, -50%);
`;

type couponTileProps = {
  title: string;
  info: string;
  couponCode: string;
  brandIcon: string;
  validity: string;
  ticketBgColor: string;
  ticketBorderColor: string;
  tierBased?: boolean;
  titleColor?: string;
  collectCb: (args0: any) => any;
};

const CouponTile: FC<couponTileProps> = ({
  title,
  info,
  couponCode,
  brandIcon,
  validity,
  ticketBgColor,
  ticketBorderColor,
  tierBased = false,
  titleColor,
  collectCb,
}: couponTileProps) => {
  const [toastMessage, setToastMessage] = useState();

  return (
    <>
      <Wrapper tierBased={tierBased}>
        <Title
          tierBased={tierBased}
          titleColor={titleColor}
        >
          {title}
        </Title>
        <InfoContainer>
          <Info tierBased={tierBased}>{info}</Info>
          <BrandIcon src={brandIcon} />
        </InfoContainer>
        <TicketContainerMask>
          <DashedCircleLeft borderColor={ticketBorderColor} />
          <DashedCircleRight borderColor={ticketBorderColor} />
          <TicketContainer
            couponCode={couponCode}
            validity={validity}
            brandIcon={brandIcon}
            ticketBgColor={ticketBgColor}
            ticketBorderColor={ticketBorderColor}
            setToastMessage={setToastMessage}
            collectCb={collectCb}
          />
        </TicketContainerMask>
      </Wrapper>
      {toastMessage && (
        <Toast
          variant={VARIANT.single}
          message={toastMessage}
          timer={4}
          // @ts-ignore
          onDismiss={setToastMessage}
        />
      )}
    </>
  );
};

export default CouponTile;
