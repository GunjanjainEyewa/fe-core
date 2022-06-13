import React, { useState } from 'react';
import { styled } from '@nykaa/ui-components';
import InputBox from '../InputBox';
import { sanitizeSocialLogin } from '../../utils';
import { SocialLinks } from '../../types';
import Facebook from '../../icons/facebook';
import Instagram from '../../icons/instagram';
import Youtube from '../../icons/youtube';
import LinkedIn from '../../icons/linkedIn';


interface Props {
  socialLinks: string;
  onFacebookChange?: (value: string) => void;
  onInstagramChange?: (value: string) => void;
  onYoutubeChange?: (value: string) => void;
  onLinkedInChange?: (value: string) => void
}

const PageRoot = styled.div`
  margin-left: ${({ theme }) => theme.spacing.spacing160};
`;

const SocialPage: React.FunctionComponent<Props> = ({ ...props }: Props) => {
  const {
    socialLinks,
    onFacebookChange,
    onInstagramChange,
    onYoutubeChange,
    onLinkedInChange,
  } = props;

  const {
    businessFacebookUrl,
    businessInstagramUrl,
    businessYoutubeUrl,
    businessLinkedInUrl,
  }: SocialLinks = sanitizeSocialLogin(socialLinks);

  const [facebookUrl, setFacebookUrl] = useState(businessFacebookUrl);
  const [youtubeUrl, setYoutubeUrl] = useState(businessYoutubeUrl);
  const [instagramUrl, setInstagramUrl] = useState(businessInstagramUrl);
  const [linkedInUrl, setlinkedInUrl] = useState(businessLinkedInUrl);

  const handleChange = (type: 'facebook' | 'instagram' | 'youtube' | 'linkedIn', value: string): void => {
    switch (type) {
      case 'facebook':
        setFacebookUrl(value);
        onFacebookChange(value);
        break;
      case 'instagram':
        setInstagramUrl(value);
        onInstagramChange(value);
        break;
      case 'youtube':
        setYoutubeUrl(value);
        onYoutubeChange(value);
        break;
      case 'linkedIn':
        setlinkedInUrl(value);
        onLinkedInChange(value);
        break;
      default:
        break;
    }
  };

  return (
    <PageRoot>
      <InputBox
        margin
        label="Facebook"
        icon={<Facebook />}
        value={facebookUrl}
        onChange={(value) => handleChange('facebook', value)}
      />
      <InputBox
        margin
        label="Instagram"
        value={instagramUrl}
        icon={<Instagram />}
        onChange={(value) => handleChange('instagram', value)}
      />
      <InputBox
        margin
        label="Youtube"
        icon={<Youtube />}
        value={youtubeUrl}
        onChange={(value) => handleChange('youtube', value)}
      />
      <InputBox
        margin
        label="LinkedIn"
        icon={<LinkedIn />}
        value={linkedInUrl}
        onChange={(value) => handleChange('linkedIn', value)}
      />
    </PageRoot>
  );
};

export default SocialPage;
