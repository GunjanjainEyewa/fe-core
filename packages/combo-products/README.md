# combo-products

Combo Product is used to show combo-product list for a particular Product.

## Installation

### Yarn

    yarn add @eyewa/combo-products

### npm

    npm install -S @eyewa/combo-products

## Example Usage
```javascript

import ComboList from '@eyewa/combo-products/layout';
  ...
  ...

  <ComboList
    productList={listOfProductYouWantToShow}
    minTile={minProductTileNeedsToBeDisplayed}
    maxTile={maxProductTileNeedsToBeDisplayed}
    theme={productTheme}
    handleClick={callbackFunctionForClickOnAnyProductTile}
  />
 ...
```
