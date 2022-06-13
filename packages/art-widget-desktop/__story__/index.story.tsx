import React from 'react';
import ArtWidget from '../src';
import { Configs } from '../src/types';

export default {
  title: 'widgets/Art',
  component: ArtWidget,
};

const configs = {
  title: 'The Perfect Primer For You',
  content: "Want to make your makeup last longer? It's time you add the genius primer to your routine. Keeping your makeup in place is now no problem!",
  link: "https://www.nykaa.com/best-face-primers-beauty-online-sale?intcmp=makeup-face-face-primer,content-banner,1,buying-guide,best-face-primers-beauty-online-sale",
  linkText: "Shop Now",
  image: "https://www.nykaa.com/media/categoryInfo/art_banner_image/topratedprimersatnykaacontentbanner.jpg"
};

export const ArtWidgetComponent = (args: Configs) => {
  return(<ArtWidget configs={args || configs}/>)
}

ArtWidgetComponent.args = {
  title: 'The Perfect Primer For You',
  content: "Want to make your makeup last longer? It's time you add the genius primer to your routine. Keeping your makeup in place is now no problem!",
  link: "https://www.nykaa.com/best-face-primers-beauty-online-sale?intcmp=makeup-face-face-primer,content-banner,1,buying-guide,best-face-primers-beauty-online-sale",
  linkText: "Shop Now",
  image: "https://www.nykaa.com/media/categoryInfo/art_banner_image/topratedprimersatnykaacontentbanner.jpg"
}

