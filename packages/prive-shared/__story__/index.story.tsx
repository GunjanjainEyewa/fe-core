import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import CouponTileComp from '../src/components/CouponTile';
import MembershipCardComp from '../src/components/MembershipCard';
import WelcomeBannerComp from '../src/components/WelcomeBanner';
import CouponDetailsCard from '../src/components/CouponDetailsCard';
import FaqListComp from '../src/components/FaqList';
import WorkingGuideComp from '../src/components/WorkingGuide';
import ImageSliderComp from '../src/components/ImageSlider';
import PriveTabs from '../src/components/PriveTabs';
import CouponListComp from "../src/components/CouponList";
import RewardHistoryComp from '../src/components/RewardHistory';
import brandIcon from './Group999.png';
import CouponTicketIcon from './CouponTicket.png';
import Rewards from '../src/components/RewardHistory/RewardHistoryContent';


export default {
  title: 'PriveSharedComponents',
  component: CouponTileComp,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
};

export const CouponTile = (props) => <CouponTileComp {...props} />;

CouponTile.args = {
  title: 'Extra 10% Off',
  info: 'On Sugar Cosmetics for Prive Customers only',
  brandIcon: '',
  couponCode: 'NCOSM20',
  validity: 'Valid till - 30 Nov 2021',
  ticketBgColor: '#fffbf1',
  ticketBorderColor: '#CB95A8',
  eventName: 'copyButtonClick',
  collectCb: () => {
    console.log('COLLECT clicked @@CouponTile');
  },
};

export const MembershipCard = (props) => <MembershipCardComp {...props} />;

MembershipCard.args = {
  tierName: 'normal',
  enrollmentDate: 'Oct 2021',
  expiryDate: 'Oct 2022',
  rewardPoints: 5398,
};
const userData = {
  isLogged: true,
  isLoyal: true,
  firstName: 'Ankita',
  lastName: 'Singh',
  rewardPoints: 1800,
};
const loyaltyData = {
  upgradeAmount: 300,
  enrollmentDate: '10 Oct 2021',
  expiryDate: '10 Oct 2022',
  tierName: 'platinum',
};

export const WelcomeBanner = (props) => {
  return (
    <WelcomeBannerComp
      userData={{
        ...props.userData,
        isLogged: props.isLogged,
        isLoyal: props.isLoyal,
      }}
      loyaltyData={{
        ...props.loyaltyData,
        tierName: props.tierName,
      }}
      onLoginClick={props.onLoginClick}
      backgroundUrl="https://www.nykaa.com/media/wysiwyg/2022/cms/NonLoggedInBanner.png"
    />
  );
};

WelcomeBanner.args = {
  onLoginClick: () => {
    console.log('LOGIN clicked @@WelcomeBanner');
  },
  loyaltyData,
  userData,
  tierName: loyaltyData.tierName,
  ...userData,
  isLogged: userData.isLogged,
  isLoyal: userData.isLoyal,
};

export const FaqList = (props) => <FaqListComp {...props} />;

