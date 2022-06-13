import React from 'react';
import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';
import { BaseProps, OptionData } from '@eyewa/size-chart-shared/types';
import { SIZE_CHART_OVERLAY, SIZE_CHART_SIDENAV } from '@eyewa/size-chart-shared/constants';
import { ListingProduct, User } from '@eyewa/product-card-shared/types';
import { CartParams } from '@eyewa/product-card-shared/types/addToCart';
import { AddToWishlist, RemoveFromWishlist } from '@eyewa/product-card-shared/types/addToWishlist';
import { NotifyMeParams } from '@eyewa/product-card-shared/types/notifyMe';
import { closeSizeChart } from './utils';
import Header from './components/Header';
import SizeList from './components/SizeList';
import Footer from './components/Footer';


interface SizeChartProps extends BaseProps {
  title: string;
  selectedOption: string;
  unSelectVariantOncloseChart: () => void;
  product: ListingProduct;
  user: User;
  wishlistCallback: (params: AddToWishlist | RemoveFromWishlist, isAdd: boolean) => Promise<any>;
  redirectAuthPage: () => void;
  pageLocation: string;
  isPro: boolean;
  addToCartCallback: (params: CartParams) => Promise<any>;
  handleSliderAction: () => void;
  notifyClose: () => void;
  sendNotifyMe: (e: NotifyMeParams) => Promise<any>;
  isRegisteredViaMobile: (e: string) => boolean;
}
const OverLay = styled.div`
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => hexToRgb(theme.colors.textPrimary, 0.3)};
  z-index: 10;
  cursor: pointer;
`;
const SizeChartNav = styled.div`
  height: 100vh;
  width: 0;
  position: fixed;
  z-index: 11;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  padding-top: ${({ theme }) => theme.spacing.spacing240};
`;
const SizeChart = (props: SizeChartProps) => {
  const {
    title,
    sizeOptions,
    options,
    units,
    unitSelectionText,
    selectedOption,
    handleClickSizeSelect,
    unSelectVariantOncloseChart,
    product,
    user,
    wishlistCallback,
    redirectAuthPage,
    pageLocation,
    isPro,
    addToCartCallback,
    handleSliderAction,
    notifyClose,
    sendNotifyMe,
    isRegisteredViaMobile,
  } = props;

  const selectedSize = options.find((ele: OptionData) => selectedOption === ele.id);
  return (
    <>
      <OverLay
        id={SIZE_CHART_OVERLAY}
        onClick={() => closeSizeChart(unSelectVariantOncloseChart)}
      />
      <SizeChartNav id={SIZE_CHART_SIDENAV}>
        <Header
          title={title}
          unSelectVariantOncloseChart={unSelectVariantOncloseChart}
        />
        <SizeList
          options={options}
          units={units}
          sizeOptions={sizeOptions}
          handleClickSizeSelect={handleClickSizeSelect}
          unitSelectionText={unitSelectionText}
          selectedOption={selectedOption}
        />
        <Footer
          product={product}
          user={user}
          wishlistCallback={wishlistCallback}
          redirectAuthPage={redirectAuthPage}
          pageLocation={pageLocation}
          isPro={isPro}
          addToCartCallback={addToCartCallback}
          handleSliderAction={handleSliderAction}
          notifyClose={notifyClose}
          sendNotifyMe={sendNotifyMe}
          isRegisteredViaMobile={isRegisteredViaMobile}
          selectedSize={selectedSize?.packSize}
        />
      </SizeChartNav>
    </>
  );
};

export default SizeChart;
