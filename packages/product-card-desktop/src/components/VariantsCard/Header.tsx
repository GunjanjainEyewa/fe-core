import React from 'react';
import { styled } from '@nykaa/ui-components';
import { VariantHeaderProps } from '@nykaa/product-card-shared/types/variants';
import { CrossIcon } from '../icons';

const ShadeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.spacing160};
`;
const Title = styled.div`
  ${({ theme }) => theme.typography.titleXSmall};
  text-transform: capitalize;
`;

const Icon = styled.button`
  border: none;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.white};
`;

const Header = ({
  title,
  handleVariantCross,
}: VariantHeaderProps) => (
  <ShadeHeader>
    <Title>{title}</Title>
    <Icon onClick={handleVariantCross}>
      <CrossIcon />
    </Icon>
  </ShadeHeader>
);

export default Header;
