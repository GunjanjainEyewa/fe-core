import React from 'react';
import { styled } from '@nykaa/ui-components';
import { NewTags, TagComponent } from '@nykaa/product-card-shared/types/tags';

interface CustomStyleProps {
  customStyle?: NewTags;
}

const OFFER = 'offer';
const OFFERS = 'offers';


const ListItem = styled.li<CustomStyleProps>`
  text-transform: uppercase;
  ${({ theme }) => theme.typography.subTitleSmall};
  &.custom-tag {
    padding: 3px 5px;
    background-color: ${({ customStyle }) => customStyle?.bgColor};
    border: ${({ customStyle }) => customStyle?.borderColor && `1px solid ${customStyle.borderColor}`};
    color: ${({ customStyle }) => customStyle?.titleColor};
    font-weight: ${({ customStyle }) => customStyle?.fontWeight};
    opacity: ${({ customStyle }) => customStyle?.opacity};
    font-size: ${({ customStyle }) => customStyle?.fontSize};
  }
`;

const TagName: React.FC<TagComponent> = ({
  index,
  tag,
  offersCount,
  handleTagClick,
  showMultipleTag,
  customStyle,
}: TagComponent) => {
  let updatedName: string = '';
  if ((!Array.isArray(tag)) && (typeof tag !== 'string') && (tag?.name)) {
    updatedName = tag?.name;
  } else if (typeof tag === 'string') {
    updatedName = tag;
  }
  if (updatedName === OFFER) {
    if (offersCount > 1) {
      updatedName = OFFERS;
    }
  }
  if (!updatedName) {
    return null;
  }
  const listKey = `tagItem${index}`;
  const handleTag = () => {
    if (handleTagClick) {
      handleTagClick(updatedName?.toLowerCase());
    }
  };
  const tagClass = (showMultipleTag && customStyle)
    ? 'custom-tag'
    : `${updatedName?.toLowerCase()}`;

  return (
    <ListItem
      key={listKey}
      aria-hidden="true"
      className={tagClass}
      onClick={handleTag}
      customStyle={customStyle}
    >
      {updatedName}
    </ListItem>
  );
};

export default TagName;
