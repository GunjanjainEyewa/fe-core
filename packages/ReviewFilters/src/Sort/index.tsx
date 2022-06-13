import React from 'react';
import { styled } from '@eyewa/ui-components';
import Icon from './icon';


interface Option {
  isSelected?: boolean;
  id?: string;
  text?: string;
}

interface SortProps {
  options: Option[],
  openSort: () => void;
}
const Box = styled.div`
  padding: 15px;
  text-align: center;
  flex: 1;
`;

const SortBox = styled.div`
  &:focus {
    outline: none;
  }
`;

const Text = styled.span`
  margin-left: 4px;
  ${({ theme }) => theme.typography.subTitleMedium};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-transform: capitalize;
`;
const Sort = ({ options, openSort }: SortProps) => {
  const selectedSort: Option = options.find((option: Option) => option.isSelected) || {};
  return (
    <Box>
      <SortBox
        onClick={openSort}
        role="button"
        tabIndex={0}
      >
        <i>
          <Icon />
        </i>
        <Text>
          {selectedSort.text}
        </Text>
      </SortBox>
    </Box>
  );
};

export default Sort;
