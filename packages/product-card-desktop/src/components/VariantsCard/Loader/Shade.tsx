import React from 'react';
import { styled } from '@eyewa/ui-components';
import { AnimatedLoader } from '../../Animation';

const ShadeImg = styled(AnimatedLoader)`
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  width: 32px;
  height: 32px;
  position: relative;
  margin: 8px;
`;

interface Props {
  shadeCount: number;
}
const ShadeLoader = ({ shadeCount }: Props) => (
  <>
    {[...Array(shadeCount)].map((_, idx) => {
      const index = `${idx}-size-loader`;
      return (<ShadeImg key={index} className="client" />);
    })}
  </>
);
export default ShadeLoader;
