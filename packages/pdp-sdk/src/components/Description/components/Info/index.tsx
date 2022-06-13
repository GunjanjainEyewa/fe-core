// libs
import React, { memo } from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';

// components
import LineSeparator from '../../../LineSeparator';

// defs
import { ProductAttributeInfo } from '../../../../types/transformer';

// styles
const Wrapper = styled.div`
  width: 100%;
`;

const Column = styled.div`
  width: 50%;
  display: inline-block;
  padding-right: ${({ theme }) => theme.spacing.spacing80};
  min-height: 80px;
  vertical-align: top;
`;

const Title = styled.h4`
  color: ${({ theme }) => theme.colors.textPrimary};
  ${({ theme }) => theme.typography.bodyMedium};
  margin-bottom: ${({ theme }) => theme.spacing.spacing20};
  text-transform: capitalize;
`;

const Desc = styled.div<{ actionUrl: string }>`
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.64)};
  ${({ theme }) => theme.typography.bodySmall};
  margin-bottom: ${({ theme }) => theme.spacing.spacing80};

  &:last-child {
    margin-bottom: 0;
  }

  ${({ actionUrl }) => actionUrl && 'text-decoration: underline;cursor: pointer;'}
`;

const AttrContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.spacing80};
`;

const AttrRow = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.spacing40};
`;

const AttrKey = styled.span`
  display: inline-block;
  width: 110px;
  color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.64)};
  ${({ theme }) => theme.typography.bodySmall};
`;

const AttrValue = styled.div`
  display: inline-block;
  color: ${({ theme }) => theme.colors.textPrimary};
  ${({ theme }) => theme.typography.bodySmall};
`;

const PRODUCT_INFO_SLUGS = {
  DESCRIPTION: 'description',
};

export interface Props {
  data: ProductAttributeInfo;
}

function Info({ data }: Props) {
  const Component = data.shouldShowAsColumn ? Column : Wrapper;

  return (
    <Component>
      <Title>{data.title}</Title>

      {data.value && (
        <Desc dangerouslySetInnerHTML={{ __html: data.value }} actionUrl={data.actionUrl} />
      )}

      {data.attributes && (
        <AttrContainer>
          {data.attributes.map((attr, indx) => (
            <AttrRow key={`attr_${indx + 1}`}>
              <AttrKey>{attr.key}</AttrKey>
              <AttrValue>{attr.value}</AttrValue>
            </AttrRow>
          ))}
        </AttrContainer>
      )}

      {data.slug === PRODUCT_INFO_SLUGS.DESCRIPTION && <LineSeparator />}
    </Component>
  );
}

export default memo(Info);
