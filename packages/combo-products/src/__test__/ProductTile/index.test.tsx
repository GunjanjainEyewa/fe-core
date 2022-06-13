import 'jsdom-global/register'; // for providing
import React from 'react';
import { shallow } from 'enzyme';
import TileView from '../../components/ProductTile';


describe('ProductTile', () => {
  it('should render the ProductTile', () => {
    const wrapper = shallow(
      <TileView
        productId={1234}
        customTag={'BestSeller'}
        productIcon="https://images-static.nykaa.com/media/catalog/product/tr:w-150,h-150,cm-pad_resize/8/9/8904245703790-0_1.jpg"
        productTitle="Test"
        ratingCount={566}
        avgRating={4.6}
        mrp={500}
        price={400}
        discount={20}
      />
    );
    expect(wrapper.find('Styled(div)').first().props().children).toHaveLength(2);
  });
  it('should simulate click functionality', () => {
    const mockCallback = jest.fn();
    const wrapper = shallow(
      <TileView
        productId={1234}
        customTag={'BestSeller'}
        productIcon="https://images-static.nykaa.com/media/catalog/product/tr:w-150,h-150,cm-pad_resize/8/9/8904245703790-0_1.jpg"
        productTitle="Test"
        ratingCount={566}
        avgRating={4.6}
        mrp={500}
        price={400}
        discount={20}
        handleClick={mockCallback}
      />
    );
    const productInfoButton = wrapper.find('Styled(div)').first();
    expect(productInfoButton).toHaveLength(1);
    productInfoButton.simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(1);
    productInfoButton.simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(2);
  });
})
