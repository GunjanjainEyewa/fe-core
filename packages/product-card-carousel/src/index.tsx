import React, { useState } from 'react';
import { styled } from '@eyewa/ui-components';
import StickyButton from './components/StickyButton';
import handleSwipeList from './utils';
import { BACKWARD, FORWARD } from './constants';


interface ProductCarouselProps {
  ListItem: JSX.Element;
  numberOfCardToDisplay: number;
  cardWidth: number;
  listId?: string;
  customClass?: string;
  isInfiniteEnable?: boolean;
  listLength?: number;
}
const ListWrapper = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  user-select: none;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
  left: -5px;
  overflow: hidden;
  width: 100%;
`;
const List = styled.div<{forwardWidth: number;}>`
  height: auto;
  transform: translate3d(${({ forwardWidth }) => forwardWidth}px , 0, 0);
  transition: 0.5s;
  display: inline-flex;
  overflow: hidden;
`;
const ProductCarousel = (props: ProductCarouselProps) => {
  const {
    ListItem, numberOfCardToDisplay,
    listId, cardWidth, isInfiniteEnable, customClass,
    listLength = 0,
  } = props;
  const [currentPosition, setCurrentPosition] = useState(0);
  const listDisplayWidth = (numberOfCardToDisplay * cardWidth);
  const listTotalWidth = (ListItem.props?.children?.length * cardWidth);
  const forwardButtonActive = isInfiniteEnable
    || (currentPosition !== (listDisplayWidth - listTotalWidth));
  const backwardButtonActive = isInfiniteEnable || (currentPosition !== 0);
  const handleSwipeLeft = () => {
    handleSwipeList(
      listTotalWidth,
      false,
      currentPosition,
      setCurrentPosition,
      listDisplayWidth,
      isInfiniteEnable,
    );
  };
  const handleSwipeRight = () => {
    handleSwipeList(
      (listTotalWidth - listDisplayWidth),
      true,
      currentPosition,
      setCurrentPosition,
      listDisplayWidth,
      isInfiniteEnable,
    );
  };
  const hideArrows = (listLength <= numberOfCardToDisplay);
  return (
    <ListWrapper className={customClass}>
      <StickyButton
        transformRight={false}
        handleClick={handleSwipeLeft}
        title={BACKWARD}
        active={backwardButtonActive}
        hideArrows={hideArrows}
      />
      <List
        id={listId}
        forwardWidth={currentPosition}
      >
        {ListItem}
      </List>
      <StickyButton
        transformRight
        handleClick={handleSwipeRight}
        title={FORWARD}
        active={forwardButtonActive}
        hideArrows={hideArrows}
      />
    </ListWrapper>
  );
};

export default ProductCarousel;
