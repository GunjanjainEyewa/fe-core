import React from 'react';
import { TagObject, TagComponent, NewTags } from '../../types/tags';

interface TagsProps {
  tags: Array<string | TagObject>;
  handleTagClick?: (tagName: string) => void;
  offersCount?: number;
  showMultipleTag: boolean;
  newTagsStyle?: NewTags[];
  Component: React.FC<TagComponent>;
  defaultColor?: boolean;
}

const Tags: React.FC<TagsProps> = ({
  tags = [],
  offersCount,
  handleTagClick,
  showMultipleTag,
  newTagsStyle,
  Component,
  defaultColor = false,
}: TagsProps) => {
  if (!Array.isArray(tags)) {
    return null;
  }
  let sortedTags = tags;
  if (!showMultipleTag) {
    sortedTags = tags.sort();
  }
  if (!sortedTags?.length || !Component) return null;

  return (
    <>
      {
        sortedTags.map((tag: (string | TagObject), index: number) => (
          <Component
            index={index}
            customStyle={newTagsStyle?.[index]}
            showMultipleTag={showMultipleTag}
            tag={tag}
            handleTagClick={handleTagClick}
            offersCount={offersCount}
            defaultColor={defaultColor}
          />
        ))
      }
    </>
  );
};

export default Tags;
