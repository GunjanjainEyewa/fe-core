import React from 'react';
import styled from '@eyewa/ui-components/styles/styled';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import { UnitProps } from '@eyewa/size-chart-shared/types';
import { getMinWidth } from '../../utils';


interface WrapperProps {
  totalColumns: number;
  height: string;
}


const Wrapper = styled.div`
  ${({ theme }) => theme.typography.bodySmall};
  transition: 0.5s;
  display: flex;
  min-width: ${({ totalColumns }: WrapperProps) => getMinWidth(totalColumns)};
  height: ${({ height }: WrapperProps) => height};

  border-bottom: solid 1px ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.16)};
  align-items: center;
  &.fixedWidth {
    width: ${({ totalColumns }: WrapperProps) => getMinWidth(totalColumns)};
  }

  &:focus {
    background: ${({ theme }) => hexToRgb(theme.colors.primary, 0.16)};
    transition: 500ms;
  }
  &:active {
    background: ${({ theme }) => hexToRgb(theme.colors.primary, 0.16)};
    transition: 500ms;
  }
  &.row {
    &:nth-of-type(odd) {
    background-color: ${({ theme }) => hexToRgb(theme.colors.state, 0.04)};
    }
    &.selected {
      background-color: ${({ theme }) => hexToRgb(theme.colors.primary, 0.04)};
    }
  }
`;
const RowData = styled.div`
  flex: 1;
  text-align: center;
  padding: 16px 0 14px;
`;

const Text = styled(RowData)`
  ${({ theme }) => theme.typography.labelMedium};
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.92)};
  &.fixedWidth {
    width: 64px;
    flex: 0 0 64px;
    word-break: break-word;
  }
`;


interface DataColumnProps {
  sizeOptions: UnitProps[];
  headerHeight: string;
}

const DataColumn = (props: DataColumnProps) => {
  const {
    sizeOptions,
    headerHeight,
  } = props;

  const totalColumns = sizeOptions.length;
  const moreThan3Column = totalColumns > 3;

  return (
    <Wrapper
      className="headerWrapper"
      totalColumns={totalColumns}
      height={headerHeight}
    >
      {sizeOptions && sizeOptions.map((option) => (
        <Text
          className={moreThan3Column ? 'fixedWidth' : ''}
          key={option.id}
        >
          {option.text}
        </Text>
      ))}
    </Wrapper>
  );
};

export default DataColumn;
