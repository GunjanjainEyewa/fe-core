import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { DEFAULT_VIEWPORT } from '@storybook/addon-viewport';
import { SIZE_CHART_LIST } from '../../size-chart-shared/constants';
import { openSizeChart } from '../src/utils';
import UnitSwitch from '@nykaa/size-chart-shared/components/UnitSwitch';
import {
  getVariantData,
  imageUrl,
  noop,
  product,
  productId,
  promise,
  User,
  productOutOfStock,
} from './mock';
import SizeChart from '../src';


const options = [
  {
    id: 3223,
    sizeData: {
      "underbust": {"inch": "29-30", "cm": "77-79"},
      "overbust": {"inch": "30-31", "cm": "77-79"},
      "overbust2": {"inch": "30-31", "cm": "77-79"},
      "sleeve": {"inch": "30-31", "cm": "77-79"},
      "overbust3": {"inch": "30-31", "cm": "77-79"}
    },
    packSize: '28B',
    inStock: false,
  },
  {
    id: 3224,
    sizeData: {
      "underbust": {"inch": "27-28", "cm": "68-72"},
      "overbust": {"inch": "32-33", "cm": "82-84"},
      "overbust2": {"inch": "30-31", "cm": "77-79"},
      "sleeve": {"inch": "30-31", "cm": "77-79"},
      "overbust3": {"inch": "30-31", "cm": "77-79"}
    },
    packSize: '32B',
    inStock: true,
  },
  {
    id: 3225,
    sizeData: {
      "underbust": {"inch": "29-30", "cm": "72-77"},
      "overbust": {"inch": "33-34", "cm": "84-89"},
      "overbust2": {"inch": "30-31", "cm": "77-79"},
      "sleeve": {"inch": "30-31", "cm": "77-79"},
      "overbust3": {"inch": "30-31", "cm": "77-79"}
    },
    packSize: '32D',
    inStock: false,
  },
  {
    id: 3226,
    sizeData: {
      "underbust": {"inch": "29-30", "cm": "72-77"},
      "overbust": {"inch": "33-34", "cm": "84-89"},
      "overbust2": {"inch": "30-31", "cm": "77-79"},
      "sleeve": {"inch": "30-31", "cm": "77-79"},
      "overbust3": {"inch": "30-31", "cm": "77-79"}
    },
    packSize: '32c',
    inStock: true,
  },
  {
    id: 3227,
    sizeData: {
      "underbust": {"inch": "29-30", "cm": "72-77"},
      "overbust": {"inch": "33-34", "cm": "84-89"},
      "overbust2": {"inch": "30-31", "cm": "77-79"},
      "sleeve": {"inch": "30-31", "cm": "77-79"},
      "overbust3": {"inch": "30-31", "cm": "77-79"}
    },
    packSize: '34A',
    inStock: true,
  },
  {
    id: 3228,
    sizeData: {
      "underbust": {"inch": "29-30", "cm": "72-77"},
      "overbust": {"inch": "33-34", "cm": "84-89"},
      "overbust2": {"inch": "30-31", "cm": "77-79"},
      "sleeve": {"inch": "30-31", "cm": "77-79"},
      "overbust3": {"inch": "30-31", "cm": "77-79"}
    },
    packSize: '34B',
    inStock: false,
  },
  {
    id: 3229,
    sizeData: {
      "underbust": {"inch": "", "cm": ""},
      "overbust": {"inch": "33-34", "cm": "84-89"},
      "overbust2": {"inch": "30-31", "cm": "77-79"},
      "sleeve": {"inch": "30-31", "cm": "77-79"},
      "overbust3": {"inch": "30-31", "cm": "77-79"}
    },
    packSize: '34C',
    inStock: true,
  },
  {
    id: 32,
    sizeData: {
      "underbust": {"inch": "29-30", "cm": "72-77"},
      "overbust": {"inch": "33-34", "cm": "84-89"},
      "overbust2": {"inch": "30-31", "cm": "77-79"},
      "sleeve": {"inch": "30-31", "cm": "77-79"},
      "overbust3": {"inch": "30-31", "cm": "77-79"}
    },
    packSize: '34D',
    inStock: true,
  }
]
const oneOptions = [
  {
    id: 3223,
    sizeData: {
      "underbust": {"inch": "29-30", "cm": "77-79"},
      "overbust": {"inch": "30-31", "cm": "77-79"},
      "overbust2": {"inch": "30-31", "cm": "77-79"},
      "sleeve": {"inch": "30-31", "cm": "77-79"},
      "overbust3": {"inch": "30-31", "cm": "77-79"}
    },
    packSize: '28B',
    inStock: false,
  }
]
const twoOptions = [
  {
    id: 3223,
    sizeData: {
      "underbust": {"inch": "29-30", "cm": "77-79"},
      "overbust": {"inch": "30-31", "cm": "77-79"},
      "overbust2": {"inch": "30-31", "cm": "77-79"},
      "sleeve": {"inch": "30-31", "cm": "77-79"},
      "overbust3": {"inch": "30-31", "cm": "77-79"}
    },
    packSize: '28B',
    inStock: false,
  },
  {
    id: 3224,
    sizeData: {
      "underbust": {"inch": "29-30", "cm": "77-79"},
      "overbust": {"inch": "30-31", "cm": "77-79"},
      "overbust2": {"inch": "30-31", "cm": "77-79"},
      "sleeve": {"inch": "30-31", "cm": "77-79"},
      "overbust3": {"inch": "30-31", "cm": "77-79"}
    },
    packSize: '28C',
    inStock: true,
  }
]
const size_data = {"enabled": true, "button_text": "size chart", "unit_text": "Select a size and add to bag", "units": [{"id": "cm", "text": "cm"}, {"id": "inch", "text": "in"}], "columns": [{"id": "underbust", "text": "UNDERBUST"}, {"id": "overbust", "text": "OVERBUST"}]}


