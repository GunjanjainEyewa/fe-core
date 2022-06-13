import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import SizeList from '../src/SizeList';
import UnitSwitch from '@nykaa/size-chart-shared/components/UnitSwitch';
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
// const size_data = {"enabled": true, "button_text": "size chart", "unit_text": "Select a size and add to bag", "units": [{"id": "cm", "text": "cm"}, {"id": "inch", "text": "in"}], "columns": [{"id": "underbust", "text": "UNDERBUST"}, {"id": "overbust", "text": "OVERBUST"}]}


const sizeOptions = [{"id": "underbust", "text": "UNDERBUST"}, {"id": "overbust", "text": "OVERBUST"},  {"id": "overbust2", "text": "Overbust Size two"},  {"id": "sleeve", "text": "Sleeve Length"},  {"id": "overbust3", "text": "Overbust Size Three"}];
const units = [{"id": "cm", "text": "cm"}, {"id": "inch", "text": "in"}];
const unitSelectionText = "Select a size and add to bag";

export default {
  title: 'SizeChartMobile',
  component: SizeChart,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex'
    },
  },
};

export const MoreColumn = () => (
  <SizeList
    sizeOptions={sizeOptions}
    options={options}
    selectedUnit="inch"
    handleClickSizeSelect={action('size selected')}
  />
)

const twoColumn = [{"id": "underbust", "text": "UNDERBUST"}, {"id": "overbust", "text": "OVERBUST"}];
export const TwoColumn = () => (
  <SizeList
    sizeOptions={twoColumn}
    options={options}
    selectedUnit="inch"
    handleClickSizeSelect={action('size selected')}
/>
)

const threeColumn = [{"id": "underbust", "text": "UNDERBUST"}, {"id": "overbust", "text": "OVERBUST"},  {"id": "overbust2", "text": "Overbust Size two"}];
export const ThreeColumn = () => (
  <SizeList
  sizeOptions={threeColumn}
  options={options}
  selectedUnit="inch"
  handleClickSizeSelect={action('size selected')}
/>
)

const oneColumn = [{"id": "underbust", "text": "UNDERBUST"}];

export const OneColumn = () => (
  <SizeList
  sizeOptions={oneColumn}
  options={options}
  selectedUnit="inch"
  handleClickSizeSelect={action('size selected')}
/>
)

export const SizeUnitSwitch = () => (
  <>
    <UnitSwitch
      unitSelectionText={unitSelectionText}
      units={units}
      selectedUnit="inch"
      handleUnitSwitch={action('unit switch clicked')}
      borderApplied
    />
    <UnitSwitch
      unitSelectionText={unitSelectionText}
      units={units}
      selectedUnit="cm"
      handleUnitSwitch={action('unit switch clicked')}
      borderApplied
    />
  </>
)

export const SizeChartOption = () => (
  <SizeChart
    unitSelectionText={unitSelectionText}
    units={units}
    options={options}
    sizeOptions={sizeOptions}
    handleClickSizeSelect={action('size selected')}
  />
)