export const ImageSelectData = {
  attribute: 'skinTone',
  questionText: 'Which is the closest Skin Tone you associate with?',
  options: [{
    value: 'fair1',
    image: 'https://adn-static2.nykaa.com/media/wysiwyg/2019/Foundation-Finder/Faces/Divya_Fair-to-wheatish-with-neutral.png',
    category: 'fair',
    order: 5,
    color: '#F6D3BC',
    keyIndex: 1,
    optionId: '13',
  },
  {
    value: 'fair2',
    image: 'https://adn-static2.nykaa.com/media/wysiwyg/2019/Foundation-Finder/Faces/Divya_Fair-to-wheatish-with-neutral.png',
    category: 'fair',
    order: 5,
    color: '#EAD0AC',
    keyIndex: 2,
    optionId: '14',
  },
  {
    value: 'dark1',
    image: 'https://adn-static2.nykaa.com/media/wysiwyg/2019/Foundation-Finder/Faces/Aditi_Dusky-with-yellow.png',
    category: 'dark',
    order: 2,
    color: '#F8CEAF',
    keyIndex: 3,
    optionId: '15',
  },
  {
    value: 'dark2',
    image: 'https://adn-static2.nykaa.com/media/wysiwyg/2019/Foundation-Finder/Faces/Elvina_Deep-Dusky-with-neutral.png',
    category: 'dark',
    order: 2,
    color: '#E7B9A3',
    keyIndex: 4,
    optionId: '16',
  },
  {
    value: 'dark3',
    image: 'https://adn-static2.nykaa.com/media/wysiwyg/2019/Foundation-Finder/Faces/Michelle_Deep-Dusky-with-pink.png',
    category: 'dark',
    order: 2,
    color: '#EFC99C',
    keyIndex: 5,
    optionId: '17',
  }],
  selectedValues: [{
    value: 'Deep Dusky With Pink Undertone (DD2)',
    image: 'https://images-static.nykaa.com/nonprod-review/user_portfolio_images/portfolio_dd2.jpeg',
    category: 'deep_dusky',
    keyIndex: 17,
    color: '#a2785d',
    optionId: '17',
    tagId: '750',
  }],
  isSkippable: true,
  isPrivate: false,
  infoText: 'You can tap the answer to Edit and choose another option.',
};

export const CheckBoxWidgetData = {
  attribute: 'skinTone',
  questionText: 'Allow fellow shoppers to see my Skin tone, Skin type and Hair type',
  isPrivateAttribute: false,
  isSkippable: false,
  profilePic: 'https://images-static.nykaa.com/prod-review/default_profile_image.svg',
  name: 'Shivani Sangal',
  createdOnText: '19/08/2020',
  skinTone: '#F4DDCC',
  skinType: 'Dry',
  hairType: ['Coarse & Straight'],
  showInfoSection: true,
  infoText: 'Please note, now you would not be able to view reviews th beauty traits of other shoppers as well',
  userInfo: [
    {
      attribute: 'skinTone',
      displayText: 'Skin Tone',
      values: [{
        value: 'Deep Dusky With Pink Undertone (DD2)',
        image: 'https://images-static.nykaa.com/nonprod-review/user_portfolio_images/portfolio_dd2.jpeg',
        category: 'deep_dusky',
        color: '#a2785d',
        optionId: '3',
      }],
      type: 'singleImage',
    },
    {
      attribute: 'skinType',
      displayText: 'Skin Type',
      values: [{
        value: 'Stretch Marks',
        optionId: '7',
      },
      {
        value: 'Dusky',
        optionId: '7',
      }],
      type: 'multiSelect',
    },
    {
      attribute: 'hariType',
      displayText: 'Hair Type',
      values: [{
        value: 'Stretch Marks',
        optionId: '7',
      },
      {
        value: 'Dusky',
        optionId: '7',
      }],
      type: 'multiSelect',
    },
  ],
};

export const questionData = {
  attribute: 'skinTone',
  questionText: 'Which is the closest Skin Tone you associate with?',
  options: [
    {
      value: 'fair',
      optionId: '1',
    },
    {
      value: 'dark',
      optionId: '2',
    },
    {
      value: 'Uneven Skin Tones',
      optionId: '3',
    },
    {
      value: 'Sun Damage',
      optionId: '4',
    },
    {
      value: 'Dark Circles',
      optionId: '5',
    },
    {
      value: 'Blackheads',
      optionId: '6',
    },
    {
      value: 'Stretch Marks',
      optionId: '7',
    },
  ],
  selectedValues: [{
    value: 'Stretch Marks',
    optionId: '7',
  }],
  isSkippable: true,
  isPrivate: true,
};
