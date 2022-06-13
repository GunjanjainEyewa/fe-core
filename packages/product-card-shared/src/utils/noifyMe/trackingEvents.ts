import { pushEvent } from '@nykaa/data-layer/utils';
import { events } from '@nykaa/data-layer/constants';
import { NotifyMeTrackingData } from '../../types/notifyMe';
import { getPageSource } from '..';

export const pushNotifyMe = ({
  brandName,
  productName,
  productId,
  primaryCategories,
  offerPrice,
  videoId,
  pageLocation,
  offerId,
  offerMessage,
}: NotifyMeTrackingData) => {
  if (!productId) {
    throw new Error('product id is mandatory');
  }

  const pageSource = getPageSource({
    pageLocation,
    productId,
    isPreview: false,
  });

  const notifyMeSuccess = {
    variantName: productName,
    productId,
    categoryLevel: primaryCategories,
    brandName,
    offerPrice,
    videoId,
    pageSource,
  };

  pushEvent(
    events.NOTIFY_ME,
    {
      notifyMeSuccess,
      ...(offerId && { offerId }),
      ...(offerMessage && { offerMessage }),
    },
  );
};

export const dummy = () => {};
