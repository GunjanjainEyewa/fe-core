import React, { memo } from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacing.spacing40};
  background: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.snow800};

  ${({ theme }) => theme.borders.border150};
  border-radius: ${({ theme }) => theme.borders.radius60};
  height: 16px;
`;

const Dot = styled.span<{ active: boolean }>`
  display: inline-block;
  background: ${({ theme, active }) => (active ? theme.colors.textPrimary : hexToRgb(theme.colors.textPrimary, 0.16))};
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.spacing.spacing40};
  height: 6px;
  width: 6px;
`;

export interface Props {
  totalCount: number;
  activeIndex: number;
}

function Dots({ totalCount, activeIndex }: Props) {
  return (
    <Wrapper>
      <Container>
        {Array(totalCount)
          .fill('_')
          .map((_, indx) => (
            <Dot key={`dots_${indx + 1}`} active={indx === activeIndex} />
          ))}
      </Container>
    </Wrapper>
  );
}
export default memo(Dots);
