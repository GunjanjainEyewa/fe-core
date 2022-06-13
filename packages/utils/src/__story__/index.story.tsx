import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { getConciousLogoUrl } from '../image';

export default {
  title: 'Utilities',
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex',
    },
  },
  args: {
    imageUrl:'https://images-static.nykaa.com/media/catalog/product/8/1/815f5cf8901526525133__1_.jpg',
    logoUrl: "https://adn-static1.nykaa.com/media/consc/logox_crueltyfree.png",
    imageWidth:390,
    imageHeight:390,
    imageData:{
      imageDetails:[{overlay:[ {type :'cruelty-free'}]}]
    },
    imageDeviceDetails:{default:[{overlay:[{image: "https://adn-static1.nykaa.com/media/consc/logox_crueltyfree.png",w:243,x:525,h:0,y:525,type:'cruelty-free'}], width:800, height: 800}]},
  },
}

export const ImageWithLogo = (args) => {
  const data = {
    imageData:{
      url:args.imageUrl,
      imageDetails:[{overlay:[ {type :'cruelty-free'}]}]
    },
    imageDeviceDetails:{default:[{overlay:[{image: args.logoUrl,w:243,x:525,h:0,y:525,type:'cruelty-free'}], width:800, height: 800}]},
    imageDimension:{imageWidth:args.imageWidth,imageHeight:args.imageHeight}
  }
  return(
    <div className='slide-wrapper'>
      <img src={getConciousLogoUrl(data)}/>
    </div>
  )
};