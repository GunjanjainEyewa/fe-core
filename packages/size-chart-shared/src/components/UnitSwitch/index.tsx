import React from 'react';
import { styled } from '@nykaa/ui-components';
import { hexToRgb } from '@nykaa/ui-components/styles/utils';
import Switch from '../Switch';
import { UnitProps } from '../../types';


const Wrapper = styled.div<{ borderApplied: boolean; }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacing.spacing120}
  ${({ theme }) => theme.spacing.spacing120}
  ${({ theme }) => theme.spacing.spacing120};
  background-color: ${({ theme }) => theme.colors.white};
  top: 0;
  width: 100%;
  height: 5%;
  z-index: 1;
  ${({ borderApplied, theme }) => (borderApplied)
  && (`border-bottom: solid 1px ${hexToRgb(theme.colors.textPrimary, 0.16)};
  padding: ${theme.spacing.spacing120}
  ${theme.spacing.spacing80}
  ${theme.spacing.spacing80};
  margin: 0;
  position: absolute;
  height: auto;
  `)}
`;

const Text = styled.span`
  ${({ theme }) => theme.typography.titleSmall};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};

`;

interface SwitchProps {
  unitSelectionText: string;
  units: UnitProps[];
  handleUnitSwitch: (selectedUnit: string) => void;
  selectedUnit: string;
  borderApplied?: boolean;
}

const UnitSwitch = (props: SwitchProps) => {
  const {
    unitSelectionText,
    units,
    selectedUnit,
    handleUnitSwitch,
    borderApplied,
  } = props;
  return (
    <Wrapper borderApplied={borderApplied}>
      <Text>
        {unitSelectionText}
      </Text>
      <Switch
        units={units}
        selectedUnit={selectedUnit}
        handleUnitSwitch={handleUnitSwitch}
      />
    </Wrapper>
  );
};

export default UnitSwitch;
