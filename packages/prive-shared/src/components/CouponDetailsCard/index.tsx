import React, { FC } from 'react';
import { styled } from '@nykaa/ui-components';
import Button, { KIND, SHAPE, SIZE } from '@nykaa/ui-components/Button';
import TermsAndConditions from './TermsAndConditions';
import CouponCode from './CouponCode';

const Wrapper = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing.spacing80};
  width: 100%;
  margin:auto:
`;

const Details = styled.div`
  padding: ${({ theme }) => theme.spacing.spacing80} 1.25rem ${({ theme }) => theme.spacing.spacing120};
`;

const DetailTitle = styled.div`
  ${({ theme }) => theme.typography.titleMedium};
  margin-bottom: ${({ theme }) => theme.spacing.spacing40};
`;

const DetailsInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.spacing120};
`;

const BrandIcon = styled.img`
  width: 89px;
  max-width: 89px;
  margin-left: ${({ theme }) => theme.spacing.spacing60};;
`;

const DetailsInfo = styled.div`
  ${({ theme }) => theme.typography.bodyMedium};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.25rem;
  button:first-of-type {
    margin-right: ${({ theme }) => theme.spacing.spacing80};
  }
  button {
    flex: 1;
  }
`;

type couponDetailsProps = {
  title: string;
  info: string;
  brandIcon: string;
  couponCode: string;
  tncList?: string[];
  handleViewCb?: () => void;
  handleCopyCb?: () => void;
  handleShareCb?: () => void;
  handleViewAllTncCb: () => void;
};

const CouponDetailsCard: FC<couponDetailsProps> = ({
  brandIcon,
  couponCode,
  title,
  info,
  tncList,
  handleViewCb,
  handleCopyCb,
  handleShareCb,
  handleViewAllTncCb,
}: couponDetailsProps) => {
  const handleViewClick = () => {
    if (handleViewCb) handleViewCb();
  };
  const handleCopyClick = () => {
    if (handleCopyCb) handleCopyCb();
  };
  const handleShareClick = () => {
    if (handleShareCb) handleShareCb();
  };
  const handleViewAllTncClick = () => {
    if (handleViewAllTncCb) handleViewAllTncCb();
  };

  return (
    <Wrapper>
      <CouponCode couponCode={couponCode} handleShareClick={handleShareClick} />
      <Details>
        <DetailTitle>{title}</DetailTitle>
        <DetailsInfoContainer>
          <DetailsInfo>{info}</DetailsInfo>
          <BrandIcon src={brandIcon} />
        </DetailsInfoContainer>
        <TermsAndConditions
          tncList={tncList}
          handleViewClick={handleViewAllTncClick}
        />
      </Details>
      <ButtonsWrapper>
        <Button
          kind={KIND.secondary}
          size={SIZE.large}
          shape={SHAPE.default}
          onClick={handleViewClick}
        >
          View products
        </Button>
        <Button
          kind={KIND.primary}
          size={SIZE.large}
          shape={SHAPE.default}
          onClick={handleCopyClick}
        >
          Copy
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default CouponDetailsCard;
