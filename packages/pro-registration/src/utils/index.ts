import { SocialLinks } from '../types';

const transformSocialKeys = (key: string): string => {
  const onlinePresence: {[key: string]: string} = {
    business_youtube_url: 'businessYoutubeUrl',
    business_facebook_url: 'businessFacebookUrl',
    business_instagram_url: 'businessInstagramUrl',
    business_linked_in_url: 'businessLinkedInUrl',
    business_profile_url: 'businessProfileUrl',
  };
  return onlinePresence[key] || '';
};

export const sanitizeSocialLogin = (argument: string): SocialLinks => {
  const sanitizedLinks: any = {
    businessYoutubeUrl: '',
    businessFacebookUrl: '',
    businessInstagramUrl: '',
    businessLinkedInUrl: '',
    businessProfileUrl: '',
  };
  if (!argument) {
    return sanitizedLinks;
  }
  const links = argument.split('|');
  links.forEach((link: string) => {
    const [key, value] = link.split('=');
    const transformedKey = transformSocialKeys(key);
    if (transformedKey in sanitizedLinks) {
      sanitizedLinks[transformedKey] = value || '';
    }
  });
  return sanitizedLinks;
};

export const convertToBase64 = (file: Blob) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});

export const getDevice = (device: number): string => {
  switch (device) {
    case 0:
      return 'android';
    case 1:
      return 'ios';
    case 2:
      return 'web';
    default:
      return 'web';
  }
};

export const dummy = () => {};
