import { Dispatch } from 'redux';
import { ALL_WIDGETS_NAME } from '../constants';
import { ProductWidgets, ProductInfo } from './transformer';

export interface AppProps {
  platform: 'beauty' | 'man' | 'nykaa-d' | 'fashion';
  widgetsEnabled: (keyof typeof ALL_WIDGETS_NAME)[];
  apiHost: string;
  dispatch: Dispatch;
  isError: boolean;
  isFetching: boolean;
  isNotFound: boolean;
  routeId: string;
  widgets: ProductWidgets[];
  productData: Partial<ProductInfo>;
}
