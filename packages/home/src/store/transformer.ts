import widgetTransformer from '@eyewa/deals-transformer';
import { Inventory } from './types';


export const transformWidgetsData = (data :Inventory[]) => (widgetTransformer(data));

export const dummy = () => {};
