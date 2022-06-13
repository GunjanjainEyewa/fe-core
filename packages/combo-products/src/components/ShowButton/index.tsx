import React from 'react';
import { styled } from '@eyewa/ui-components';
import Arrow from './ArrowIcon';


interface ShowButtonProps {
  text: string;
  showLess: boolean;
  handleShowTile: () => void;
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.typography.titleXSmall};
`;

const Icon = styled.i`
  svg path { 
    fill: ${({ theme }) => theme.colors.primary};
  }
  &.showIcon {
    svg { 
      transform: rotate(180deg);
    }
  }
`;
const Text = styled.span`
  margin: 10px;
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.typography.buttonMedium};
`;
const ShowButton = ({
  text,
  showLess,
  handleShowTile,
}: ShowButtonProps) => (
  <Wrapper
    onClick={handleShowTile}
  >
    <Text>{text}</Text>
    <Icon className={showLess ? 'showIcon' : ''}>
      <Arrow />
    </Icon>
  </Wrapper>
);

export default ShowButton;
