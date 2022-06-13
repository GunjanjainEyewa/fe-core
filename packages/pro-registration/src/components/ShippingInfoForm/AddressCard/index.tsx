import React from 'react';
import { styled } from '@eyewa/ui-components';
import Checkbox from '@eyewa/ui-components/Checkbox';
import { AddressInfo } from '../../../types';

export interface SavedAddressProps extends AddressInfo {
  isMarked: boolean;
  onToggle: (addressID: string) => void;
}

const AddressWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: ${({ theme }) => theme.spacing.spacing40};
  margin: ${({ theme }) => theme.spacing.spacing80} 0;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borders.radius20};
  ${({ theme }) => theme.borders.border100};
  border-color: ${({ theme }) => theme.colors.surface30};
  transition: all 0.2s linear;
  &:hover {
    cursor: pointer;
    box-shadow: 0 2px 10px 0 ${({ theme }) => theme.colors.surface50};
    border-color: ${({ theme }) => theme.colors.surface};
  }
`;


const MobileLabel = styled.label`
  ${({ theme }) => theme.typography.titleXSmall};
  &::after {
    content: ":";
    margin-right: ${({ theme }) => theme.spacing.spacing20};
    font-weight: inherit;
  }
`;

const FlexBoxContainer = styled.div``;

const AddressLine = styled.div`
  ${({ theme }) => theme.typography.bodyMedium};
`;

const AddressCard: React.FC<SavedAddressProps> = (
  { onToggle, ...rest }: SavedAddressProps,
) => {
  const {
    firstname,
    lastname,
    mobileNumber,
    street,
    pincode,
    city,
    state,
    addressId,
    isMarked,
  } = rest;

  const handleToggle = (value: boolean) => {
    if (value) {
      onToggle(addressId);
    } else {
      onToggle(null);
    }
  };

  return (
    <AddressWrapper>
      <FlexBoxContainer>
        <AddressLine>{`${firstname} ${lastname}`}</AddressLine>
        <AddressLine>{street}</AddressLine>
        <AddressLine>{`${city} - ${pincode}`}</AddressLine>
        <AddressLine>{state}</AddressLine>
        {mobileNumber && (
          <AddressLine>
            <MobileLabel>Mobile</MobileLabel>
            {mobileNumber}
          </AddressLine>
        )}
      </FlexBoxContainer>
      <FlexBoxContainer>
        <Checkbox
          checked={isMarked}
          onChangeHandler={async (toggle: boolean) => handleToggle(toggle)}
        />
      </FlexBoxContainer>
    </AddressWrapper>
  );
};

export default AddressCard;
