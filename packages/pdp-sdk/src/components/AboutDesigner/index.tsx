import React, { memo } from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';

// defs
import { BrandInfo } from '../../types/transformer';

// components
import Section from '../Section';

// styles
const Profile = styled.div`
    display: flex;
`;

const Name = styled.div`
    color: ${({ theme }) => theme.colors.textPrimary};
    ${({ theme }) => theme.typography.bodyMedium};
`;

const Desc = styled.div`
    margin-top: ${({ theme }) => theme.spacing.spacing20};
    color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.64)};
    ${({ theme }) => theme.typography.bodyMedium};
`;

const Img = styled.img`
    height: 150px;
    width: 90px;
    display: block;
    object-fit: contain;
    margin-right: ${({ theme }) => theme.spacing.spacing60};
`;

export interface Props{
  data: BrandInfo
}

function AboutDesigner({ data }: Props) {
  if (!data) {
    return null;
  }

  const ImgComponent = (
    <Img className="image" src={data.imageUrl} alt={data.title} />
  );

  return (
    <Section>
      <Profile className="designer-profile">
        {data.actionUrl ? (
          <a href={data.actionUrl}>{ImgComponent}</a>
        ) : (
          <>{ImgComponent}</>
        )}

        <div>
          <Name className="name">
            {'About '}
            {data.title}
          </Name>
          <Desc className="bio">{data.description}</Desc>
        </div>
      </Profile>
    </Section>
  );
}

export default memo(AboutDesigner);
