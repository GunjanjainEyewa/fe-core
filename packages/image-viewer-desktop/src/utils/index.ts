import { scaleImage } from '@eyewa/utils/image';
import { HandleImageClick } from '../types';
import { ImageItem } from '../types/Product';
import { IMAGE_VIEWER_OVERLAY, IMAGE_VIEWER_POPUP } from '../constants';


export const closeImageViewerPopup = () => {
  const imageViewerPopup = document?.getElementById(IMAGE_VIEWER_POPUP);
  const overlayNode = document?.getElementById(IMAGE_VIEWER_OVERLAY);
  document.body.style.overflow = '';
  if (imageViewerPopup && overlayNode) {
    imageViewerPopup.style.minWidth = '0';
    imageViewerPopup.style.display = 'none';
    overlayNode.style.display = 'none';
  }
};

export const openImageViewerPopup = () => {
  const imageViewerPopup = document?.getElementById(IMAGE_VIEWER_POPUP);
  const overlayNode = document?.getElementById(IMAGE_VIEWER_OVERLAY);
  document.body.style.overflow = 'hidden';
  if (imageViewerPopup && overlayNode) {
    imageViewerPopup.style.width = '100%';
    imageViewerPopup.style.maxWidth = '950px';
    imageViewerPopup.style.display = 'block';
    overlayNode.style.display = 'block';
  }
};

export const scaleUrlForImageViewer = (imageUrl: string) => {
  let updatedUrl = imageUrl?.split('?')[0] || '';
  updatedUrl = scaleImage({
    url: updatedUrl,
    width: 550,
    height: 550,
  });
  return updatedUrl;
};

export const handleImageClick = (imageData: ImageItem, props: HandleImageClick) => {
  const {
    reviewData,
    setSelectedImageData,
    setActiveReview,
  } = props;
  const currentIndex = (imageData?.id)?.slice(-1);
  let forwardButtonActive = true;
  let backwardButtonActive = true;
  if (parseInt(currentIndex, 10) === 0) {
    backwardButtonActive = false;
  }
  if (parseInt(currentIndex, 10) === reviewData?.imageUrl?.length - 1) {
    forwardButtonActive = false;
  }
  setSelectedImageData({
    selectedUrl: scaleUrlForImageViewer(imageData.url),
    activeIndex: parseInt(currentIndex, 10),
    forwardActive: forwardButtonActive,
    backwardActive: backwardButtonActive,
  });
  setActiveReview(reviewData.review[0]);
};
