import 'jsdom-global/register'; // for providing
import React from 'react';
import { mount } from 'enzyme';
import { createLightTheme } from '@nykaa/ui-components/themes';
import { SIZE_CHART,TAP_TO_SELECT, SELECT_SHADE } from '@nykaa/variant-selector-shared/constant';
import { SoldOut, FewLeft } from '@nykaa/variant-selector-shared';
import Sizes from '../Sizes';
import Shades from '../Shades';
import Header from '../components/Header';
import SizeList from '../Sizes/SizeList';
import ShadeList from '../Shades/ShadeList';
import ThemeProvider from '@nykaa/ui-components/styles/ThemeProvider';
import Size from '../Sizes/Size';
import Shade from '../Shades/Shade'
import { sizeVariant,currentVariantSize, shadeVariant,currentShadeVariant } from './mock';
import { FEW_LEFT, SOLD_OUT } from '@nykaa/variant-selector-shared/src/constant';


export default function wrapWithTheme(child: any, func: Function) {
  return func(child, {
    wrappingComponent: ({ children }: any) => (
      <ThemeProvider theme={createLightTheme({})}>
        {children}
      </ThemeProvider>
    ),
  });
}

describe('Header With Variant Chart', () => {
  const onOptionClickMock = jest.fn();
  const wrapper = wrapWithTheme(
    <Header 
      title={TAP_TO_SELECT}
      chartTitle={SIZE_CHART}
      onClick={onOptionClickMock}
    />, mount
  );
   
  it('Header and Styled component should be rendered', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find('ChartTitle')).toHaveLength(1);
    expect(wrapper.find('Title')).toHaveLength(1);
  });

  it('Header titles Should be equal to props titles', () => {
    expect(wrapper.find('Title').text()).toStrictEqual(TAP_TO_SELECT);
    expect(wrapper.find('ChartTitle').text()).toStrictEqual(SIZE_CHART);
  });

  // it('Variant Chart should be clickable', () => {
  //   const variantChart = wrapper.find('ChartTitle');
  //   variantChart.simulate('click');
  //   variantChart.simulate('click');
  //   expect(onOptionClickMock.mock.calls.length).toStrictEqual(2);
  // });
});

describe('Header Without Variant Chart', () => {
  const wrapper = wrapWithTheme(<Header title={TAP_TO_SELECT} />, mount);

  it('should rendred Header',() => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('variant chart should not be present', () => {
    expect(wrapper.find('ChartTitle')).toHaveLength(0);
  });
});



const SizesProps = {
  variants: sizeVariant,
  currentVariant: currentVariantSize,
  onVariantClick: () => {},
  enableVariantChart: true,
  onVariantChartClick: () => {},
  isBackorder: false,
}

describe('Size Selector with size listing', () => {
  const wrapper = wrapWithTheme(<Sizes {...SizesProps} />, mount);

  it('should rendred Header and SizeListing',() => {
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(SizeList)).toHaveLength(1);
  });

  it('SizeChip should be equal to variants length', () => {
    expect(wrapper.find(Size)).toHaveLength(sizeVariant.length);
  });
});

const ShadesProps = {
  variants: shadeVariant,
  currentVariant: currentShadeVariant,
  onVariantClick: () => {},
  enableVariantChart: true,
  onVariantChartClick: () => {},
  isBackorder: false,
};

describe('Shade Selector with shade listing', () => {
  const wrapper = wrapWithTheme(<Shades {...ShadesProps} />, mount);

  it('should rendred Header and ShadeList',() => {
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(ShadeList)).toHaveLength(1);
  });

  it('No. of shades should be equal to variants length', () => {
    expect(wrapper.find(Shade)).toHaveLength(shadeVariant.length);
  });
});

describe('Shade Selector without current variant', () => {
  const wrapper = wrapWithTheme(<Shades {...ShadesProps} currentVariant={null} />, mount);

  it('Header should contain variant length in title', () => {
    expect(wrapper.find('Title').contains(` (${shadeVariant.length})`)).toStrictEqual(true);
    expect(wrapper.find('Title').contains(SELECT_SHADE)).toStrictEqual(true);
  });
});

describe('Size Selector with backorder products', () => {
  const backorderProduct = wrapWithTheme(<Sizes {...SizesProps} isBackorder={true} />, mount);
  const noBackorderProduct = wrapWithTheme(<Sizes {...SizesProps} isBackorder={false} />, mount);

  it('SoldOut should not be rendered with backorder product', () => {
    expect(backorderProduct.contains(SOLD_OUT)).toBeFalsy();
  });

  it('SoldOut should  be rendered without backorder product', () => {
    expect(noBackorderProduct.contains(SOLD_OUT)).toBeTruthy();
  });

  it('FewLeft should not be rendered with backorder product', () => {
    expect(backorderProduct.contains(FEW_LEFT)).toBeFalsy();
  });

  it('FewLeft should  be rendered without backorder product', () => {
    expect(noBackorderProduct.contains(FEW_LEFT)).toBeTruthy();
  });
  
});

describe('Shade Selector with backorder products', () => {
  const backorderProduct = wrapWithTheme(<Shades {...ShadesProps} isBackorder={true} />, mount);
  const noBackorderProduct = wrapWithTheme(<Shades {...ShadesProps} isBackorder={false} />, mount);

  it('SoldOut should not be rendered with backorder product', () => {
    expect(backorderProduct.contains(SOLD_OUT)).toBeFalsy();
  });

  it('SoldOut should  be rendered without backorder product', () => {
    expect(noBackorderProduct.contains(SOLD_OUT)).toBeTruthy();
  });

  it('FewLeft should not be rendered with backorder product', () => {
    expect(backorderProduct.contains(FEW_LEFT)).toBeFalsy();
  });

  it('FewLeft should  be rendered without backorder product', () => {
    expect(noBackorderProduct.contains(FEW_LEFT)).toBeTruthy();
  });

});
