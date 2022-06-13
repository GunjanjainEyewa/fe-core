import { variantTypes } from '@eyewa/product-card-shared/constant/variants';

export const imageUrl = 'https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/7/7/773602042951_2.jpg';
export const productId = '4321';
// configurable
export const totalVariant = 20;
const onlyWishlistButton = false;
const productInStock = true;
const variantType = variantTypes.SHADE;
const type = variantTypes.SHADE;
//

export const noop = () => '';

const promiseWrapper = (promise) => promise
  .then((data) => [data, undefined])
  .catch((error) => Promise.resolve([undefined, error]));

export const promise = (params: any) => promiseWrapper(
  new Promise((resolve) => setTimeout(() => resolve(params), 2000)),
);

export const product = {
  name: 'Liptstic',
  productId: '423423',
  inStock: productInStock,
  id: productId,
  title: 'Tester Liptsick Tester Liptsick Tester Liptsick',
  slug: 'lipstick',
  parentId: '4321',
  offersCount: 1,
  dynamicTags: ['offer', 'new'],
  quantity: -2,
  variantType,
  variantCount: 3,
  mrp: 500,
  price: 343,
  discount: 20,
  rating: 3.5,
  ratingCount: 200,
  type,
  isBackorder: false,
  offerPrice: 0,
  variantName: '',
  onlyWishlistButton,
  childId: '423423',
  imageUrl: '',
  primaryCategories: { l1: { id: ' ', name: '' } },
  brandName: '',
  buttonText: '',
};

export const productOutOfStock = {
  name: 'Liptstic',
  productId: '423423',
  inStock: false,
  id: productId,
  title: 'Tester Liptsick Tester Liptsick Tester Liptsick',
  slug: 'lipstick',
  parentId: '4321',
  offersCount: 1,
  dynamicTags: ['offer', 'new'],
  quantity: -2,
  variantType,
  variantCount: 3,
  mrp: 500,
  price: 343,
  discount: 20,
  rating: 3.5,
  ratingCount: 200,
  type,
  isBackorder: false,
  offerPrice: 0,
  variantName: '',
  onlyWishlistButton,
  childId: '423423',
  imageUrl: '',
  primaryCategories: { l1: { id: ' ', name: '' } },
  brandName: '',
  buttonText: '',
};

export const VariantData = {
  media: [],
  buttonText: 'ADD TO BAG',
  childId: '997',
  brandName: 'Lakme',
  discount: 8,
  isBestSeller: false,
  inStock: true,
  mrp: 450,
  name: 'Lakme Eyeconic Curling Mascara - Black',
  offerPrice: 414,
  packSize: '9ml',
  shadeImage:
    'https://images-static.nykaa.com/media/icons/8901030399138_black.jpg',
  quantity: 12,
  sku: '8901030399138',
  slug: 'lakme-eyeconic-curling-mascara-108957/p/108957',
  variantName: 'Black',
  expiry: '15 November 2021',
  imageUrl:
    'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/9/8901030399138_h.jpg',
};

export const getVariantData = () => {
  const variant = [];

  [...Array(totalVariant)].forEach((_, idx) => {
    if (idx === 2) {
      // not in stock
      variant.push({
        ...VariantData,
        childId: idx,
        inStock: false,
        quantity: 0,
      });
    } else {
      variant.push({ ...VariantData, childId: idx });
    }
  });
  return variant;
};

export const User = {
  cartItemsCount: 92,
  email: 'dummyUser@gmail.com',
  firstName: 'dummy',
  formKey: 'K924ve2CHfUNnZkQ',
  groupId: '1',
  id: '176769637',
  isLoyal: false,
  isPro: false,
  lastName: 'User',
  rewardPoints: 0,
  userName: 'dummy user',
  wishlist: ['423423'],
};
