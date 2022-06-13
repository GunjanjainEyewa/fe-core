import 'jsdom-global/register'; // for providing
import React from 'react';
import { shallow } from 'enzyme';
import ImageZoom from '../../components/ProductImage/SelectedImage';
import SelectedCustomImage from '../../components/ProductImage/SelectedCustomImage';
import ReactImageMagnify from 'react-image-magnify';

const mocData = {
  imageUri: "https://images-static.nykaa.com/media/catalog/product/a/0/a099277bregn00000149_1.jpg",
  wrapperHeight: 520,
  wrapperWidth: 1000,
  pdpCustomVideoEnabled: false,
  ImageClickCallback: null,
  mediaType: 'image',
};

describe('Check pdp carousel section render', () => {
  it('should render custom videos section', () => {
    const wrapper = shallow(<ImageZoom {...mocData} pdpCustomVideoEnabled={true} />);
    expect(wrapper.find(SelectedCustomImage)).toHaveLength(1);
  });

  it('should not render custom videos section', () => {
    const wrapper = shallow(<ImageZoom {...mocData} pdpCustomVideoEnabled={false} />);
    expect(wrapper.find(SelectedCustomImage)).toHaveLength(0);
  });
  
  it('should render react magnifier section', () => {
    const wrapper = shallow(<ImageZoom {...mocData} pdpCustomVideoEnabled={false} />);
    expect(wrapper.find(ReactImageMagnify)).toHaveLength(1);
  });

  it('should not render react magnifier section', () => {
    const wrapper = shallow(<ImageZoom {...mocData} pdpCustomVideoEnabled={true} />);
    expect(wrapper.find(ReactImageMagnify)).toHaveLength(0);
  });

  it('should render react magnifier section if video flag is undefined or null', () => {
    const wrapper = shallow(<ImageZoom {...mocData} pdpCustomVideoEnabled={undefined || null} />);
    expect(wrapper.find(ReactImageMagnify)).toHaveLength(1);
  });
});
