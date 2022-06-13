import React from 'react';
import { styled } from '@nykaa/ui-components';
import SizeLoader from './Size';
import ShadeLoader from './Shade';


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;
const ShadeWrapper = styled.div`
  display: flex;
  height: 225px;
  flex-wrap: wrap;
  align-content: start;
`;

interface Props {
  shadeCount: number;
  isSize: boolean;
  sizeCount: number;
}
const VariantLoader = ({ shadeCount, sizeCount, isSize }: Props) => (
  <Wrapper>
    <ShadeWrapper>
      {isSize
        && <SizeLoader sizeCount={sizeCount} />}
      {!isSize && <ShadeLoader shadeCount={shadeCount} />}
    </ShadeWrapper>
  </Wrapper>
);

export default VariantLoader;
