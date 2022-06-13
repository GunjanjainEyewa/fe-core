import transformData from '../../store/transformer';

const inputList = [
  {
    star_rating_avg: 4.712599334286951,
    catalog_tag: [
    "nykaa",
    "natural",
    "nykaaRetail"
    ],
    discount: 20.0,
    price: 1179.0,
    rating_count: 68,
    dynamic_tags: ["Bestseller"],
    all_images: {
      "0":"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/9/8906009451060new1.jpg",
      "1":"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/e/1/e1f926c8906009451060_a.jpg",
      "2":"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/e/1/e1f926c8906009451060_b.jpg",
    },
    type: "bundle",
    new_image_url: 'test',
    in_stock: true,
    name: "The Moms Co. Natural Baby Wash + Natural Baby Shampoo + Natural Baby Lotion",
    final_price: 943.0,
    parent_id: "333471",
    id: "333471",
    popularity: 1.78932531121864,
    rating: 5.0,
    star_rating_percentage: 100,
    sku: "NYTMCOM00005",
    product_qty_map: {
    "736140999187": 1,
    "736140999200": 1,
    "736140999194": 1
    }
  }
];
const expectedList = [{
  productId: 333471,
  customTag: 'Bestseller',
  productIcon: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/9/8906009451060new1.jpg",
  productTitle: "The Moms Co. Natural Baby Wash + Natural Baby Shampoo + Natural Baby Lotion",
  ratingCount: 68,
  avgRating: 5,
  mrp: 1179.0,
  price: 943.0,
  discount: 20.0,
  inStock: true,
}];

describe("Test for combo product", () => {
  it('should return empty array when combo product emptyArray', () => {
    expect(transformData([])).toEqual([]);
  });
  it('should return empty array when combo product null', () => {
    expect(transformData(null)).toEqual([]);
  });
  it('should return transform array when combo product provided', () => {
    expect(transformData(inputList)).toEqual(expectedList);
  });
});