import { OptionData } from '.';

export interface ImageViewerProps {
  options: OptionData[];
  activeImage: number;
  previousImage?: number;
  handleImageSelect: (index: number) => void;
}
