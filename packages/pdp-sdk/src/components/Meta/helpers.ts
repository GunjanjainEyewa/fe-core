import { MetaInfo, ProductInfo, TopReviewInfo } from '../../types/transformer';

interface ReviewMeta {
  review?: { [key: string]: string | object };
  aggregateRating?: { [key: string]: string | number };
}

type GetReviewData = Pick<TopReviewInfo, 'helpfulReview' | 'rating' | 'reviewCount'>;

export const getReviewData = ({ reviewCount, rating, helpfulReview }: GetReviewData) => {
  const data: ReviewMeta = {};

  if (helpfulReview && helpfulReview.length > 0) {
    const selectedReview = helpfulReview[0];
    data.review = {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: selectedReview.rating,
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: selectedReview.userName,
      },
    };
  }
  if (rating && reviewCount) {
    data.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: rating,
      reviewCount,
    };
  }

  return data;
};

type Props = MetaInfo & ProductInfo & TopReviewInfo;

export const getJSONLD = ({
  description,
  imgUrl,
  productUrl,
  title,
  subTitle,
  sku,
  isOutOfStock,
  price,
  discount,
  discountedPrice,
  currency,
  helpfulReview,
  rating,
  reviewCount,
}: Props) => JSON.stringify({
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: `${title} ${subTitle}`,
  description,
  image: imgUrl,
  sku,
  mpn: sku,
  brand: { '@type': 'Brand', name: title },
  offers: {
    '@type': 'Offer',
    url: productUrl,
    priceCurrency: currency,
    price: discount ? discountedPrice : price,
    itemCondition: 'https://schema.org/NewCondition',
    availability: `https://schema.org/${isOutOfStock ? 'OutOfStock' : 'InStock'}`,
  },
  ...getReviewData({ helpfulReview, rating, reviewCount }),
});
