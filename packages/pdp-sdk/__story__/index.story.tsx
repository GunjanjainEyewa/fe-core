// import * as React from 'react';
// import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// // transformer
// import getMediaInfo from '../src/store/transformers/mediaInfo';
// import getProductInfo from '../src/store/transformers/productInfo';
// import getBrandInfo from '../src/store/transformers/brandInfo';
// import getCtaInfo from '../src/store/transformers/ctaInfo';
// import getTopReviews from '../src/store/transformers/topReviewsInfo';
// import getDescription from '../src/store/transformers/discriptionAttributesInfo';

// // dummy data
// import DUMMY_DATA from './dummy_data';

// // components
// import Media from '../src/components/Media';
// import ProductInfo from '../src/components/ProductInfo';
// import DesignerInfo from '../src/components/AboutDesigner';
// import CTAButtons from '../src/components/CTA';
// import TopReviewsInfo from '../src/components/TopReviews';
// import DescriptionAttributes from '../src/components/Description';
// import Star from '../src/components/StarRating';

// export default {
//   title: 'PDP-SDK',
//   component: <></>,
//   decorators: [
//     (Story) => (
//       <div>
//         <style>{"body: { margin: '0 !important', padding: '0 !important' }"}</style>
//         <Story />
//       </div>
//     ),
//   ],
//   parameters: {
//     viewport: {
//       viewports: INITIAL_VIEWPORTS,
//       defaultViewport: 'galaxys5',
//     },
//   },
// };

// export const FullPage = () => {
//   const res1 = getMediaInfo({ ...DUMMY_DATA.response, platform: 'fashion' });
//   const res2 = getProductInfo({ ...DUMMY_DATA.response, platform: 'fashion' });
//   const res3 = getBrandInfo({ ...DUMMY_DATA.response, platform: 'fashion' });
//   const res4 = getDescription({ ...DUMMY_DATA.response, platform: 'fashion' });
//   const res5 = getTopReviews({ ...DUMMY_DATA.response, platform: 'fashion' });

//   return (
//     <>
//       <Media data={res1} />
//       <ProductInfo data={res2} />
//       <DesignerInfo data={res3} />
//       <DescriptionAttributes data={res4} />
//       <TopReviewsInfo data={res5} />
//     </>
//   );
// };

// export const MediaInfo = () => {
//   const res = getMediaInfo({ ...DUMMY_DATA.response, platform: 'fashion' });

//   return <Media data={res} />;
// };

// export const PrimaryInfo = () => {
//   const res = getProductInfo({ ...DUMMY_DATA.response, platform: 'fashion' });

//   return <ProductInfo data={res} />;
// };

// export const AboutDesigner = () => {
//   const res = getBrandInfo({ ...DUMMY_DATA.response, platform: 'fashion' });

//   return <DesignerInfo data={res} />;
// };

// export const TopReviews = () => {
//   const res = getTopReviews({ ...DUMMY_DATA.response, platform: 'fashion' });

//   return <TopReviewsInfo data={res} />;
// };

// export const Description = () => {
//   const res = getDescription({ ...DUMMY_DATA.response, platform: 'fashion' });

//   return <DescriptionAttributes data={res} />;
// };

// export const StarRating = () => (
//   <>
//     <Star activeCount={1} size={10} />
//     <Star activeCount={3} size={16} />
//     <Star activeCount={3.5} size={40} />
//   </>
// );
