import EasyJoinIcon from '../Icons/EasyJoin';
import EarnPointsIcon from '../Icons/EarnPointsIcon';
import SpecialBenefitsIcon from '../Icons/SpecialBenefitsIcon';
import RedeemPointsIcon from '../Icons/RedeemPointsIcon';

export const tierNames: any = {
  silver: 'silver',
  gold: 'gold',
  platinum: 'platinum',
};

export const guideConfig: Array<{
  icon?: () => JSX.Element;
  imgUrl?: string;
  title: string;
  description: string;
}> = [
  {
    icon: EasyJoinIcon,
    imgUrl: undefined,
    title: 'Easy to Join',
    description: 'Shop for ₹1,500 in a year & become a Prive member',
  },
  {
    icon: EarnPointsIcon,
    imgUrl: undefined,
    title: 'Earn Points',
    description: 'Every time you shop or refer your friend',
  },
  {
    icon: SpecialBenefitsIcon,
    imgUrl: undefined,
    title: 'Special Benefits',
    description: 'Enjoy super cool exclusive benefits!',
  },
  {
    icon: RedeemPointsIcon,
    imgUrl: undefined,
    title: 'Redeem Points',
    description: 'And get discounts on all orders',
  },
];

export const benefitsSliderConfig: any = {
  silver: {
    title: 'UPGRADE & GET MORE WITH',
    description: 'Prive Membership',
    upgradeText: 'Shop to become a Prive member',
    defaultSlide: 0,
  },
  gold: {
    title: 'ENJOY EXCLUSIVE BENEFITS WITH',
    description: 'Prive Gold Membership',
    upgradeText: 'Want to Upgrade to Platinum?',
    defaultSlide: 1,
  },
  platinum: {
    title: 'ENJOY EXCLUSIVE BENEFITS WITH',
    description: 'Prive Platinum Membership',
    upgradeText: 'Want to Retain Platinum?',
    defaultSlide: 2,
  },
  undefined: {
    title: '',
    description: '',
    upgradeText: '',
    defaultSlide: 0,
  },
};

export const tierEarnBgUrlMap = {
  silver: {
    small: 'https://www.nykaa.com/media/wysiwyg/2022/cms/silverEarnBgSmall.png',
    large: 'https://www.nykaa.com/media/wysiwyg/2022/cms/silverEarnBgLarge.png',
  },
  gold: {
    small: 'https://www.nykaa.com/media/wysiwyg/2022/cms/goldEarnBgSmall.png',
    large: 'https://www.nykaa.com/media/wysiwyg/2022/cms/goldEarnBgLarge.png',
  },
  platinum: {
    small:
      'https://www.nykaa.com/media/wysiwyg/2022/cms/platinumEarnBgSmall.png',
    large:
      'https://www.nykaa.com/media/wysiwyg/2022/cms/platinumEarnBgLarge.png',
  },
};

export const dateTypes = {
  default: 'DD Mon YYYY',
  membershipCard: 'Mon YYYY',
};

export const dummy = true;
