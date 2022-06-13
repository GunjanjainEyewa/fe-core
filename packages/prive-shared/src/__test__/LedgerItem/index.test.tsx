import 'jsdom-global/register'; // for providing
import React from 'react';
import { shallow } from 'enzyme';
import LedgerItem from '../../components/LedgerItem';

const LedgerItemProps = {
  title: 'Maybelline New York Color Maybelline New York Color',
  amount: 2000,
  amountColor: '#964D5D',
  isCredit: true,
  multiplier: 1.5,
  reason: 'Purchase',
  date: 'Dec 28, 2021',
  tier: 'gold',
};

describe('Prive-2.0-LedgerItem', () => {
  const wrapper = shallow(<LedgerItem {...LedgerItemProps} />);
  //   console.log(wrapper.debug());

  it('LedgerItem should have title if provided', () => {
    expect(
      wrapper.find("Styled(div)[id='LedgerItem-title']").first().text()
    ).toEqual(LedgerItemProps.title);
  });

  it('LedgerItem should have amount if provided', () => {
    expect(
      wrapper
        .find("Styled(div)[id='LedgerItem-amount']")
        .first()
        .text()
    ).toEqual(
      `${LedgerItemProps.isCredit ? '+' : '-'}${LedgerItemProps.amount}`
    );
  });

  it('LedgerItem should have multiplier if provided', () => {
    expect(
      wrapper
        .find("Styled(div)[id='LedgerItem-multiplier']")
        .first()
        .text()
    ).toEqual(`${LedgerItemProps.multiplier}x ${LedgerItemProps.tier}`);
  });

  it('LedgerItem should have reason if provided', () => {
    expect(
      wrapper
        .find("Styled(div)[id='LedgerItem-reason']")
        .first()
        .text()
    ).toEqual(LedgerItemProps.reason);
  });

  it('LedgerItem should have date if provided', () => {
    expect(
      wrapper.find("Styled(div)[id='LedgerItem-date']").first().text()
    ).toEqual(LedgerItemProps.date);
  });
});