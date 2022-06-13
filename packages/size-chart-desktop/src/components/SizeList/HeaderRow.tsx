import React from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import { UnitProps } from '@eyewa/size-chart-shared/types';


interface HeaderRowProps {
  sizeOptions: UnitProps[];
}
const FirstRow = styled.div`
  ${({ theme }) => theme.typography.bodySmall};
  height: 56px;
  transition: 0.5s;
  border-bottom: solid 1px ${({ theme }) => hexToRgb(theme.colors.state, 0.22)};
  display: flex;
  width: 100%;
`;
const FirstColumn = styled.div`
  ${({ theme }) => theme.typography.subTitleLarge};
  width: 120px;
  padding: ${({ theme }) => theme.spacing.spacing80}
  0 ${({ theme }) => theme.spacing.spacing60};
  text-align: center;
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};
  background-color: ${({ theme }) => theme.colors.white};
  border-right: solid 1px ${({ theme }) => hexToRgb(theme.colors.state, 0.22)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.typography.bodySmall};
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: solid 1px ${({ theme }) => hexToRgb(theme.colors.state, 0.22)};
  height: 56px;
  width: calc(100% - 120px);
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FirstRowSizeData = styled.div<{ moreThan3Column: boolean; }>`
  ${({ theme }) => theme.typography.subTitleMedium};
  flex: 1;
  text-align: center;
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ moreThan3Column }) => (
    (moreThan3Column) && (
      'width: 100px; flex: 0 0 100px; word-break: break-word;'
    )
  )}
`;

const HeaderRow = ({
  sizeOptions,
}: HeaderRowProps) => {
  const totalColumns = sizeOptions?.length;
  const moreThan3Column = totalColumns > 3;
  return (
    <FirstRow>
      <FirstColumn>
        Size
      </FirstColumn>
      <HeaderWrapper
        id="headerWrapper"
      >
        {sizeOptions?.map((option) => (
          <FirstRowSizeData
            moreThan3Column={moreThan3Column}
            key={option?.id}
          >
            {option?.text}
          </FirstRowSizeData>
        ))}
      </HeaderWrapper>
    </FirstRow>
  );
};

export default HeaderRow;
