# Image Rail

Image Rail is used to show a scrollable(horizontal) list of images with click Handlers. Image Rail uses *flex* display to show the items in a row.

> story coming soon!!

## Installation

### Yarn

    yarn add @eyewa/image-rail

### npm

    npm install -S @eyewa/image-rail

## Example Usage
```javascript
import ImageRail from '@eyewa/image-rail';
  ...
  ...
  <ImageRail
    imageList={listOfImagesYouWantToShow}
    handleClick={callbackFunction}
    handleShowMore={callbackFunctionForShowMoreImages}
    totalImages={totalNumberOfImagesYouHave}
    customClass="my-custom-image-rail"
  />
  ...
```

---

## **Props**

### **`imageList`**

The `imageList` is an array of `imageObjects` which comprises of the keys `url` - *the url for image* and `id` - *an unique identifier for image item*.

#### example
```javascript
const exampleImageList = [
  {
    url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-150,h-150,cm-pad_resize/8/9/8904245703790-0_1.jpg',
    id: '2145',
  },
  {
    url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-150,h-150,cm-pad_resize/8/9/8904245703790-0_1.jpg',

    id: '2146',
  },
  {
    url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-150,h-150,cm-pad_resize/8/9/8904245703790-0_1.jpg',
    id: '2147',
  },
]

<ImageRail
  ...
  imageList={exampleImageList}
/>
```
> **Please ensure you pass an unique identifier as `id` of `imageItem` in the `imageList`. This will be used as *key* to the react children**.


### **`customClass`**  _(optional)_

The `customClass` an optional prop which can be used to be used as a custom selector for **CSS**. This is the recommended way, if you wan to customize the style rules of the **ImageRail**.

#### example
```javascript
<ImageRail
  ...
  customClass="my-custom-image-rail"
/>
```

### **`handleClick`**  _(optional)_

An optional callback function can be passed as `handleClick` to be called on *click* of an image in the images. This would return the `imageItem`'s data for the image that is clicked.

#### example
```javascript
<ImageRail
  ...
  handleClick={(imageItem) => { console.log(imageItem.id); }}
/>
```

### **`handleShowMore`** _(optional)_

An optional callback function can be passed as `handleShowMore` to be called on *click* of an image in the images. This would return the `imageItem`'s data for the image that is clicked.

#### example
```javascript
<ImageRail
  ...
  handleShowMore={(imageItem) => {
    console.log(imageItem.id);
    // Trigger logic to navigate to a new page - for example
  }}
/>
```

### **`totalImages`** _(optional)_

`totalImages` is the total `number` of images you have and passing this value would enable you to show a tile to let the user know that there are more images. This would display an overlay on the last image and also call the *function* passed to the `image-rail` as `handleShowMore`.

This would display **`(totalImages - imageList.length)` + more images** on the overlay

> *When you pass `totalImages` ... you* **must** *pass **`handleShowMore`***.

> Skipping this prop would display _all the images_ passed as `imageList` prop

#### example
```javascript
<ImageRail
  ...
  totalImages={200}
  handleShowMore={(imageItem) => {handleShowMore}
  // "handleShowMore" must be passed when "totalImages" is passed.
/>
```

## **Theme Options**

### **`--ir-img-border`**
> defaults to **`#979797`**

To control the border color of the image in the image rail.

![image for image rail custom theme option](https://lh3.googleusercontent.com/-skLIYe3x4kY/XibhWptJzmI/AAAAAAAAGLw/NNtLsq8HFrI99o9_iF8RGPlB00qpJkbTgCK8BGAsYHg/s0/2020-01-21.png)

> The border property applies to the pink border around the images.

#### Usage

For a usage like this...
```javascript
<Client className="consumer-container">
  <ImageRail {...propsForImageRail} />
</Client>
```

one has to define the css rule as below

```css
  .consumer-container {
    --ir-img-border: #000;
  }
```

### **`--ir-color-primary`**
> defaults to **`#fff`**

To control the text color of the show more element in the image rail.

![image for image rail custom theme option](https://lh3.googleusercontent.com/-huoRq2apZzs/Xibh7pMY2HI/AAAAAAAAGL4/OP5ZoMOJ4cY6V_ujb2qzdI8WwMDNnRJpQCK8BGAsYHg/s0/2020-01-21.png)

> This variable controls the text color of show more (_represented in pink_)

#### Usage

For a usage like this...
```javascript
<Client className="consumer-container">
  <ImageRail {...propsForImageRail} />
</Client>
```

one has to define the css rule as below

```css
  .consumer-container {
    --ir-color-primary: #000;
  }
```


### **`--ir-color-primary`**
> defaults to **`#000`**

To control the background color of the show more element in the image rail.

![image for image rail custom theme option](https://lh3.googleusercontent.com/-huoRq2apZzs/Xibh7pMY2HI/AAAAAAAAGL4/OP5ZoMOJ4cY6V_ujb2qzdI8WwMDNnRJpQCK8BGAsYHg/s0/2020-01-21.png)

> This variable controls the background color of show more overlay (_black in this picture_).

#### Usage

For a usage like this...
```javascript
<Client className="consumer-container">
  <ImageRail {...propsForImageRail} />
</Client>
```

one has to define the css rule as below

```css
  .consumer-container {
    --ir-show-more-bg: #000;
  }
```
