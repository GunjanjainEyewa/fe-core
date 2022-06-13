import React from 'react';
import styled from '@nykaa/ui-components/styles/styled';

const Count = styled.div`
  ${({ theme }) => theme.typography.bodySmall};
  color: #757575;
  margin: 0;
  padding: 0;
  text-transform: capitalize;
`;

interface VariantsCountProps {
  variantType: string;
  variantCount: number;
  isTranslated?: boolean;
}

const VariantsCount: React.FC<VariantsCountProps> = ({
  variantType, variantCount = 100, isTranslated = false,
}: VariantsCountProps) => {
  if (!variantCount || !variantType) {
    return null;
  }
  let customVariant = '';
  if (!isTranslated) {
    customVariant = variantCount > 1 ? `${variantType}s` : variantType;
  }
  return (
    <Count>
      {variantCount}
      {' '}
      { customVariant || variantType }
    </Count>
  );
};

export default VariantsCount;
