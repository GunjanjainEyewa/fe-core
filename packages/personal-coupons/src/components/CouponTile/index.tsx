import React from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import { pushEvent } from '@eyewa/data-layer/utils';
import USE_CODE, {
  COPY_CODE,
  COPY_BUTTON_CLICK,
  FONT_NORMAL,
  BORDER_NORMAL,
  SIZE,
} from '../../constants';
import getFontData, { getBorderData } from '../../helper';
import {
  StyleProps,
} from '../../types';


interface CopyButtonProps {
  couponCode: string;
  productId: string;
  id: number;
  snackBarCallBack: () => void;
}
interface TileProps {
  productId: string;
  id: number;
  couponCode: string;
  description: string;
  snackBarCallBack: () => void;
}
const Wrapper = styled.div`
  height: 130px;
  border: 2px dashed ${({ theme }) => hexToRgb(theme.colors.state, 0.32)};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borders.radius20};
`;
const TitleContainer = styled.div`
  line-height: 20px;
  width: 90%;
  height: 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.span<StyleProps>`
  ${(props) => getFontData({ ...props, kind: FONT_NORMAL })};
  color: ${({ theme }) => theme.colors.textPrimary};
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ theme }) => theme.typography.subTitleMedium};
  .title {
    color: ${({ theme }) => theme.colors.primary};
    ${(props) => getFontData({ ...props })};
    text-transform: none;
  }
`;
const CopyButton = styled.button<StyleProps>`
  ${(props) => getBorderData({ ...props, kind: BORDER_NORMAL })};
  padding: ${({ theme }) => theme.spacing.spacing20};
  border-color: ${({ theme }) => hexToRgb(theme.colors.primary, 0.8)};
  color: ${({ theme }) => theme.colors.primary};
  background: #fff;
  cursor: pointer;
  ${({ theme }) => theme.typography.bodyMedium};
`;
const CopyButtonText = styled.div`
  margin-top: ${({ theme }) => theme.spacing.spacing10};
  ${({ theme }) => theme.typography.buttonMedium};
`;
const Desc = styled.div<StyleProps>`
  width: 90%;
  height: 50%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  ${({ theme }) => theme.typography.bodyMedium};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const copyHandler = ({
  couponCode,
  productId,
  id,
  snackBarCallBack,
}: CopyButtonProps) => {
  pushEvent(COPY_BUTTON_CLICK, {
    products: productId,
    offerId: id,
  });
  if (navigator && navigator.clipboard) {
    navigator.clipboard.writeText(couponCode);
  }
  snackBarCallBack();
};

const TileView = ({
  productId,
  id,
  couponCode,
  description,
  snackBarCallBack,
}: TileProps) => (
  <Wrapper>
    <TitleContainer>
      <Title size={SIZE.medium}>
        {USE_CODE}
        {(couponCode)
          && (<span className="title">{couponCode}</span>)}
      </Title>
      <CopyButton
        size={SIZE.small}
        onClick={() => copyHandler({
          couponCode,
          productId,
          id,
          snackBarCallBack,
        })}
      >
        <CopyButtonText>
          {COPY_CODE}
        </CopyButtonText>
      </CopyButton>
    </TitleContainer>
    <Desc size={SIZE.medium}>
      {description}
    </Desc>
  </Wrapper>
);

export default TileView;