const sizeOptions = [{"id": "underbust", "text": "UNDERBUST"}, {"id": "overbust", "text": "OVERBUST"},  {"id": "overbust2", "text": "Overbust Size two"},  {"id": "sleeve", "text": "Sleeve Length"},  {"id": "overbust3", "text": "Overbust Size Three"}];
const units = [{"id": "cm", "text": "cm"}, {"id": "inch", "text": "in"}];
const unitSelectionText = "Select a size and add to bag";
const handleClickSizeSelect = (id: string, setSelectedVariant: React.Dispatch<React.SetStateAction<string>>, setSelectedProduct: any) => {
  if (document) {
    const sizeList = document.getElementById(SIZE_CHART_LIST);
    if (sizeList) {
      sizeList.style.height = '66%';
    }
    setSelectedVariant(id);
    const inStock = options.find((ele) => (ele.id) == parseInt(id));
    console.log(id, options);
    if (inStock.inStock) {
      setSelectedProduct(product);
    }
    else {
      setSelectedProduct(productOutOfStock);
    }
  }
};
const unSelectVariant = (setSelectedVariant: React.Dispatch<React.SetStateAction<string>>) => {
  if (document) {
    const sizeList = document.getElementById(SIZE_CHART_LIST);
    if (sizeList) {
      sizeList.style.height = '90%';
    }
  }
  setSelectedVariant('');
};

export default {
  title: 'SizeChartDesktop',
  component: SizeChart,
  parameters: {
    viewport: {
      viewports: DEFAULT_VIEWPORT,
      defaultViewport: 'someDefault'
    },
  },
};

export const FiveColumn = () => {
  const [selectedVariant, setSelectedVariant] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(product);
  return (<>
  <button onClick={() => openSizeChart(sizeOptions)}>SIZE CHART OPEN</button>
  <SizeChart
    title={"Size Chart"}
    unitSelectionText={unitSelectionText}
    units={units}
    options={options}
    sizeOptions={sizeOptions}
    selectedOption={selectedVariant}
    handleClickSizeSelect={(id: string) => handleClickSizeSelect(id,setSelectedVariant, setSelectedProduct)}
    unSelectVariantOncloseChart={() => unSelectVariant(setSelectedVariant)}
    product={selectedProduct}
    user={User}
    wishlistCallback={promise}
    redirectAuthPage={noop}
    pageLocation={""}
    isPro={false}
    addToCartCallback={promise}
    handleSliderAction={noop}
    notifyClose={noop}
    sendNotifyMe={promise}
    isRegisteredViaMobile={(e: string) => false}
  />
  </>);
};

const twoColumn = [{"id": "underbust", "text": "UNDERBUST"}, {"id": "overbust", "text": "OVERBUST"}];
export const TwoColumn = () => {
  const [selectedVariant, setSelectedVariant] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(product);
  return (<>
  <button onClick={() => openSizeChart(twoColumn)}>SIZE CHART OPEN</button>
  <SizeChart
    title={"Size Chart"}
    unitSelectionText={unitSelectionText}
    units={units}
    options={options}
    sizeOptions={twoColumn}
    selectedOption={selectedVariant}
    handleClickSizeSelect={(id: string) => handleClickSizeSelect(id,setSelectedVariant, setSelectedProduct)}
    unSelectVariantOncloseChart={() => unSelectVariant(setSelectedVariant)}
    product={selectedProduct}
    user={User}
    wishlistCallback={promise}
    redirectAuthPage={noop}
    pageLocation={""}
    isPro={false}
    addToCartCallback={promise}
    handleSliderAction={noop}
    notifyClose={noop}
    sendNotifyMe={promise}
    isRegisteredViaMobile={(e: string) => false}
  />
  </>);
}

