// libs
import React, { memo } from 'react';
import Helmet from 'react-helmet';

// defs
import { MetaWidgetInfo } from '../../types/transformer';

// helpers
import { getJSONLD } from './helpers';

export interface Props{
  data: MetaWidgetInfo
}

function Meta({ data }: Props) {
  if (!data) {
    return null;
  }

  const JSONLDData = getJSONLD(data);
  const price = data.discount ? data.discountedPrice : data.price;

  return (
    <Helmet>
      <title>{data.title}</title>

      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      <meta name="robots" content="INDEX,FOLLOW" />
      <link rel="canonical" href={data.productUrl} />

      <meta property="og:type" content="og:product" />
      <meta property="og:title" content={data.title} />
      <meta property="og:image" content={data.imgUrl} />
      <meta property="og:description" content={data.description} />
      <meta property="product:price:amount" content={String(price)} />
      <meta property="product:price:currency" content={data.currency} />
      <meta property="og:url" content={data.productUrl} />

      <script type="application/ld+json">{JSONLDData}</script>
    </Helmet>
  );
}

export default memo(Meta);
