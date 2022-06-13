export interface Coupon {
  title: string;
  id: number;
  couponCode: string;
  description: string;
}

export type SMALL = 'small';
export type MEDIUM = 'medium';

export type StyleProps = {
  size: string;
};
