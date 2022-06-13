# combo-products

Combo Product is used to show combo-product list for a particular Product.

## Installation

### Yarn

    yarn add @nykaa/combo-products

### npm

    npm install -S @nykaa/combo-products

## Example Usage
```javascript

import ComboList from '@nykaa/combo-products/layout';
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
