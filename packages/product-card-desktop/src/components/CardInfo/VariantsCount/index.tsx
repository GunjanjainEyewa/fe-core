import React from 'react';
import { styled } from '@nykaa/ui-components';


const Count = styled.div`
  ${({ theme }) => theme.typography.bodySmall};
  display: flex;
  justify-content: center;
  align-items: center;
  color:  ${({ theme }) => theme.colors.state};
  margin: 0;
  padding: 0;
  text-transform: capitalize;
`;

interface VariantsCountProps {
  variantType: string;
  variantCount: number;
}

const VariantsCount: React.FC<VariantsCountProps> = ({
  variantType, variantCount = 100,
}: VariantsCountProps) => {
  if (variantCount && variantType) {
    return (
      <Count>
        {`${variantCount} ${variantType}${variantCount > 1 ? 's' : ''}`}
      </Count>
    );
  }

  return null;
};

export default VariantsCount;
