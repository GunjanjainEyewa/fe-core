import React from 'react';
import { styled } from '@nykaa/ui-components';
import { TagsComponent } from '@nykaa/product-card-shared';
import { NewTags } from '@nykaa/product-card-shared/types/tags';
import TagName from './TagName';


const Container = styled.div`
  margin: 14px;
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 1;
  text-transform: uppercase;
  font-weight: 600;
`;

const List = styled.ul`
  margin-left: 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  margin: 0 0 ${({ theme }) => theme.spacing.spacing40};
  li {
    ${({ theme }) => theme.typography.subTitleSmall};
    margin-right: ${({ theme }) => theme.spacing.spacing20};;
    border: none;
    display: inline-block;
    padding: 0 ${({ theme }) => theme.spacing.spacing40};

    &.featured {
      color: #f8649d;
    }

    &.offer {
      color: #fea838;
    }

    &.new {
      color: #6dcff6;
    }

    &.bestseller {
      color:  #68a677;
    }
  }
`;

interface TagsProps {
  tags: string[];
  handleTagClick?: (tagName: string) => void;
  offersCount?: number;
  newTags: NewTags[];
}

const Tags: React.FC<TagsProps> = ({
  tags = [],
  offersCount,
  handleTagClick,
  newTags = [],
}: TagsProps) => {
  if (!Array.isArray(tags)) {
    return null;
  }
  let updatedTags = tags;
  const showMultipleTag = Array.isArray(newTags);
  if (showMultipleTag) {
    updatedTags = newTags.map((tag: NewTags) => tag.title);
  }
  return (
    <Container>
      <List>
        <TagsComponent
          showMultipleTag={showMultipleTag}
          tags={updatedTags}
          newTagsStyle={newTags}
          offersCount={offersCount}
          handleTagClick={handleTagClick}
          Component={TagName}
        />
      </List>
    </Container>
  );
};

export default Tags;
