/* This function is for check
if productList.length === min then no need to display Show more button.
if min tile === max tile again no need to display Show more button */
const showButtonCheck = (listLength: number, maxTile: number, minTile: number) => {
  if (
    ((listLength < maxTile) && (listLength === minTile))
    || (minTile === maxTile)
  ) {
    return false;
  }
  return true;
};

export default showButtonCheck;
