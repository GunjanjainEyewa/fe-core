import { getRoundedDiscount } from '@eyewa/utils/pricing';
import { ADD_TO_BAG_TEXT } from '../../constant/addToCart';
import { MediaItem, Variant } from '../../types/variants';


export const transformMedia = (media: MediaItem[] = []): MediaItem[] => {
  if (!media) {
    return [];
  }

  const transformRegEx = /tr:.*?\//;

  return media.map((item) => {
    const { type, url } = item;
    if (type === 'image') {
      return {
        url: url.replace(transformRegEx, ''),
        type,
      };
    }
    return item;
  });
};

export const transformVariants = (variants: any, defaultPid: string): (Variant[]|null) => {
  if (
    (!variants)
    || !Array.isArray(variants)
  ) {
    return null;
  }
  const transformedVariants: Variant[] = [];
  variants.forEach((variant) => {
    transformedVariants.push({
      buttonText: variant.button_text || ADD_TO_BAG_TEXT,
      childId: variant.id,
      brandName: variant.brand_name,
      discount: getRoundedDiscount(variant.discount),
      isBestSeller: variant.is_bestseller,
      inStock: variant.gludo_stock,
      media: transformMedia(variant.media),
      mrp: variant.price,
      name: variant.name,
      offerPrice: variant.final_price,
      packSize: variant.pack_size,
      shadeImage: variant.shade_background_url,
      quantity: variant.quantity,
      sku: variant.sku,
      slug: variant.slug,
      variantName: variant.option_name,
      expiry: variant.expdt,
      imageUrl: variant.image_url,
      primaryCategories: variant.primary_categories,
      defaultPid,
    });
  });

  return transformedVariants;
};
