const handleSwipeList = (
  maxWidth: number,
  forwardDirection: boolean,
  currentPosition: number,
  setCurrentPosition: React.Dispatch<React.SetStateAction<number>>,
  listDisplayWidth: number,
  isInfiniteEnable: boolean,
) => {
  let updatedWidth;
  if (forwardDirection) {
    updatedWidth = currentPosition - listDisplayWidth;
    if ((-1 * updatedWidth) > maxWidth) {
      updatedWidth = (-1) * maxWidth;
    }
    if ((-1 * currentPosition >= maxWidth) && (isInfiniteEnable)) {
      updatedWidth = 0;
    }
  } else {
    updatedWidth = currentPosition + listDisplayWidth;
    if (updatedWidth > 0) {
      updatedWidth = 0;
    }
    if ((currentPosition >= 0) && (isInfiniteEnable)) {
      updatedWidth = (listDisplayWidth - maxWidth);
    }
  }
  setCurrentPosition(updatedWidth);
};


export default handleSwipeList;
