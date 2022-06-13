export interface BaseProps {
  options: OptionData[];
  sizeOptions: UnitProps[];
  units: UnitProps[];
  unitSelectionText: string;
  handleClickSizeSelect: (id: string) => void;
}

export interface DefaultProps {
  [key: string]: string;
}
export interface UnitProps {
  id: string;
  text: string;
}

export interface SizeData {
  [key: string] : DefaultProps;
}

export interface OptionData {
  id: string;
  packSize: string;
  sizeData: SizeData;
  inStock: boolean;
}

export interface TransformedSizeProps extends UnitProps {
  data: DefaultProps;
}

export interface HeightOption {
  headerHeight: string;
}

export interface SizeDataProps {
  sizeData: SizeData;
  sizeColumns: UnitProps[];
  selectedUnit?: string;
}
