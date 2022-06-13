import React, { FC } from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import ArrowIcon from '../../../Icons/ArrowIcon';

const defaultList = [
  'Your Coupon will get auto-applied on bag',
  'You can club this Coupon with other select offers on Nykaa*',
  'Coupon available till stocks last',
  'Valid till 30th Nov, 2021',
];

const Title = styled.div`
  ${({ theme }) => theme.typography.titleSmall};
  color: ${({ theme }) => hexToRgb(theme.colors.pebble900, 0.64)};
`;

const TermsAndConditionsList = styled.ul`
  margin: ${({ theme }) => theme.spacing.spacing40} ${({ theme }) => theme.spacing.spacing80};
  li {
    ${({ theme }) => theme.typography.bodyMedium};
    color: ${({ theme }) => hexToRgb(theme.colors.pebble900, 0.64)};
    list-style-type: disc;
    margin-bottom: ${({ theme }) => theme.spacing.spacing20};
  }
`;

const TermsAndConditionsViewAll = styled.div`
  ${({ theme }) => theme.typography.subTitleMedium};
  color: ${({ theme }) => hexToRgb(theme.colors.pebble900, 0.64)};
  svg {
    transform: rotate(270deg);
    margin-left: ${({ theme }) => theme.spacing.spacing20};
  }
`;

type termsAndConditionsProps = {
  tncList?: string[];
  handleViewClick?: () => void;
};

const TermsAndConditions: FC<termsAndConditionsProps> = ({
  tncList = defaultList,
  handleViewClick,
}: termsAndConditionsProps) => {
  const handleTermsAndConditionsClick = () => {
    handleViewClick();
  };

  return (
    <>
      <Title>Terms & Conditions</Title>
      <TermsAndConditionsList>
        {tncList.map((tnc, id) => (
          <li id={id.toString()}>{tnc}</li>
        ))}
      </TermsAndConditionsList>
      <TermsAndConditionsViewAll onClick={handleTermsAndConditionsClick}>
        View all Terms & Conditions
        <ArrowIcon />
      </TermsAndConditionsViewAll>
    </>
  );
};

export default TermsAndConditions;
