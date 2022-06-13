import { CartData, CartItem } from '../../types/addToCart';

export const transformCartItems = (items: any = []) => {
  const cartItems: CartItem[] = [];

  items.forEach((item: any) => {
    cartItems.push({
      productId: item.productId,
      sku: item.sku,
      quantity: item.quantity,
      name: item.name,
      brandId: item.brandId,
      categoryIds: item.categoryIds.split(','),
      mrp: item.mrp,
      offerPrice: item.price,
      totalPrice: item.totalPrice,
      discount: item.discount,
    });
  });

  return cartItems;
};

export const transformAddToCart = (data: any): CartData => {
  const transformedData: CartData = {
    message: data.displayMessage,
    itemsCount: data.itemsCount,
    itemsQuantity: data.itemsQuantity,
    subTotal: data.subtotal,
    shipping: data.shipping,
    grandTotal: data.grandTotal,
    discount: data.discount,
    items: transformCartItems(data.items),
  };

  return transformedData;
};
