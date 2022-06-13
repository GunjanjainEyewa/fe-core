import React from 'react';
import WelcomeBannerGuest from './GuestUser';
import WelcomeBannerLogged from './LoggedinUser';
import PriveBanner from './PriveUser';

type WelcomeBannerProps = {
  onLoginClick?: () => any;
  userData: any;
  loyaltyData: any;
  backgroundUrl: string;
};

const getWelcomeBannerMarkup = ({
  userData,
  onLoginClick,
  loyaltyData,
  backgroundUrl,
}: WelcomeBannerProps) => {
  const {
    firstName, lastName, rewardPoints,
    isLoyal, isLogged,
    profileUrl,
  } = userData || {};
  const {
    upgradeAmount, enrollmentDate,
    expiryDate, tierName,
  } = loyaltyData || {};
  if (isLogged) {
    if (isLoyal) {
      return (
        <PriveBanner
          firstName={firstName}
          lastName={lastName}
          rewardPoints={rewardPoints}
          enrollmentDate={enrollmentDate}
          expiryDate={expiryDate}
          tierName={tierName}
          profileUrl={profileUrl}
          backgroundUrl={backgroundUrl}
        />
      );
    }
    return (
      <WelcomeBannerLogged
        firstName={firstName}
        lastName={lastName}
        upgradeAmount={upgradeAmount}
        rewardPoints={rewardPoints}
        expiryDate={expiryDate}
        profileUrl={profileUrl}
        backgroundUrl={backgroundUrl}
      />
    );
  }
  return <WelcomeBannerGuest onLoginClick={onLoginClick} backgroundUrl={backgroundUrl} />;
};

const WelcomeBanner = ({
  onLoginClick,
  userData,
  loyaltyData,
  backgroundUrl,
}: WelcomeBannerProps) => (
  <>
    {getWelcomeBannerMarkup({
      onLoginClick,
      loyaltyData,
      userData,
      backgroundUrl,
    })}
  </>
);

export default WelcomeBanner;
