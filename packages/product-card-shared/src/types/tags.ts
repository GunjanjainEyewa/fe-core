export interface TagObject {
  id: string;
  name: string;
}

export interface NewTags {
  bgColor: string;
  borderColor:string;
  fontSize: string;
  fontWeight: string | number;
  title: string;
  titleColor: string;
  opacity: number;
}

export interface TagComponent {
  index: number;
  tag: string | TagObject;
  defaultColor: boolean;
  showMultipleTag: boolean;
  handleTagClick?: (tagName: string) => void;
  offersCount?: number;
  customStyle?: NewTags;
}
