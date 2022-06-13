import React from 'react';
import { TagsComponent } from '@nykaa/product-card-shared';
import { styled } from '@nykaa/ui-components';
import { NewTags, TagObject } from '@nykaa/product-card-shared/types/tags';
import Tag from './index';


interface TagsProps {
  tags: Array<string | TagObject>;
  newTags: NewTags[];
  handleTagClick?: (tagName: string) => void;
  offersCount?: number;
  showMultipleTag: boolean;
  newTagsStyle?: NewTags[];
  defaultColor?: boolean;
}

const Container = styled.div`
  ${({ theme }) => theme.typography.subTitleSmall};
  margin: ${({ theme }) => theme.spacing.spacing40};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
const List = styled.ul`
  padding-left: 0;
  list-style: none;
  margin: 0 0 10px;
  display: flex;
`;
function Tags({
  showMultipleTag = false, tags, offersCount = 0, newTags = [],
}: TagsProps) {
  return (
    <Container>
      <List>
        <TagsComponent
          showMultipleTag={showMultipleTag}
          tags={tags}
          newTagsStyle={newTags}
          offersCount={offersCount}
          Component={Tag}
        />
      </List>
    </Container>
  );
}

export default Tags;
