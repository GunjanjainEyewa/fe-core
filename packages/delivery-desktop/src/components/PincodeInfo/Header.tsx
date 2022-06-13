import React from 'react';
import { styled } from '@nykaa/ui-components';
import LocationIcon from '@nykaa/delivery-shared/Icons/LocationIcon';
import { SelectedCountry } from '@nykaa/delivery-shared/types';
import ChangeButton from './ChangeButton';


interface HeaderProps {
  pinCode: number;
  showCountryList?: boolean;
  changeCallback: () => void;
  selectedCountry: SelectedCountry;
}

const Title = styled.div`
  ${({ theme }) => theme.typography.subTitleMedium};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.span`
  margin-right: ${({ theme }) => theme.spacing.spacing20};
`;
const HelpText = styled.span`
  margin-bottom: ${({ theme }) => theme.spacing.spacing20};
  display: flex;
  align-items: center;
`;
const PincodeNumber = styled.span`
  color: ${({ theme }) => theme.colors.primary}
`;
const CountryFlag = styled.div<{ countryIcon: string; }>`
  background-size: 100%;
  display: inline-block;
  width: 30px;
  height: 24px;
  margin-left: ${({ theme }) => theme.spacing.spacing20};
  ${({ countryIcon }) => (countryIcon) && (`background-image:${countryIcon};`)}
`;
const Header = ({
  pinCode,
  showCountryList,
  changeCallback,
  selectedCountry,
}: HeaderProps) => (
  <Title>
    <Icon>
      <LocationIcon />
    </Icon>
    <HelpText>
      Delivery options for
      <PincodeNumber>
        &nbsp;
        {pinCode}
      </PincodeNumber>
      {(showCountryList) && (
        <CountryFlag countryIcon={selectedCountry?.flagIcon} />
      )}
    </HelpText>
    <ChangeButton handleClick={changeCallback} />
  </Title>
);

export default Header;
