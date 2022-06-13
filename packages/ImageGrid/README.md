# Image Grid

Image grid is used to show a grid of images with click Handlers. Image grid uses *flex* display to show the items in a grid.

> story coming soon!!

---

## Installation

### Yarn

    yarn add @eyewa/image-grid

### npm

    npm install -S @eyewa/image-grid

## Example Usage
```javascript
import ImageGrid from '@eyewa/image-grid';
  ...
  ...
  <ImageGrid
    imageList={listOfImages}
    handleClick={callbackFunction}
    customClass="my-custom-image-grid"
  />
  ...
```
---
## **Props**

### **`imageList`**

The `imageList` is an array of `imageObjects` which comprises of keys `url` - *the url for image* and `id` - *an unique identifier for image item*.

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

<ImageGrid
  ...
  imageList={exampleImageList}
/>
```
> **Please ensure you pass an unique identifier as `id` of `imageItem` in the `imageList`. This will be used as *key* to the react children**.


### **`customClass`** _(optional)_

The `customClass` an optional prop which can be used to be used as a custom selector for **CSS**. This is the recommended way, if you wan to customize the style rules of the **ImageGrid**.

#### example
```javascript
<ImageGrid
  ...
  customClass="my-custom-image-grid"
/>
```


### **`handleClick`** _(optional)_

An optional callback function can be passed as `handleClick` to be called on *click* of an image in the Grid. This would return the `imageItem`'s data for the image that is clicked.

#### example
```javascript
<ImageGrid
  ...
  handleClick={(imageItem) => { console.log(imageItem.id); }}
/>
```

## **Theme Options**

### **`--ig-primary-bg`**
> defaults to **`#eee`**

To control the background color of the image grid.

![image for image grid custom theme option](https://lh3.googleusercontent.com/-NlLyz-O_dgg/XibcTIoQRQI/AAAAAAAAGLk/CAemclp1YL4TEZEoxjSddu8j5KEBlzvLACK8BGAsYHg/s0/2020-01-21.png)

> the background property applies for the content represented in yellow in the above picture.

#### Usage

For a usage like this...
```javascript
<Client className="consumer-container">
  <ImageGrid {...propsForImageGrid} />
</Clinet>
```

one has to define the css rule as below
```scss
.consumer-container {
  --ig-primary-bg: #ffff00;
}
```