const threeColumn = [{"id": "underbust", "text": "UNDERBUST"}, {"id": "overbust", "text": "OVERBUST"},  {"id": "overbust2", "text": "Overbust Size two"}];
export const ThreeColumn = () => {
  const [selectedVariant, setSelectedVariant] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(product);
  return (<>
  <button onClick={() => openSizeChart(threeColumn)}>SIZE CHART OPEN</button>
  <SizeChart
    title={"Size Chart"}
    unitSelectionText={unitSelectionText}
    units={units}
    options={options}
    sizeOptions={threeColumn}
    selectedOption={selectedVariant}
    handleClickSizeSelect={(id: string) => handleClickSizeSelect(id,setSelectedVariant,setSelectedProduct)}
    unSelectVariantOncloseChart={() => unSelectVariant(setSelectedVariant)}
    product={selectedProduct}
    user={User}
    wishlistCallback={promise}
    redirectAuthPage={noop}
    pageLocation={""}
    isPro={false}
    addToCartCallback={promise}
    handleSliderAction={noop}
    notifyClose={noop}
    sendNotifyMe={promise}
    isRegisteredViaMobile={(e: string) => false}
  />
  </>);
};

const oneColumn = [{"id": "underbust", "text": "UNDERBUST"}];

export const OneColumn = () => {
  const [selectedVariant, setSelectedVariant] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(product);
  return (<>
  <button onClick={() => openSizeChart(oneColumn)}>SIZE CHART OPEN</button>
  <SizeChart
    title={"Size Chart"}
    unitSelectionText={unitSelectionText}
    units={units}
    options={options}
    sizeOptions={oneColumn}
    selectedOption={selectedVariant}
    handleClickSizeSelect={(id: string) => handleClickSizeSelect(id,setSelectedVariant,setSelectedProduct)}
    unSelectVariantOncloseChart={() => unSelectVariant(setSelectedVariant)}
    product={selectedProduct}
    user={User}
    wishlistCallback={promise}
    redirectAuthPage={noop}
    pageLocation={""}
    isPro={false}
    addToCartCallback={promise}
    handleSliderAction={noop}
    notifyClose={noop}
    sendNotifyMe={promise}
    isRegisteredViaMobile={(e: string) => false}
  />
  </>);
};

export const DummyColumn = () => {
  const [selectedVariant, setSelectedVariant] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(product);
  return (<>
  <button onClick={() => openSizeChart(twoColumn)}>SIZE CHART OPEN</button>
  <SizeChart
    title={"Size Chart"}
    unitSelectionText={unitSelectionText}
    units={units}
    options={oneOptions}
    sizeOptions={twoColumn}
    selectedOption={selectedVariant}
    handleClickSizeSelect={(id: string) => handleClickSizeSelect(id,setSelectedVariant,setSelectedProduct)}
    unSelectVariantOncloseChart={() => unSelectVariant(setSelectedVariant)}
    product={selectedProduct}
    user={User}
    wishlistCallback={promise}
    redirectAuthPage={noop}
    pageLocation={""}
    isPro={false}
    addToCartCallback={promise}
    handleSliderAction={noop}
    notifyClose={noop}
    sendNotifyMe={promise}
    isRegisteredViaMobile={(e: string) => false}
  />
  </>);
}

export const DummyColumnWith2DataRow = () => {
  const [selectedVariant, setSelectedVariant] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(product);
  return (<>
  <button onClick={() => openSizeChart(twoColumn)}>SIZE CHART OPEN</button>
  <SizeChart
    title={"Size Chart"}
    unitSelectionText={unitSelectionText}
    units={units}
    options={twoOptions}
    sizeOptions={twoColumn}
    selectedOption={selectedVariant}
    handleClickSizeSelect={(id: string) => handleClickSizeSelect(id,setSelectedVariant,setSelectedProduct)}
    unSelectVariantOncloseChart={() => unSelectVariant(setSelectedVariant)}
    product={selectedProduct}
    user={User}
    wishlistCallback={promise}
    redirectAuthPage={noop}
    pageLocation={""}
    isPro={false}
    addToCartCallback={promise}
    handleSliderAction={noop}
    notifyClose={noop}
    sendNotifyMe={promise}
    isRegisteredViaMobile={(e: string) => false}
  />
  </>);
}

export const SizeUnitSwitch = () => (
  <>
    <UnitSwitch
      unitSelectionText={unitSelectionText}
      units={units}
      selectedUnit="inch"
      handleUnitSwitch={action('unit switch clicked')}
    />
    <UnitSwitch
      unitSelectionText={unitSelectionText}
      units={units}
      selectedUnit="cm"
      handleUnitSwitch={action('unit switch clicked')}
    />
  </>
)