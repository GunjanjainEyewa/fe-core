import React from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import { UnitProps } from '../../types';


interface SwitchStyleProps {
  buttonIndex: number;
  active: boolean;
}
const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borders.radius20};
  height: 32px;
  text-align: center;
  cursor: pointer;
  margin-right: ${({ theme }) => theme.spacing.spacing160};
`;

const Tab = styled.label<SwitchStyleProps>`
  ${({ theme }) => theme.typography.bodyMedium};
  ${({ theme }) => theme.borders.border100};
  border-radius: ${({ theme }) => theme.borders.radius10};
  width: 40px;
  height: 32px;
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};
  padding: ${({ theme }) => theme.spacing.spacing20}
  ${({ theme }) => theme.spacing.spacing40};
  float: left;
  border-radius: ${({ theme }) => theme.borders.radius20};
  border-color:${({ theme }) => hexToRgb(theme.colors.state, 0.32)};
  ${({ buttonIndex, theme }) => ((buttonIndex) ? (
    `border-top-left-radius: ${theme.borders.radiusNone};
    border-bottom-left-radius: ${theme.borders.radiusNone};`)
    : (`border-top-right-radius: ${theme.borders.radiusNone};
    border-bottom-right-radius: ${theme.borders.radiusNone};`))};
  ${({ active, theme }) => ((active) && (`
    ${theme.borders.border100};
    border-radius: ${theme.borders.radius20};
    background-color: ${hexToRgb(theme.colors.primary30, 0.04)};
    color: ${hexToRgb(theme.colors.primary30, 0.92)};
    border-color: ${hexToRgb(theme.colors.primary30, 0.92)};`))}
`;

const Text = styled.span`
  ${({ theme }) => theme.typography.bodyMedium};
`;

interface SwitchProps {
  units: UnitProps[];
  handleUnitSwitch: (selectedUnit: string) => void;
  selectedUnit: string;
}
const Radio = (props: SwitchProps) => {
  const {
    units,
    selectedUnit,
    handleUnitSwitch,
  } = props;

  return (
    <Wrapper>
      { units?.map((unit, index) => (
        <Tab
          active={(selectedUnit === unit?.id)}
          buttonIndex={index}
          htmlFor={`switch_${unit?.id}`}
          key={`Tab-${unit?.id}`}
        >
          <Text onClick={() => handleUnitSwitch(unit?.id)}>
            {unit?.text}
          </Text>
        </Tab>
      ))}
    </Wrapper>
  );
};

export default Radio;
