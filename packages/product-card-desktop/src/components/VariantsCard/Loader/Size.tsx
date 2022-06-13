import React from 'react';
import { styled } from '@eyewa/ui-components';
import { AnimatedLoader } from '../../Animation';

const Size = styled(AnimatedLoader)`
  display: flex;
  margin: 8px;
  width: 100%;
  padding-bottom: 8px;
  border-bottom: 1px solid #d3d3d3;
`;
const Round = styled(AnimatedLoader)`
  border-radius: 100%;
  padding: 10px;
  width: 4px;
  height: 4px;
`;
const Line = styled(AnimatedLoader)`
  height: 20px;
  margin-left: 10px;
  width: 50%;
`;

interface Props {
  sizeCount: number;
}
const SizeLoader = ({ sizeCount }: Props) => (
  <>
    {[...Array(sizeCount)].map((_, idx) => {
      const index = `${idx}-loader`;
      return (
        <Size key={index}>
          <Round className="client" />
          <Line className="client" />
        </Size>
      );
    })}
  </>
);

export default SizeLoader;
