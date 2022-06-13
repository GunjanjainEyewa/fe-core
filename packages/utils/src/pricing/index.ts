export const getRoundedDiscount = (discount: number) => {
  const parsedDiscount = Number(discount);
  if (Number.isNaN(parsedDiscount)) {
    return 0;
  }
  const roundedNumber = Math.round(parsedDiscount);
  if (roundedNumber < 0) {
    return 0;
  } if (roundedNumber > 100) {
    return 100;
  }

  return roundedNumber;
};

export const dummy = true;
