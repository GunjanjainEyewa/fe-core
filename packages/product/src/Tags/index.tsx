import React from 'react';
import { styled } from '@eyewa/ui-components';
import { NewTags, TagComponent as TagNameProps } from '@eyewa/product-card-shared/types/tags';
import { TagObject } from '../types';
import { NEW_TAG_CLASS, OLD_TAG_CLASS } from '../constants';
import { generateId } from '../helper';

interface CustomStyleProps {
  customStyle?: NewTags;
}

const Wrapper = styled.li<CustomStyleProps>`
  margin-right: 4px;
  border: none;
  display: inline-block;
  padding: 0 5px;
  text-transform: capitalize;
  ${({ theme }) => theme.typography.subTitleSmall};
  &.custom-tag {
    padding: 3px 5px;
    background-color: ${({ customStyle }) => customStyle?.bgColor};
    border: ${({ customStyle }) => customStyle?.borderColor && `1px solid ${customStyle.borderColor}`};
    color: ${({ customStyle }) => customStyle?.titleColor};
    ${({ theme }) => theme.typography.subTitleSmall};
    font-weight: ${({ customStyle }) => customStyle?.fontWeight};
    opacity: ${({ customStyle }) => customStyle?.opacity};
    font-size: ${({ customStyle }) => customStyle?.fontSize};
  }

  &.featured {
    background-color: #ffeed7;
    border: 1px solid #ffe4c0;
    color: #fea838;
  }

  &.offer {
    background-color: #ffeed7;
    border: 1px solid #ffe4c0;
    color: #fea838;
  }

  &.new {
    background-color: #e6f8ff;
    border: 1px solid #cee9f3;
    color: #6dcff6;
  }

  &.bestseller {
    background-color: #dff9e5;
    border: 1px solid #c3e7ce;
    color: #68a677;
  }
`;

const OFFER = 'offer';
const OFFERS = 'offers';

const TagName: React.FC<TagNameProps> = ({
  index,
  tag = '',
  handleTagClick,
  offersCount,
  showMultipleTag,
  customStyle,
}: TagNameProps) => {
  let updatedTagObj: TagObject | string = tag;

  if (typeof tag === 'string') {
    updatedTagObj = {
      name: tag || '',
      id: generateId(tag),
    };
  } else if (updatedTagObj === null || !(updatedTagObj as TagObject).name) {
    return null;
  }

  const { name = '', id = '' } = (updatedTagObj as TagObject);

  let updatedName = name;

  if (updatedName === OFFER) {
    if (offersCount > 1) {
      updatedName = OFFERS;
    }
  }

  const listKey = `tagItem${index}`;
  const tagClass = (showMultipleTag && Object.keys(customStyle).length)
    ? NEW_TAG_CLASS
    : `${id?.toLowerCase()} ${OLD_TAG_CLASS}`;
  return (
    <Wrapper
      tabIndex={0}
      role="button"
      onClick={() => handleTagClick(updatedName?.toLowerCase() || updatedName)}
      key={listKey}
      className={tagClass}
      customStyle={customStyle}
    >
      {updatedName}
    </Wrapper>
  );
};

export default TagName;
