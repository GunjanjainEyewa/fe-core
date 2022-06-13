import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import ProductCard, { Product } from '../src/';
import Price from '../src/Price';
import Variants from '../src/VariantsCount';
import { Translations } from '../src/types';
import ThemeProvider from '@eyewa/ui-components/styles/ThemeProvider';
import createLightTheme from '@eyewa/ui-components/themes/lightTheme/createLightTheme';

const imageUrl = 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/7/7/773602042951_2.jpg';


export default {
  title: 'ProductCard/Mobile',
  component: ProductCard,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex'
    },
  },
};

const theme = {
  brandPrimary: '#fc2779',
  darkGrey: '#3f414d',
  lightGrey: '#8c8d94',
};


const newTags = [
  {
    title: 'Bestseller',
    bgColor: 'black',
    borderColor: '',
    titleColor: '#ffffff',
    fontSize: '8px',
    fontWeight: 500,
    opacity: 0.6,
  },
  {
    title: 'Featured',
    bgColor: '',
    borderColor: '',
    titleColor: '#fea838',
    fontSize: '8px',
    fontWeight: 500,
    opacity: 0.6,
  },
];

const Tags = [
  {
    name: 'ऑफ़र',
    id: 'offer',
  }, {
    name: 'नई',
    id: 'new',
  }, {
    name: 'बेस्ट सेलर',
    id: 'bestseller',
  },
  {
    name: [],
    id: 'bestseller',
  },
];

const product: Product = {
  name: 'Liptstick',
  productId: '423423',
  inStock: false,
  id: '4321',
  title: 'Tester Liptsick ',
  slug: 'lipstick',
  parentId: '4321',
  offersCount: 1,
  dynamicTags: ['offer', 'new'],
  quantity: 9,
  variantType: 'shade',
  variantCount: 10,
  mrp: 500,
  price: 343,
  discount: 20,
  rating: 3.5,
  ratingCount: 200,
  isBackorder: false,
  offer: 'Get upto 20% discount',
  offerColor: '#f3ba85',
}

const Products = [
  {
    name: 'Liptstick',
    productId: '423423',
    inStock: false,
    id: '4321',
    title: 'Tester Liptsick ',
    slug: 'lipstick',
    parentId: '4321',
    offersCount: 1,
    dynamicTags: ['bestseller', 'featured', 'new', 'offer', 'new', 'offer', 'new'],
    quantity: 9,
    variantType: 'shade',
    variantCount: 3,
    mrp: 500,
    price: 343,
    discount: 20,
    rating: 3.5,
    ratingCount: 200,
    isBackorder: false,
  },
  {
    name: 'Liptstick',
    productId: '423423',
    inStock: false,
    id: '4321',
    title: 'Tester Liptsick ',
    slug: 'lipstick',
    parentId: '4321',
    offersCount: 1,
    dynamicTags: ['offer', 'offer',],
    quantity: 9,
    variantType: 'shade',
    variantCount: 3,
    mrp: 500,
    price: 343,
    discount: 20,
    rating: 3.5,
    ratingCount: 200,
    isBackorder: false,
  }
];

const tagObjectsProduct = {...product , dynamicTags: Tags} 

const customTagProduct = {...product , newTags}

export const CustomTheme = () => (
  <ThemeProvider theme={createLightTheme({
    colors: {
      primary: '#003243',
    }
  })}>
     <ProductCard
      showProFlag={true}
      product={product}
      handleCardClick={action('click-on-product-card')}
      handelTagClick={action('click-on-tag')}
      imageUrl={imageUrl}
      pdpPageUrl={''}
      size="medium"
    />
  </ThemeProvider>
)

CustomTheme.storyName = 'With "theme overrides"';
CustomTheme.parameters = {
  description: 'We are passing a custom primary color',
}

export const CustomTagCard = () => (
  <ThemeProvider
    theme={createLightTheme({
      colors: {
        primary: '#003243',
      },
    })}
  >
    <ProductCard
      showProFlag={true}
      product={customTagProduct}
      handleCardClick={action('click-on-product-card')}
      handelTagClick={action('click-on-tag')}
      imageUrl={imageUrl}
      pdpPageUrl={''}
      size="medium"
    />
  </ThemeProvider>
);

CustomTagCard.storyName = 'With Custom Tag';
CustomTagCard.parameters = {
  description: 'We are passing a custom tag from backend',
};

