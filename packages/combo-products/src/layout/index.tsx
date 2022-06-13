import React, { useState } from 'react';
import { styled } from '@eyewa/ui-components';
import { pushEvent } from '@eyewa/data-layer/utils';
import {
  dataEventShowLess,
  dataEventShowMore,
  LESS_TEXT,
  MORE_TEXT,
  SHOW_BUTTON_EVENT,
} from '../constants';
import { ComboListProps } from '../types';
import showButtonCheck from '../utils';
import ShowButton from '../components/ShowButton';
import TileView from '../components/ProductTile';


const Wrapper = styled.div`
  margin: 10px;
`;
const ComboList = ({
  productList,
  minTile,
  maxTile,
  handleClick,
  showMoreText,
  showLessText,
}: ComboListProps) => {
  const [noOfTiles, setNoOfTiles] = useState(minTile);
  const SHOW_MORE = showMoreText || MORE_TEXT;
  const SHOW_LESS = showLessText || LESS_TEXT;
  const [showButtonText, setShowButtonText] = useState({ text: SHOW_MORE, showLess: false });
  const showButtonFlag = showButtonCheck(productList.length, maxTile, minTile);

  const handleShowTile = () => {
    if ((noOfTiles === maxTile) || (noOfTiles === productList.length)) {
      setNoOfTiles(minTile);
      pushEvent(SHOW_BUTTON_EVENT, { comboShowClick: dataEventShowLess });
      setShowButtonText({ text: SHOW_MORE, showLess: false });
    } else {
      if (productList.length < maxTile) {
        setNoOfTiles(productList.length);
      } else {
        setNoOfTiles(maxTile);
      }
      setShowButtonText({ text: SHOW_LESS, showLess: true });
      pushEvent(SHOW_BUTTON_EVENT, { comboShowClick: dataEventShowMore });
    }
  };

  return (
    <Wrapper>
      {((productList) && productList.map((element, index) => {
        if ((index < noOfTiles) && (element.inStock)) {
          return (
            <TileView
              productId={element.productId}
              customTag={element.customTag}
              productIcon={element.productIcon}
              productTitle={element.productTitle}
              ratingCount={element.ratingCount}
              avgRating={element.avgRating}
              mrp={element.mrp}
              price={element.price}
              discount={element.discount}
              handleClick={handleClick}
            />
          );
        }
        return null;
      }))}
      {showButtonFlag && (
        <ShowButton
          text={showButtonText.text}
          showLess={showButtonText.showLess}
          handleShowTile={handleShowTile}
        />
      )}
    </Wrapper>
  );
};
export default ComboList;
