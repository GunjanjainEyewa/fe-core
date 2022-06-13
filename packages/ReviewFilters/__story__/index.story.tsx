import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import Filters from '../src/Filters';
import Sort from '../src/Sort';
import SortModal from '../src/Sort/SortModal';
import Variants from '../src/Variants';
import VariantModal from '../src/Variants/VariantModal';


export default {
  title: 'ReviewFilters',
  component: Filters,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex'
    },
  },
};

const options =[
    {
      isSelected: true,
      id: 'VERIFIED_BUYER',
      text: 'Verified Buyers',
    },
    {
      isSelected: false,
      id: 'WITH_IMAGES',
      text: 'with Images',
    }
]
const theme = {
  primaryColor: '#fc2779',
  verifiedCircle: '#ffd3e4',
  veirfiedCheck: '#FF5295',
  backgroundColor: '#fff',
  ratingGreenBgColor: '#5cd285',
  ratingOrangeBgColor: '#fa6400',
  ratingRedBgColor: '#E02020',
  lightBorder: '#eeeeee',
  secondaryTextColor: '#3f414d',
  primaryTextColor: '#1b1b1b',
  brandPrimary: '#fc2779',
  lightGrey: '#757575',
  typography: {
    bodyXSmall: {
      fontSize: '10px',
      fontWeight: 400,
      lineHeight: '12px',
      letterSpacing: 0.1
    },
    bodyMedium: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: 0
    },
    bodyLarge: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: 0
    },
    titleXSmall: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '20px',
      letterSpacing: 0
    },
  }
};
export const SimpleFilters = () => (
  <Filters
    theme={theme}
    options={options}
    handleClick={action('click-on-filter')}
  />
);
const sortOptions = {
  text: 'Sort Reviews By',
  options: [
    {
      isSelected: true,
      id: 'VERIFIED_BUYER',
      text: 'Verified Buyers',
    },
    {
      isSelected: false,
      id: 'WITH_IMAGES',
      text: 'with Images',
    }
  ]
}
export const SortOptions = () => (
  <Sort
    options={sortOptions.options}
    openSort={action('click-on-sort')}
  />
);

export const SortOptionsModal = () => (
  <SortModal
    options={sortOptions.options}
    text={sortOptions.text}
    changeSort={action('sort-option-selected')}
    theme={theme}
  />
);

export const SelectedVariants = () => (
  <Variants
    variantsLength={3}
    variantType='shade'
    handleVariantModal={action('click-on-variant-option')}
    theme={theme}
  />
);

const VariantOptions = {
  options: [
    {
    productId: '1234',
    variantName: 'Femme Fatale',
    variantIcon: 'https://images-static.nykaa.com/media/icons/8904245708757_femmefatale.jpg',
    },
    {
      productId: '1235',
      variantName: 'Face Palm',
      variantIcon: 'https://images-static.nykaa.com/media/icons/8904245708825_facepalm.jpg',
    }
  ],
  selectedVariants: [
    {
    productId: '1235',
    variantName: 'Face Palm',
    variantIcon: 'https://images-static.nykaa.com/media/icons/8904245708825_facepalm.jpg',
    }, 
    {
      productId: '1235',
      variantName: 'Face Palm',
      variantIcon: 'https://images-static.nykaa.com/media/icons/8904245708825_facepalm.jpg',
    }
  ]
}

export const VariantOptionModal = () => (
  <VariantModal
    theme={theme}
    options={VariantOptions.options}
    closeModal = {action('click-on-modal-cross')}
    handleApply= {action('click-n-apply-button')}
    updateVariants={action('click-on-clear-all-button')}
    handleClick={action('click-on-particular-shade')}
    handleClose={action('click-on-particular-shade-cross-icon')}
    isSelected={()=> true}
    variantType='shade'
    applyDisabled={false}
    selectedVariants={VariantOptions.selectedVariants}
  />
);