export const PriceTheme = () => (
  <ThemeProvider theme={createLightTheme({
    colors: {
      primary: '#fc2779',
    }
  })}>
     <Price
      mrp={256}
      discount={20}
      price={459}
      size="small"
    />
  </ThemeProvider>
)

PriceTheme.storyName = 'With "theme overrides mrp is greater than offerprice"';
PriceTheme.parameters = {
  description: 'We are passing a custom primary color',
}

export const OfferPrice = () => (
  <ThemeProvider theme={createLightTheme({
    colors: {
      primary: '#fc2779',
    }
  })}>
     <Price
      mrp={500}
      discount={20}
      price={459}
      size="small"
    />
  </ThemeProvider>
)

OfferPrice.storyName = 'With "theme overrides n mrp is less than offerprice"';
OfferPrice.parameters = {
  description: 'We are passing a custom primary color',
}

export const ArrayOfTagObjectsSupport = () => (
  <ThemeProvider theme={createLightTheme({
    colors: {
      primary: '#003243',
    }
  })}>
     <ProductCard
      showProFlag={true}
      product={tagObjectsProduct}
      handleCardClick={action('click-on-product-card')}
      handelTagClick={action('click-on-tag')}
      imageUrl={imageUrl}
      pdpPageUrl={''}
      size="medium"
    />
  </ThemeProvider>
)

ArrayOfTagObjectsSupport.storyName = 'Array of TagObjects';
ArrayOfTagObjectsSupport.parameters = {
  description: 'We are Now Supporting tags objects',
}


const translations: Translations = {
  outOfStock: 'स्टॉक ख़त्म हो गया',
  fewLeft: 'थोड़े बचे हुए हैं!',
  quantityLeft: 'बचे हुए हैं!',
  variant: 'शेड',
  variants: 'शेड़े',
  discount: `की छूट`,
}

export const VernacularSupport = (args) => (
  <ThemeProvider theme={createLightTheme({
    colors: {
      primary: '#003243',
    }
  })}>
     <ProductCard
      showProFlag={true}
      product={tagObjectsProduct}
      handleCardClick={action('click-on-product-card')}
      handelTagClick={action('click-on-tag')}
      imageUrl={imageUrl}
      pdpPageUrl={''}
      size="medium"
      translations={{ ...translations, ...args }}
    />
  </ThemeProvider>
)

VernacularSupport.storyName = 'Vernacular Strings Support"';
VernacularSupport.parameters = {
  description: 'Vernacular support on product card.',
}
VernacularSupport.args = {
  outOfStock: 'स्टॉक ख़त्म हो गया',
  fewLeft: 'थोड़े बचे हुए हैं!',
  quantityLeft: 'बचे हुए हैं!',
  variant: 'शेड',
  variants: 'शेड़े',
  discount: `की छूट`,
}


interface VariantsProps {
  variantType: string;
  variantCount: number;
  isTranslated?: boolean;
};

export const VariantsCount = (args: VariantsProps) => {
  const {variantType, variantCount, isTranslated } = args || {};
  return (
    <>
      <Variants
        variantType= {variantType}
        variantCount= {variantCount}
        isTranslated = {isTranslated}
      />
    </>
  );
}

VariantsCount.args = {
  variantType: 'Shade',
  variantCount: 100,
  isTranslated: false,
}
VariantsCount.argTypes = {
  variantCount: {
    options: [100, 1, 19, 0, false, ''],
    control: { type: 'radio' }
  },
  variantType: {
    options: ['Size', 'साइज़', 'Shades', 'शेड्स', 'Shade', 'शेड'],
    control: { type: 'radio' }
  }
}
VariantsCount.storyName = 'Variants';
VariantsCount.description= "Variants wouldn't be shown if type and count is not available and If isTranslated is not true it will append 's' by defualt to varint if count is greater than 1";


export const plpOffer = (args) => (
  <ThemeProvider theme={createLightTheme({
    colors: {
      primary: '#e45b89',
    }
  })}>
     <ProductCard
      showProFlag={true}
      product={{...product, ...args}}
      handleCardClick={action('click-on-product-card')}
      handelTagClick={action('click-on-tag')}
      imageUrl={imageUrl}
      pdpPageUrl={''}
      size="medium"
    />
  </ThemeProvider>
)

plpOffer.storyName = 'Offer String Support on PLP';
plpOffer.parameters = {
  description: 'Now, User can see offer strings on Product listing pages',
}
plpOffer.args = {
  offer: 'Get upto 20% discount',
  offerColor: '#f3ba85',
  showOffer: true,
  quantity: 15,
}
