import React, { useCallback, useEffect, useState } from 'react';
import { styled } from '@eyewa/ui-components';
import { getListProductUrl } from '@eyewa/utils/urls';
import { isShade } from '@eyewa/product-card-shared/utils/variants';
import { Variant } from '@eyewa/product-card-shared/types/variants';
import { pushEvent } from '@eyewa/data-layer';
import { NewTags } from '@eyewa/product-card-shared/types/tags';
import { getOfferTrackingData } from '@eyewa/product-card-shared/utils';
import CardDetail from './components/CardInfo';
import OutOfStock from './components/OutOfStock';
import CardAction from './components/CardActions';
import VariantCard from './components/VariantsCard';
import { ProductCardProps, ProductDefaultProps } from './types';
import { getVariants } from './utils';
import ProTagSvg from './components/CardInfo/ProTagSvg';

const CardWrapper = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.spacing60};
  margin-bottom: ${({ theme }) => theme.spacing.spacing120};
  position: relative;
  height: 440px;
  min-width: 250px;
  width: 33.33%;
  overflow: hidden;
`;
const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borders.radius20};
  box-shadow: 0 1px 3px rgb(226 226 226 / 25%), 0 1px 2px rgb(226 226 226 / 50%);
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  .hide {
    display: none;
  }
  .show {
    display: block;
  }
  .showBottomAction{
    @media only screen and (min-width: 768px) and (max-width: 1024px){
      display: block;
    }
  }
`;

const ProductCard = (props: ProductCardProps) => {
  const newProps = { ...ProductDefaultProps, ...props };
  const {
    imageUrl,
    product,
    showProFlag,
    lazyLoadImage,
    positionInList,
    size,
    user,
    variants,
    pageLocation,
    showFixedAction = false,
    onlyAddToBag = false,
    addToCartCallback,
    wishlistCallback,
    fetchVariants,
    isRegisteredViaMobile,
    sendNotifyMe,
    redirectAuthPage,
    handleSlider,
    customClass = '',
    plpPriceReveal,
    pdpRecommendationUrl,
    handleShowCAB,
    journeyData,
  } = newProps;
  const [showAction, setShowAction] = useState(false);
  const [showShades, setShowShades] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(product);
  const [showNotifyMe, setShowNotifyMe] = useState(false);
  const { childId, parentId, slug } = selectedProduct || {};
  const { newTags = [], dynamicTags: tags = [] } = product;
  const pdpPageUrl = pdpRecommendationUrl || getListProductUrl({
    id: childId, parentId, slug, position: positionInList + 1,
  });
  const hasSize = !isShade(product.variantType);
  const isVariantData = ((getVariants(variants, product?.id) || []).length) > 0;
  const showPalette = (showShades) && (isVariantData);
  const actionClass = ((showAction) || (showFixedAction) || (showPalette)) ? 'show' : 'hide';
  const { showOffer, offerId: id, offer } = product;
  const { offerMessage, offerId } = getOfferTrackingData({ showOffer, offerId: id, offer });
  const displayAction = () => {
    if ((showPalette) || (showNotifyMe) || (showFixedAction)) {
      return;
    }
    setShowAction(true);
  };
  const hideAction = () => {
    if ((showPalette) || (showNotifyMe) || (showFixedAction)) {
      return;
    }
    setShowAction(false);
  };
  const handleVariant = () => {
    const pdtTags = newTags?.map((tag:NewTags) => tag?.title)?.toString();
    const dynamicTags = tags?.toString();
    setShowShades(true);
    setShowNotifyMe(false);
    pushEvent('handleVariant', {
      pdtTags,
      dynamicTags,
      ...(offerId && { offerId }),
      ...(offerMessage && { offerMessage }),
    });
  };
  const handleVariantCross = useCallback(() => {
    setShowShades(false);
    setSelectedProduct(product);
  }, [product]);
  const handleSelectedVariant = useCallback(
    (pro: Variant) => {
      setSelectedProduct({ ...product, ...pro });
    },
    [product],
  );
  const openNotifyMe = useCallback(() => {
    setShowNotifyMe(true);
    setShowShades(false);
  }, []);
  const closeNotifyMe = useCallback(() => {
    setShowNotifyMe(false);
    setSelectedProduct(product);
  }, [product]);
  useEffect(() => {
    setSelectedProduct(product);
  }, [product]);
  return (
    <CardWrapper className={customClass}>
      <Container onMouseEnter={displayAction} onMouseLeave={hideAction}>
        {(showNotifyMe) && (
          <OutOfStock
            user={user}
            isRegisteredViaMobile={isRegisteredViaMobile}
            product={selectedProduct}
            closeNotifyMe={closeNotifyMe}
            sendNotifyMe={sendNotifyMe}
          />
        )}
        {
          (showProFlag) && (
            <ProTagSvg />
          )
        }
        {(!showPalette) && (!showNotifyMe) && (
          <CardDetail
            product={selectedProduct}
            imageUrl={imageUrl}
            showProFlag={showProFlag}
            lazyLoadImage={lazyLoadImage}
            pdpPageUrl={pdpPageUrl}
            size={size}
            plpPriceReveal={plpPriceReveal}
          />
        )}
        {(showShades) && (!showNotifyMe) && (
          <VariantCard
            product={selectedProduct}
            handleVariantCross={handleVariantCross}
            isSize={hasSize}
            variantsData={variants}
            fetchVariants={fetchVariants}
            handleSelectedVariant={handleSelectedVariant}
          />
        )}
        {(!showNotifyMe) && (
          <div className={`showBottomAction ${actionClass}`}>
            <CardAction
              user={user}
              showShades={showPalette}
              product={selectedProduct}
              pdpPageUrl={pdpPageUrl}
              pageLocation={pageLocation}
              onlyAddToBag={onlyAddToBag}
              handleVariant={handleVariant}
              openNotifyMe={openNotifyMe}
              handleSlider={handleSlider}
              handleVariantCross={handleVariantCross}
              addToCartCallback={addToCartCallback}
              wishlistCallback={wishlistCallback}
              redirectAuthPage={redirectAuthPage}
              handleShowCAB={handleShowCAB}
              journeyData={journeyData}
            />
          </div>
        )}
      </Container>
    </CardWrapper>
  );
};
export default ProductCard;
