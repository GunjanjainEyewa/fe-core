// libs
import React, { memo } from 'react';
import { styled } from '@nykaa/ui-components';

// defs
import { DescAttributesInfo } from '../../types/transformer';

// components
import Section from '../Section';
import Info from './components/Info';

const TITLE = 'Product Information';

const Title = styled.h2`
  ${({ theme }) => theme.typography.titleXSmall}
  color: ${({ theme }) => theme.colors.textPrimary}
  letter-spacing: 0.25px;
  text-transform: capitalize;
  margin: 0 0 ${({ theme }) => theme.spacing.spacing40} 0; 
`;

export interface Props{
  data: DescAttributesInfo
}

function Description({ data }: Props) {
  if (!data || !data.list || data.list.length === 0) {
    return null;
  }

  return (
    <Section>
      <Title>{data.title || TITLE}</Title>
      {data.list.map((info, indx) => (
        <Info key={`desc_attr_${indx + 1}`} data={info} />
      ))}
    </Section>
  );
}

export default memo(Description);
