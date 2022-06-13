# Lazy Load

  A generic lazy load component to lazily render content when it comes into view port or comes closer to the viewport. Support to specify both the vertical threshold and the horizontal threshold as well

  > 🚧 We kept the scope of this component to be simple - that is, it enables us to specify the thresholds from bottom or right from the viewport. these are the typical use cases for lazyloading content... images,carousel etc. However this can easily be extended to other dimensions frm view port.

---

## Installation

### Yarn

    yarn add @eyewa/lazy-load

### npm

    npm install -S @eyewa/lazy-load

## Example Usage

```javascript
import LazyLoad from '@eyewa/lazy-load';
...
...
<LazyLoad
    bottomMargin={250}
    rightMargin={100}
    placeHolder={<DummyPlaceHolder />}
  >
    <SomeComponentToLazyLoad />
  </LazyLoad>
...

```

---

## **Props**

### **`bottomMargin`**: `number`

The `bottomMargin` is used to specify the distance from the bottom of the viewport the content should be rendered.

> 💡 The bottomMargin value can also be negative. Just in case you want the content to load after coming into the view port and at a distance from the bottom.

### **`children`**: `ReactChild`

The component/image you want to lazy load` has to be passed a child.

> ❓ We choose to keep this a child so as to give complete control of the component to lazy load to the parent using the lazy load. This also helps us to keep the interface of the LazyLoad component simple

### **`placeHolder`**: `ReactNode`

The placeholder you want to show when the content is away from viewport.

> 💡 Place holder can come in handy to avoid layout shifts especially on slow networks where it might take time to load the content.

### **`rightMargin`**: `number`

The `rightMargin` is used to specify the distance from the right side of the viewport the content should be rendered.

> 💡 The rightMargin value can also be negative. Just in case you want the content to load after coming into the view port and at a distance from the right side - can be useful in desktop applications but not so much in mobile.

### **`wrapperClassName`**: `string`

The Lazy load components also adds a wrapper around the content you want to LazyLoad... so you can pass the wrapper a class in case you want to control the content;
