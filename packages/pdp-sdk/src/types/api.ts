import { ALL_WIDGETS_NAME } from '../constants';

export interface APlus {
  imageUrl: string;
  aspectRatio: number;
  aplusDescription: string;
  aplusTitle: string;
}

export interface WidgetsData {
  wType: string;
  wTitle: string;
  wSubTitle: string;
  data: any;
  dataList?: any;
  aPlus: APlus;
  imageUrl: string;
  aspectRatio?: number;
  title: string;
  desc: string;
}

export interface ApiResponse {
  wData: WidgetsData[];
  metadata: any;
  platform: string;
  widgetsEnabled: (keyof typeof ALL_WIDGETS_NAME)[];
}

export interface RootObject {
  status: string;
  response: ApiResponse;
}
