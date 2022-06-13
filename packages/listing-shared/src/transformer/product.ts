import { getRoundedDiscount } from '@eyewa/utils/pricing';
import { ListingItemObjectType } from '../constants/product';
import { ListingProduct, TipTile } from '../type/product';
import { getVariantType } from '../utils/product';


export const transformTipTile = (rawTipTileData: any): (TipTile | void) => {
  const {
    url_d: url,
    image_in_list: imageInList,
  } = rawTipTileData;
  if (url && imageInList?.desktop) {
    return {
      url,
      imageSrc: imageInList?.desktop,
    };
  }
  return null;
};

export const transformListingProducts = (products: any): (ListingProduct|TipTile)[] => {
  if (!(products && Array.isArray(products))) {
    return [];
  }
  const transformedProducts: (ListingProduct|TipTile)[] = [];
  products
    .forEach((product) => {
      const { object_type: objectType } = product;
      if (objectType === ListingItemObjectType.PRODUCT) {
        const transformedProduct: ListingProduct = {
          brandIds: product.brand_ids,
          brandName: product.brand_name,
          buttonText: product.button_text,
          categoryIds: product.category_ids,
          childId: product.id,
          dynamicTags: product.dynamic_tags,
          newTags: product.pdt_tags || [],
          id: product.id,
          imageUrl: product.image_url,
          inStock: product.gludo_stock || product.in_stock,
          mrp: product.price,
          name: product.name,
          offersCount: product.offer_count,
          onlyWishlistButton: product.show_wishlist_button,
          parentId: product.parent_id,
          price: product.final_price,
          primaryCategories: product.primary_categories,
          productId: product.id,
          proFlag: product.pro_flag,
          quantity: product.quantity,
          rating: product.rating || 0,
          ratingCount: product.rating_count || 0,
          slug: product.slug,
          title: product.name,
          type: product.type,
          variantCount: product.option_count,
          discount: getRoundedDiscount(product.discount) || 0,
          variantType: getVariantType(product.configurable_type).toLowerCase(),
          isBackorder: !!(product.is_backorder),
          isLux: Number(product.is_luxe) || 0,
          isFreeSample: !!(product.is_free_sample),
          offer: product.offer_message || '',
          offerColor: product.plp_offer_color || '',
          offerId: product.offer_id || '',
          showOffer: product.plp_offer,
        };
        transformedProducts.push(transformedProduct);
      } else if (objectType === ListingItemObjectType.TIP_TILE) {
        const transformedTipTile = transformTipTile(product);
        if (transformedTipTile) {
          transformedProducts.push(transformedTipTile);
        }
      }
    });

  return transformedProducts;
};
