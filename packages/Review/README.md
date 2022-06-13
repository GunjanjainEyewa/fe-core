# Review

It is review card which shows information like user details, review description and images uploaded by the user.

> story coming soon !!

# Installation

### Yarn

  yarn add @eyewa/review

### npm

  npm install -S @eyewa/review

## Example Usage
```javascript
import ReviewCard from '@eyewa/review';
  ...
  ...
  <ReviewCard
    review={review}
    product={product}
    handleImageClick={handleImageClick}
    handleLike={handleLike}
  />
  ...
```


## **Props**

### **`review`**

The `review` is an object which contains following keys:
- title : _review title_
- description: _review description_
- likeCount: _total no of likes on a review_
- createdOn: _date of the review_
- rating: _average rating of a review_
- isLikedByUser: _review liked by the user or not_
- profilePic: _profile of the user_
- variantId: _id of the child product_
- id: _id of the review_
- images: _images uploaded by user on that review_
- createdOnText: _date when review was added by user if review is before 1 day it will display text today only_

### example
```javascript

const review = {
  title: 'Lipstick',
  description: 'I have very dry damaged coloured processed hair this potion though a bit expensive and little in quantity is a miracle in a bottle.',
  name: 'Seema',
  createdOn: '26-11-2019',
  likeCount: 45,
  rating: 4,
  isLikedByUser: true,
  isBuyer: true,
  profilePic: 'https://images-static.nykaa.com/media/catalog/product/tr:w-150,h-150,cm-pad_resize/8/9/8904245703790-0_1.jpg',
  variantId: 1234,
  id: 4321,
  images: ['https://images-static.nykaa.com/media/catalog/product/tr:w-150,h-150,cm-pad_resize/8/9/8904245703790-0_1.jpg', 'https://images-static.nykaa.com/media/catalog/product/tr:w-150,h-150,cm-pad_resize/8/9/8904245703790-0_1.jpg'],
  createdOnText: 'Today',
}
<ReviewCard
  ...
  review={review}
/>
```

### **`product`**

The `product` is an object which consists following keys:

- name : _name of the product_
- productId: _id of the product_
- variant_type: _type of product like shade, size_
- id: _id of the parent product_
- options: options is child products of a product if it has any. It must contains keys like:
  - variant_icon: _url of the variant type_
  - id: _id of the child product_
  - variant_name: _name of the child product name_
- createdOnText: _date when review was added by user if review is before 1 day it will display text **today**_

### example
```javascript

const product = {
  name: 'Bobbi Brown Crushed Liquid Lip Color - Big Apple',
  productId: '397027',
  options: [
    {variant_icon: 'https://images-static.nykaa.com/media/icons/8904245705114_jaan12.jpg',
    id: '1247',
    variant_name: 'Nykaa Matte To Last ! Liquid Lipstick - Jaan 12'
    }
  ],
  id: '1234',
  variant_type: 'shade',
}

<ReviewCard
  ...
  product={product}
/>
```

### **`handleImageClick`**

An optional callback function can be passed as `handleImageClick` to be called on *click* of an image in the review card. This would return the `imageItem`'s data for the image that is clicked. `imageItem` contains `url` of the image and `id` index of the clicked image.


#### example
```javascript
<ReviewCard
  ...
  handleImageClick={(imageItem) => {imageItem.id}}
/>
```

### **`handleLike`**

An optional callback function can be passed as `handleLike` to be called on *click* of on like icon. This would return the `id` of the review for the likeIcon that is clicked and `isLikedByUser` which tells that user liked or unliked the review.

#### example
```javascript
<ReviewCard
  ...
  handleLike={(id, isLikedByUser ) => {}}
/>
```
