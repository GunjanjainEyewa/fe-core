import 'jsdom-global/register'; // for providing

import React from 'react';
import { render, shallow } from 'enzyme';
import ShowButton from '../../components/ShowButton';



describe('Show button', () => {
  it('should render', () => {
    const wrapper = shallow(
      <ShowButton
        text='show'
        showLess={true}
        handleShowTile={()=>('test')}
      />
    );
    expect(wrapper.find('Styled(div)').props().children.length).toBe(2);
  });

  it('should simulate click on the show more button', () => {
    const mockCallback = jest.fn();
    const wrapper = shallow(
      <ShowButton
        text='show'
        showLess={true}
        handleShowTile={mockCallback}
      />
    );
    const button = wrapper.find('Styled(div)');
    expect(button).toHaveLength(1);
    button.simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(1);
    button.simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(2);
  });

  it('should not find onClick function when we not passing handleShowTile callback', () => {
    const wrapper = shallow(
      <ShowButton
        text='show'
        showLess={true}
        handleShowTile={null}
      />
    );
    expect(wrapper.find('Styled(div)').props().onClick).toBe(null);
  });

})
