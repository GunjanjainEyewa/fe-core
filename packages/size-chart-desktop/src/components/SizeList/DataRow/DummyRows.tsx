import React, { useEffect, useState } from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import { OptionData } from '@eyewa/size-chart-shared/types';
import { getDummyRowData } from '@eyewa/size-chart-shared/utils';


interface DummyRowProps {
  options: OptionData[];
}
const DataRowWrapper = styled.div`
  display: flex;
  &:nth-of-type(even) {
    background-color: ${({ theme }) => theme.colors.surface20};
  }
`;
const FirstColumnSizeData = styled.div`
  flex: 0 0 120px;
  height: 50px;
  border-right: solid 1px ${({ theme }) => hexToRgb(theme.colors.state, 0.22)};
`;

const DummyRows = ({ options }: DummyRowProps) => {
  const [dummyOptions, setDummyOptions] = useState<number[]>();
  useEffect(() => {
    setDummyOptions(getDummyRowData(options?.length));
  }, []);
  return (
    <>
      {dummyOptions?.map((ele, index) => (
        <DataRowWrapper key={`DummyDataRow ${index}`}>
          <FirstColumnSizeData />
        </DataRowWrapper>
      ))}
    </>
  );
};

export default DummyRows;
