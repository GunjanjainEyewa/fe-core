import React from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';

interface SizeProps {
  label: string;
  isSelected?: boolean;
  isOutOfStock?: boolean;
  onClick: () => void;
}

const Chip = styled.div`
  display: inline-block;
  overflow: hidden;
  position: relative;
  margin: ${({ theme }) => `${theme.spacing.spacing40} ${theme.spacing.spacing20}`};
  padding: ${({ theme }) => theme.spacing.spacing40};
  border-radius: ${({ theme }) => theme.borders.radius50};
  border-color: ${({ theme }) => hexToRgb(theme.colors.surfaceInverse, 0.5)};
  ${({ theme }) => theme.borders.border100};
  ${({ theme }) => theme.typography.bodyMedium};
  color: ${({ theme }) => theme.colors.textSecondary};
  
  &.active {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.surface};
    ${({ theme }) => theme.typography.subTitleMedium};
  }

  &.oos {
    background: transparent;
    font-weight: normal;
    opacity: 0.9;
    border-color: ${({ theme }) => hexToRgb(theme.colors.surfaceInverse, 0.5)};
    color: ${({ theme }) => hexToRgb(theme.colors.surfaceInverse, 0.5)};
    ${({ theme }) => theme.borders.border100};
  }
`;
Chip.displayName = 'Chip';

const SizeChip = ({
  label,
  onClick,
  isSelected = false,
  isOutOfStock = false,
}: SizeProps) => {
  let classesForSize = (isSelected ? 'active' : 'siz_ChipClass');
  classesForSize += (isOutOfStock ? ' oos' : '');

  return (
    <Chip className={classesForSize} onClick={onClick}>
      {label}
    </Chip>
  );
};

export default SizeChip;
