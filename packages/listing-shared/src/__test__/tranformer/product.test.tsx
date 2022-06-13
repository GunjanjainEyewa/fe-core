import { transformListingProducts } from '../../transformer/product';

export const inputData = [
  {
    featured: 0,
    id: '1287',
    price: 825,
    final_price: 499,
    discount: 39.52,
    rating: 4.4,
    is_backorder: false,
    name: 'Lakme Absolute Skin Natural Mousse Mattreal Foundation',
    sku: 'LAKABSMOUSE16',
    image_url:
      'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/g/r/greyjacketlehengaset-8879.jpg',
    type: 'configurable',
    rating_count: 2073,
    button_text: 'ADD TO BAG',
    configurable_type: 'shade',
    category_ids:
      '12,13,145,228,348,366,587,604,767,807,809,1197,1269,1442,1581,1625,1628,1852,2122,2132,2135,2136,2137,2139,2196,2235,2247,2252,2386,2471,2678,2692,2693,2696,2698,2743,3146,3243,3251,3267,3366,3566,3567,3591,3682,3823,3844,4151,4211,4479,4759,4937,4993,5013,5356,5357,6229,6341,6549,6567,6710,7287,7303,7453,7514,7530,7768,7807,7980,7985,8178,8286,8388,8507,8749,9295,9382,9425,9556,9562,9692,9974,9979,10338,10396,10459,10460,10467,10555,10904,10953,11020,11021,13238,13409,13687,13929,14008,14483,14487,14495,14596,14599,14770,14914,15038,15130,15132,15691,15852,16520,16602',
    brand_ids: '604',
    catalog_tag: ['nykaa', 'nykaaRetail'],
    object_type: 'product',
    pro_flag: 0,
    show_wishlist_button: 0,
    quantity: 1437,
    is_free_sample: 0,
    primary_categories: [
      {
        l1: {
          id: '12',
          name: 'Makeup',
        },
        l2: {
          id: '13',
          name: 'Face',
        },
        l3: {
          id: '228',
          name: 'Foundation',
        },
      },
    ],
    in_stock: true,
    max_allowed_qty: 3,
    slug: 'lakme-absolute-mattreal-skin-natural-mousse-16hr/p/1287',
    product_url:
      'https://preprod.nykaa.com/lakme-absolute-mattreal-skin-natural-mousse-16hr/p/1287',
    parent_id: '1287',
    brand_name: ['Lakme'],
    offer_count: 0,
    option_count: 0,
    dynamic_tags: ['offers'],
    offer_message: 'Get 60% off!',
    plp_offer_color: '#fefefe',
    offer_id: '12345',
    plp_offer: true,
  },
  {
    url_d:
      'https://www.nykaa.com/beauty-blog/get-blush-perfect-with-lakme-9-to-5-pure-rouge-blusher?utm_source=nykaa&utm_medium=tiptile&utm_campaign=get-blush-perfect-with-lakme-9-to-5-pure-rouge-blusher',
    url_m: '',
    position: '9',
    image_in_list: {
      desktop:
        'https://adn-static1.nykaa.com/media/categoryInfo/image_in_list/604_5c9b1fdf0b867_lakmerougeblusher.jpg',
      mobile: '',
    },
    object_type: 'tiptile',
  },
];
export const outputData = [
  {
    brandIds: '604',
    brandName: ['Lakme'],
    buttonText: 'ADD TO BAG',
    categoryIds:
      '12,13,145,228,348,366,587,604,767,807,809,1197,1269,1442,1581,1625,1628,1852,2122,2132,2135,2136,2137,2139,2196,2235,2247,2252,2386,2471,2678,2692,2693,2696,2698,2743,3146,3243,3251,3267,3366,3566,3567,3591,3682,3823,3844,4151,4211,4479,4759,4937,4993,5013,5356,5357,6229,6341,6549,6567,6710,7287,7303,7453,7514,7530,7768,7807,7980,7985,8178,8286,8388,8507,8749,9295,9382,9425,9556,9562,9692,9974,9979,10338,10396,10459,10460,10467,10555,10904,10953,11020,11021,13238,13409,13687,13929,14008,14483,14487,14495,14596,14599,14770,14914,15038,15130,15132,15691,15852,16520,16602',
    childId: '1287',
    dynamicTags: ['offers'],
    id: '1287',
    imageUrl:
      'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/g/r/greyjacketlehengaset-8879.jpg',
    inStock: true,
    mrp: 825,
    name: 'Lakme Absolute Skin Natural Mousse Mattreal Foundation',
    offersCount: 0,
    onlyWishlistButton: 0,
    parentId: '1287',
    isFreeSample: false,
    primaryCategories: [
      {
        l1: {
          id: '12',
          name: 'Makeup',
        },
        l2: {
          id: '13',
          name: 'Face',
        },
        l3: {
          id: '228',
          name: 'Foundation',
        },
      },
    ],
    price: 499,
    productId: '1287',
    proFlag: 0,
    quantity: 1437,
    rating: 4.4,
    ratingCount: 2073,
    slug: 'lakme-absolute-mattreal-skin-natural-mousse-16hr/p/1287',
    title: 'Lakme Absolute Skin Natural Mousse Mattreal Foundation',
    type: 'configurable',
    variantCount: 0,
    discount: 40,
    variantType: 'shade',
    isBackorder: false,
    isLux: 0,
    newTags: [],
    offer: 'Get 60% off!',
    offerColor: '#fefefe',
    offerId: '12345',
    showOffer: true,
  },
  {
    url:
      'https://www.nykaa.com/beauty-blog/get-blush-perfect-with-lakme-9-to-5-pure-rouge-blusher?utm_source=nykaa&utm_medium=tiptile&utm_campaign=get-blush-perfect-with-lakme-9-to-5-pure-rouge-blusher',
    imageSrc:
      'https://adn-static1.nykaa.com/media/categoryInfo/image_in_list/604_5c9b1fdf0b867_lakmerougeblusher.jpg',
  },
];

describe("Test for Product Transformer", () => {
    test('should return empty array when product list emptyArray', () => {
      expect(transformListingProducts([])).toEqual([]);
    });
    test('should return empty array when product list null', () => {
      expect(transformListingProducts(null)).toEqual([]);
    });
    test('should return empty array when product list undefined', () => {
        expect(transformListingProducts(undefined)).toEqual([]);
      });
    test('should return transform array when product list provided', () => {
      expect(transformListingProducts(inputData)).toEqual(outputData);
    });
  });