// ! move this to __test__ 🤔
import {
  scaleImageInUri,
  getConciousLogoUrl,
} from '../image';

const imageData = {
  url:'https://images-static.nykaa.com/media/catalog/product/8/1/815f5cf8901526525133__1_.jpg',
  imageDetails:[{overlay:[ {type :'cruelty-free'}]}]
};
const imageDimension = {imageWidth:375,imageHeight:390};
const imageDeviceDetails = {default:[{overlay:[{image: "https://adn-static1.nykaa.com/media/consc/logox_crueltyfree.png",w:243,x:525,h:0,y:525,type:'cruelty-free'}], width:800, height: 800}]};

describe('scale image in URI', () => {
  it('should update height and width', () => {
    const inputData1 = {
      url: '/media/catalog/product/tr:h-800,w-800,cm-pad_resize/6/9/d_2.jpg',
      width: 200,
      height: 200
    } ;
    const output1 = '/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/9/d_2.jpg'
    expect(scaleImageInUri(inputData1)).toBe(output1);
  });
  it('should set height', () => {
    const inputData1 = {
      url: '/media/catalog/product/tr:h-800,w-800,cm-pad_resize/6/9/d_2.jpg',
      height: 200
    } ;
    const output1 = '/media/catalog/product/tr:h-200,cm-pad_resize/6/9/d_2.jpg'
    expect(scaleImageInUri(inputData1)).toBe(output1);
  });
  it('should set width', () => {
    const inputData1 = {
      url: '/media/catalog/product/tr:h-800,w-800,cm-pad_resize/6/9/d_2.jpg',
      width: 200
    } ;
    const output1 = '/media/catalog/product/tr:w-200,cm-pad_resize/6/9/d_2.jpg'
    expect(scaleImageInUri(inputData1)).toBe(output1);
  });
  it('should return the same URL', () => {
    const inputData1 = {
      url: '/media/catalog/product/tr:h-800,w-800,cm-pad_resize/6/9/d_2.jpg',
    } ;
    const output1 = '/media/catalog/product/tr:h-800,w-800,cm-pad_resize/6/9/d_2.jpg'
    expect(scaleImageInUri(inputData1)).toBe(output1);
  });
});

describe('Image With Logo', () => {
  it('should render image with logo', () => {
    const ImageWithLogoData = {
      imageData:imageData,
      imageDeviceDetails:imageDeviceDetails,
      imageDimension:imageDimension
    }
    const output = 'https://images-static.nykaa.com/media/catalog/product/8/1/815f5cf8901526525133__1_.jpg?tr=w-375,h-390,pr-true:oi-@@media@@consc@@logox_crueltyfree.png,ox-246.09375,oy-255.9375,ow-113.90625'
    expect(getConciousLogoUrl(ImageWithLogoData)).toBe(output);
  });
  it('should render image without logo if any required info missing', () => {
    const inputData = {
      imageData:imageData,
      imageDeviceDetails:imageDeviceDetails,
      imageDimension:null
    }
    const output = 'https://images-static.nykaa.com/media/catalog/product/8/1/815f5cf8901526525133__1_.jpg'
    expect(getConciousLogoUrl(inputData)).toBe(output);
  });
  it('should return empty string if url is missing', () => {
    const inputData = {
      imageData:{
        url: null,
        imageDetails:[{overlay:[ {type :'cruelty-free'}]}]
      },
      imageDeviceDetails:imageDeviceDetails,
      imageDimension:imageDimension
    }
    const output = ''
    expect(getConciousLogoUrl(inputData)).toBe(output);
  });
});