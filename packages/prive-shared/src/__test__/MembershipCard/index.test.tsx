import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import MembershipCard from '../../components/MembershipCard';

const MembershipCardProps = {
  tierName: 'gold',
  enrollmentDate: 'Oct 2021',
  expiryDate: 'Oct 2022',
  rewardPoints: 5398,
};

describe('Prive-2.0-MembershipCard', () => {
  const wrapper = shallow(<MembershipCard {...MembershipCardProps} />);
  //   console.log(wrapper.debug());

  test('MembershipCard should have tierPeriod if provided', () => {
    expect(
      wrapper
        .find("Styled(div)[id='MembershipCard-tierperiod']")
        .first()
        .text()
    ).toEqual(`From ${MembershipCardProps.enrollmentDate} to ${MembershipCardProps.expiryDate}`);
  });

  test('MembershipCard should have rewardPoints if provided', () => {
    expect(
      wrapper
        .find("Styled(div)[id='MembershipCard-rewardpoints']")
        .first()
        .text()
    ).toEqual(MembershipCardProps.rewardPoints.toString());
  });
});
