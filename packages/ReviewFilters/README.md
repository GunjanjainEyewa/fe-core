# ReviewFilters

# Components

- Filters
- Sort
- SortModal
- Variants
- VariantModal

> story coming soon !!

# Installation

### Yarn

  yarn add @eyewa/review-filters

### npm

  npm install -S @eyewa/review-filters

# Usage

# Filters
```javascript
import Filters from '@eyewa/review-filters/lib/mobile/Filters';
  ...
  ...
  <Filters
    options={options}
    handleClick={handleClick}
  />
  ...
```


## **Props**

### **`options`**

The `options` is an array of `option` object which must contain following keys:
- isSelected: _is filter selected or not_
- id: _id of the filter_
- text: _text need to show of the filter_


### example
```javascript

const options = [{
  isSelected: false,
  id: 'VERIFIED_BUYER',
  text: 'Verified Buyers',
}]
<Filters
  ...
  options={options}
/>
```

### **`handleClick`**

An callback function can be passed as `handleClick` to be called on *click* on filter. This would return the `id` of the filter selected.

#### example
```javascript
<Filters
  ...
  handleClick={(option.id) => {}}
/>
```

# Sort
```javascript
import Sort from '@eyewa/review-filters/lib/mobile/Sort';
  ...
  ...
  <Sort
    options={options}
    openSort={openSort}
  />
  ...
```


## **Props**

### **`options`**

The `options` is an array of `option` object which must contain following keys:
- isSelected: _is sort selected or not_
- id: _id of the sort option_
- text: _text need to show of the sort option_


### example
```javascript

const options = [{
  isSelected: false,
  id: 'MOST_USEFUL',
  text: 'Most Useful',
}]
<Sort
  ...
  options={options}
/>
```

### **`openSort`**

An callback function can be passed as `openSort` to be called on *click* on sort option. This would not return anything.

#### example
```javascript
<Sort
  ...
  openSort={() => {}}
/>
```

# SortModal
```javascript
import SortModal from '@eyewa/review-filters/lib/mobile/SortModal';
  ...
  ...
  <SortModal
    options={options}
    changeSort={changeSort}
    text={text}
  />
  ...
```


## **Props**

### **`options`**

The `options` is an array of `option` object which must contain following keys:
- isSelected: _is sort selected or not_
- id: _id of the sort option_
- text: _text need to show of the sort option_


### example
```javascript

const options = [{
  isSelected: false,
  id: 'MOST_USEFUL',
  text: 'Most Useful',
}]
<SortModal
  ...
  options={options}
/>
```

### **`changeSort`**

A callback function can be passed as `changeSort` to be called on *click* on sort option. This would return id of the selected sort option.

#### example
```javascript
<SortModal
  ...
  changeSort={(option.id) => {}}
/>
```

### **`text`**

The `text` is the heading of the sortmodal.

#### example
```javascript
<SortModal
  ...
  text='Sort Reviews By'
/>
```

# Variants
```javascript
import Variants from '@eyewa/review-filters/lib/mobile/Variants';
  ...
  ...
  <Variants
    variantsLength={variantsLength}
    handleVariantModal={handleVariantModal}
    variantType={variantType}
  />
  ...
```


## **Props**

### **`variantsLength`**

The `variantsLength` is length of variants of a product.

#### example
```javascript
<Variants
  ...
  variantsLength={3}
/>
```

### **`handleVariantModal`**

A callback function can be passed as `handleVariantModal` to be called on *click* on div *select variant*. This would not return anything.

#### example
```javascript
<Variants
  ...
  handleVariantModal={() => {}}
/>
```

### **`variantType`**

The `variantType` is type of product's variant.

#### example
```javascript
<Variants
  ...
  variantType='shade'
/>
```

# VariantModal
```javascript
import VariantModal from '@eyewa/review-filters/lib/mobile/VariantModal';
  ...
  ...
  <VariantModal
    options={options}
    closeModal={closeModal}
    selectedVariants={selectedVariants}
    handleApply={handleApply}
    handleClick={handleClick}
    handleClose={handleClose}
    isSelected={isSelected}
    updateVariants={updateVariants}
    variantType={variantType}
    applyDisabled={applyDisabled}
  />
  ...
```


## **Props**

### **`options`**

The `options` is an array of `option` object which must contain following keys:
- isSelected: _is sort selected or not_
- id: _id of the sort option_
- text: _text need to show of the sort option_


### example
```javascript

const options = [{
  isSelected: false,
  id: 'MOST_USEFUL,
  text: 'Most Useful',
}]
<VariantModal
  ...
  options={options}
/>
```

### **`closeModal`**

A callback function can be passed as `closeModal` to be called on *click* on croos button of the modal. This would not return anything.

#### example
```javascript
<VariantModal
  ...
  closeModal={() => {}}
/>
```

### **`selectedVariants`**

The `selectedVariants` is an array of `option` object which must contain following keys:
- variantName: _name of the variant_
- productId: _id of the product_
- variantIcon: _url of the variant selected_

#### example
```javascript

const selectedVariants = [{
  productId: '3241;
  variantName: 'Pure Rouge';
  variantIcon: 'https://images-static.nykaa.com/media/icons/6902395671169_202maplemocha.jpg';
}]
<VariantModal
  ...
  selectedVariants={selectedVariants}
/>
```

### **`handleApply`**

A callback function can be passed as `handleApply` to be called on *click* on apply button. This would not return anything.

#### example
```javascript
<VariantModal
  ...
  handleApply={() => {}}
/>
```

### **`handleClick`**

A callback function can be passed as `handleClick` to be called on *click* on any variant. This would return id of selected Variant .

#### example
```javascript
<VariantModal
  ...
  handleClick={(option.productId) => {}}
/>
```

### **`handleClose`**

A callback function can be passed as `handleClose` to be called on *click* on cross icon of selected variant. This would return id of selected Variant .

#### example
```javascript
<VariantModal
  ...
  handleClose={(option.productId) => {}}
/>
```

### **`isSelected`**

A callback function can be passed as `isSelected` to be called on *click* on div of particular variant. This would return id of that Variant. This would check whether that variant is selected or not.

#### example
```javascript
<VariantModal
  ...
  isSelected={(option.productId) => {}}
/>
```

### **`updateVariants`**

A callback function can be passed as `updateVariants` to be called on *click* on clear all button. This would return empty array.

#### example
```javascript

<VariantModal
  ...
  updateVariants={([]) => {}}
/>
```

### **`variantType`**

The `variantType` is type of product's variant.

#### example
```javascript
<VariantModal
  ...
  variantType='shade'
/>
```

### **`applyDisabled`**

The `applyDisabled` is a boolean value which tells that apply button should be disabled or not.

#### example
```javascript
<VariantModal
  ...
  applyDisabled=true
/>
```


