import 'jsdom-global/register'; // for providing
import React from 'react';
import { shallow } from 'enzyme';
import Question from '.';

describe('Question component', () => {
  it('should render the text only', () => {
    const text = 'Some text for the question';
    const wrapper = shallow(<Question text={text} />);
    expect(wrapper.children()).toHaveLength(2);
  });
  it('should render Thankyou icon also', () => {
    const text = 'Some text for the question';
    const wrapper = shallow(
      <Question text={text} showImage={true} />
    );
    expect(wrapper.children()).toHaveLength(2);
  });
});