FaqList.args = {
  title: 'FAQS',
  faqList: [
    {
      title: 'What is Nykaa?',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    {
      title: 'Is there a memebership fee for Nykaa Prive?',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    {
      title: 'Is there a criteria to join Nykaa Prive?',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
  ],
};

export const WorkingGuide = (props) => (
  <WorkingGuideComp {...props} />
);

WorkingGuide.args = {
  title: 'How It Works',
  tierStartPrices: ["2,000","5,000","10,000"],
  upgradeAmt: '2,000',
  silverTierAmount: 1500,
  goldTierAmount: 5000,
  platinumTierAmount: 10000,
};

export const ImageSlider = (props) => <ImageSliderComp {...props} />;

ImageSlider.args = {
  tier: 'gold',
  imgList: [
    'https://ik.imagekit.io/grepz4tjqcq/normalBenefits_rLIOz2JaI.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644923825447',
    'https://ik.imagekit.io/grepz4tjqcq/goldBenefits_qIi-ddaJV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644923926181',
    'https://ik.imagekit.io/grepz4tjqcq/platinumBenefits_uSjhEhGJL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644923939315',
  ],
  upgradeBtnText: 'Shop Now',
  handleClick: () => {
    console.log('@@Image slider btn clicked');
  },
};

/* <CouponTileComp
{...{
  title: 'Extra 10% Off',
  info: 'On Sugar Cosmetics for Prive Customers only',
  brandIcon,
  couponCode: 'NCOSM20',
  validity: 'Valid till - 30 Nov 2021',
  ticketBgColor: '#fffbf1',
  ticketBorderColor: '#CB95A8',
  eventName: 'copyButtonClick',
  collectCb: () => {
    console.log('COLLECT clicked @@CouponTile');
  },
}}
/> */

export const CouponDetailsView = (args) => {
  return <CouponDetailsCard {...args} />;
};
CouponDetailsView.args = {
  title: 'Extra 10% off',
  expiryDate: '30th Nov 2021',
  info: 'On Sugar cosmetics on purchase of ₹999 or more.This can be a 3 liner as well',
  brandIcon,
  couponIcon: CouponTicketIcon,
  couponCode: 'SUGAR10',
  upgradeAmount: '₹250',
};

export const PriveTabsView = (props) => {
  return <PriveTabs {...props} />;
};

PriveTabsView.args = {
  tierName: 'gold',
  defaultTab: "member",
  tabSwitchCb: (id: any) => {
    console.log(`@@Tab id - ${id} selected.`);
  },
};

export const CouponList = (props) => <CouponListComp {...props} />;

CouponList.args = {
  tier: 'gold',
  couponList: [
    {
      title: 'Extra 10% Off',
      description: 'On Sugar Cosmetics for Prive Customers only',
      brandIcon: brandIcon,
      couponCode: 'NCOSM20',
      validity: 'Valid till - 30 Nov 2021',
    },
    {
      title: 'Extra 10% Off',
      description: 'On Sugar Cosmetics for Prive Customers only',
      brandIcon: brandIcon,
      couponCode: 'NCOSM20',
      validity: 'Valid till - 30 Nov 2021',
    },
    {
      title: 'Extra 10% Off',
      description: 'On Sugar Cosmetics for Prive Customers only',
      brandIcon: brandIcon,
      couponCode: 'NCOSM20',
      validity: 'Valid till - 30 Nov 2021',
    },
    {
      title: 'Extra 10% Off',
      description: 'On Sugar Cosmetics for Prive Customers only',
      brandIcon: brandIcon,
      couponCode: 'NCOSM20',
      validity: 'Valid till - 30 Nov 2021',
    },
  ],
  onCouponCardClick:(data:any) => {
    console.log("@@ coupon clicked with data",data);
  },
  collectCb: (couponData: any) => {
    console.log('@@ coupon collected with data', couponData);
  },
};

export const RewardHistory = (props) => <RewardHistoryComp {...props} />;

RewardHistory.args = {
  tier: 'silver',
  tabsText: ['Earned', 'Utilized'],
  selectedTab: 0,
  onTabClick: (id: any) => {
    console.log(`@@Tab id - ${id} selected.`);
  },
};

export const RewardList = (props) => <Rewards {...props} />;

RewardList.args = {
  tier:'silver',
  isCredit: true,
  dataList: [
    {
      title: 'Maybelline New York Color',
      amount: 2000,
      domain: 'NYKAA_POS_ENDLESS_AISLE',
      multiplier: '1.5x Gold',
      quantity: 3,
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },
    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },
    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },
    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },
    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },
    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },
    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },
    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },

    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },

    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },
    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },
    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },
    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },

    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },
    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },
    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },
    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },
    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },
    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },
    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },
    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },
    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },
    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },
    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },
    {
      title: 'Completed Beauty Profile',
      amount: 2000,
      domain: 'NYKAA_RETAIL',
      multiplier: '1.5x Gold',
      reason: 'Purchase',
      date: 'Dec 28, 2021',
    },
  ],
};