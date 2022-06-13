export const inPriceFormat = (amount: string | number = '') => Number(amount).toLocaleString();

export const currencyCode = (currency: string) => {
  switch (currency) {
    case 'US':
      return '$';
    default:
      return '₹';
  }
};
export const dummy = () => true;
