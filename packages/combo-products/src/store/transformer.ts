import { getRoundedDiscount } from '@eyewa/utils/pricing';
import { Product } from '../types';


interface ProductResponse {
  star_rating_avg: number;
  catalog_tag: string[];
  discount: number;
  price: number;
  rating_count: number;
  dynamic_tags: string[];
  all_images: {[key: string]: string};
  type: string;
  new_image_url?: string;
  in_stock: boolean;
  name: string;
  final_price: number;
  parent_id: string;
  id: string;
  popularity: number;
  rating: number;
  star_rating_percentage: number;
  sku: string;
  product_qty_map: {[key: string]: number};
}

const transformData = (data: ProductResponse[]) => {
  const transformcomboProductData: Product[] = [];
  if (data) {
    data.forEach((element: ProductResponse) => {
      transformcomboProductData.push({
        productId: Number(element.id),
        customTag: element.dynamic_tags[0],
        productIcon: element.all_images[0],
        productTitle: element.name,
        ratingCount: element.rating_count,
        avgRating: element.rating,
        mrp: element.price,
        price: element.final_price,
        discount: getRoundedDiscount(element.discount),
        inStock: element.in_stock,
      });
    });
  }
  return transformcomboProductData;
};

export default transformData;
