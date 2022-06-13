import React from 'react';
import { styled } from '@nykaa/ui-components';
import EarnPointsCard from '@nykaa/prive-shared/components/EarnPointsCard';
import SummaryLayout from '@nykaa/prive-shared/components/SummaryLayout';
import { normalColors, goldColors, platinumColors } from '@nykaa/prive-shared/constants/colorTokens';
import NormalReview from '@nykaa/prive-shared/Icons/NormalReview';
import GoldReview from '@nykaa/prive-shared/Icons/GoldReview';
import PlatinumReview from '@nykaa/prive-shared/Icons/PlatinumReview';
import { tierNames } from '@nykaa/prive-shared/constants';
import Button, { KIND, SIZE, SHAPE } from '@nykaa/ui-components/Button';
import Arrow from '@nykaa/prive-shared/Icons/Arrow';
import { getImgElementFromUrl } from '@nykaa/prive-shared/utils';
import { tierEarnBgUrlMap } from '@nykaa/prive-shared/constants';


const ActionButton = styled(Button)`
  ${({ theme }) => theme.typography.buttonMedium}
  margin-top: 9px;
  margin-bottom: ${({ theme }) => theme.spacing.spacing80};
  padding-left: ${({ theme }) => theme.spacing.spacing10};
  padding-right: ${({ theme }) => theme.spacing.spacing10};
  &:hover {
    &::before {
      background-color: transparent;
    }
  }
`;

const ArrowButton = styled.i`
  vertical-align: middle;
  margin-left: ${({ theme }) => theme.spacing.spacing40};
`;
export interface EarnPointProps {
  title: string;
  summary: string;
  isCollapsible: boolean;
  children?: JSX.Element;
}


const ReviewCard = (props: any) => {
  const { tierName, handleReviewClick, defaultExpanded } = props;
  let reviewUrl = null;
  let titleColor = '#964D5D';
  let earnBgUrl = null;
  switch (tierName) {
    case tierNames.silver:
      reviewUrl = <NormalReview />;
      titleColor = normalColors.ledgerItemAmountColor;
      earnBgUrl = getImgElementFromUrl({ imgUrl: tierEarnBgUrlMap.silver.large, altText: 'earn-bg-url' });
      break;
    case tierNames.gold:
      reviewUrl = <GoldReview />;
      titleColor = goldColors.ledgerItemAmountColor;
      earnBgUrl = getImgElementFromUrl({ imgUrl: tierEarnBgUrlMap.gold.large, altText: 'earn-bg-url' });
      break;
    case tierNames.platinum:
      reviewUrl = <PlatinumReview />;
      titleColor = platinumColors.ledgerItemAmountColor;
      earnBgUrl = getImgElementFromUrl({ imgUrl: tierEarnBgUrlMap.platinum.large, altText: 'earn-bg-url' });
      break;
    default:
      break;
  }
  return (
    <EarnPointsCard
      title="Review & Rate"
      summary="Post pictures, give reviews & rate your purchase"
      isCollapsible
      reviewUrl={reviewUrl}
      titleColor={titleColor}
      earnBgUrl={earnBgUrl}
      defaultExpanded={defaultExpanded}
    >
      <>
        <SummaryLayout
          isCollapsible={false}
          defaultExpanded
          title="1000 Points for every product you review"
          description="Customers who are signed in can leave a review and earn 100 points once verified by Team Nykaa."
        />
        <SummaryLayout
          isCollapsible={false}
          defaultExpanded
          title="2000 points for every review with a photo "
          description="For all approves reviews with product image 2000 points can be earned"
        />
        <ActionButton
          kind={KIND.tertiary}
          size={SIZE.small}
          shape={SHAPE.default}
          onClick={() => handleReviewClick()}
          id="LedgerItem-actionbtn-text"
        >
          Review Product
          <ArrowButton><Arrow /></ArrowButton>
        </ActionButton>
      </>

    </EarnPointsCard>
  );
};

export default ReviewCard;
