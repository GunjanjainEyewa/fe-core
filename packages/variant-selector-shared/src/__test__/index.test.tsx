import 'jsdom-global/register'; // for providing
import React from 'react';
import { mount } from 'enzyme';
import ThemeProvider from '@nykaa/ui-components/styles/ThemeProvider';
import { createLightTheme } from '@nykaa/ui-components/themes';
import FewLeft from '../components/FewLeft';
import { FEW_LEFT, SOLD_OUT } from '../constant';
import SoldOut from '../components/SoldOut';
import ShadePalette from '../components/ShadePalette';
import SizeChip from '../components/SizeChip';
import { SIZE_ERROR_MSG } from '../constant';
import Error from '../components/Error';

export default function wrapWithTheme(child: any, func: Function) {
  return func(child, {
    wrappingComponent: ({ children }: any) => (
      <ThemeProvider theme={createLightTheme({})}>
        {children}
      </ThemeProvider>
    ),
  });
};

describe('FewLeft test cases', () => {
  const wrapper = wrapWithTheme(<FewLeft />, mount);

  it('FewLeft should be rendered with text Few Left', () => {
    expect(wrapper.find(FewLeft)).toHaveLength(1);
    expect(wrapper.contains(FEW_LEFT)).toBeTruthy();
  });
});

describe('SoldOut test cases', () => {
  const wrapper = wrapWithTheme(<SoldOut />, mount);

  it('SoldOut should be rendered with text Sold Out', () => {
    expect(wrapper.find(SoldOut)).toHaveLength(1);
    expect(wrapper.contains(SOLD_OUT)).toBeTruthy();
  });
});

const ShadePaletteProps = {
  name: "name",
  image: "image.jpg",
  isSelected: false,
  isOutOfStock: false,
  isLazyLoad: false,
  onClick: () => {}
};

describe('ShadePelette with in active state and lazyloaded', () => {
  const onClickMock = jest.fn();
  const wrapper = wrapWithTheme(<ShadePalette {...ShadePaletteProps} isSelected isLazyLoad onClick={onClickMock}/>, mount);
  const shadePeletteElement = wrapper.find('Palette').getDOMNode()[1];
  const imageTag = shadePeletteElement.getElementsByTagName('img')[0];
  const altText = imageTag.getAttribute('alt');
  const src = imageTag.getAttribute('src');
  const lazyLoad = imageTag.getAttribute('loading');

  it('ShadePellete should be rendered and img tag should be present', () => {
    expect(wrapper.find(ShadePalette)).toHaveLength(1);
    expect(shadePeletteElement.getElementsByTagName('img')).toHaveLength(1);
  });

  it('ShadePelette should have active class', () => {
    const classlist = shadePeletteElement.classList;
    let values = Object.values(classlist);
    expect(values.includes('active')).toBeTruthy;
    expect(values.includes('oos')).toBeFalsy;
  });

  it('ShadePelette image altText value', () => {
    expect(altText).toStrictEqual(`${ShadePaletteProps.name}-shade`);
  });

  it('ShadePelette image src value', () => {
    expect(src).toStrictEqual(`${ShadePaletteProps.image}?tr=w-50,h-50`);
  });

  it('ShadePelette image should be lazyload', () => {
    expect(lazyLoad).toStrictEqual('lazy');
  });

  // it('ShadePelette should be clickable', () => {
  //   const shadePelette = wrapper.find('.active').at(0);
  //   shadePelette.simulate('click');
  //   shadePelette.simulate('click');
  //   expect(onClickMock.mock.calls.length).toStrictEqual(2);
  // });
});

describe('ShadePelette with in outofStock state without lazyload', () => {
  const wrapper = wrapWithTheme(<ShadePalette {...ShadePaletteProps} isOutOfStock />, mount);
  const shadePeletteElement = wrapper.find('Palette').getDOMNode()[1];
  const imageTag = shadePeletteElement.getElementsByTagName('img')[0];
  const altText = imageTag.getAttribute('alt');
  const src = imageTag.getAttribute('src');
  const lazyLoad = imageTag.getAttribute('loading');

  it('ShadePellete should be rendered and img tag should be present', () => {
    expect(wrapper.find(ShadePalette)).toHaveLength(1);
    expect(shadePeletteElement.getElementsByTagName('img')).toHaveLength(1);
  });

  it('ShadePelette should have oos class', () => {
    const classlist = shadePeletteElement.classList;
    let values = Object.values(classlist);
    expect(values.includes('oos')).toBeTruthy;
    expect(values.includes('active')).toBeFalsy;
  });

  it('ShadePelette image altText value', () => {
    expect(altText).toStrictEqual(`${ShadePaletteProps.name}-shade`);
  });

  it('ShadePelette image src value', () => {
    expect(src).toStrictEqual(`${ShadePaletteProps.image}?tr=w-50,h-50`);
  });

  it('ShadePelette image should not be lazyload', () => {
    expect(lazyLoad).toStrictEqual(null);
  });
});

const SizeChipProps = {
  label: 'UK 10',
  isSelected: false,
  isOutOfStock: false,
  onClick: () => {}
};

describe('SizeChip with in active state and lazyloaded', () => {
  const onClickMock = jest.fn();
  const wrapper = wrapWithTheme(<SizeChip {...SizeChipProps} isSelected onClick={onClickMock}/>, mount);
  const sizeChipElement = wrapper.find('Chip').getDOMNode()[1];
  const label = sizeChipElement.innerHTML;

  it('SizeChip should be rendered', () => {
    expect(wrapper.find(SizeChip)).toHaveLength(1);
  });

  it('SizeChip should have active class', () => {
    const classlist = sizeChipElement.classList;
    let values = Object.values(classlist);
    expect(values.includes('active')).toBeTruthy;
    expect(values.includes('oos')).toBeFalsy;
  });

  it('SizeChip label should be equal props label', () => {
    expect(label).toStrictEqual(SizeChipProps.label);
  });

  // it('SizeChip should be clickable', () => {
  //   const sizeChip = wrapper.find('.siz_ChipClass');

  //   sizeChip.simulate('click');
  //   sizeChip.simulate('click');
  //   expect(onClickMock.mock.calls.length).toStrictEqual(2);
  // });
});

describe('SizeChip with in outofStock state', () => {
  const wrapper = wrapWithTheme(<SizeChip {...SizeChipProps} isOutOfStock />, mount);
  const sizeChipElement = wrapper.find('Chip').getDOMNode()[1];

  it('SizeChip should be rendered', () => {
    expect(wrapper.find(SizeChip)).toHaveLength(1);
  });

  it('SizeChip should have oos class', () => {
    const classlist = sizeChipElement.classList;
    let values = Object.values(classlist);
    expect(values.includes('oos')).toBeTruthy;
    expect(values.includes('active')).toBeFalsy;
  });
});

describe('Error title should be same as props', () => {
  const wrapper = wrapWithTheme(<Error message={SIZE_ERROR_MSG} />, mount);

  it('Error is rendered and title same as props', () => {
    expect(wrapper.text()).toEqual(SIZE_ERROR_MSG);
  });
});