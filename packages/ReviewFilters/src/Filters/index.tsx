import * as React from 'react';
import { styled } from '@eyewa/ui-components';
import { ThemeContext } from './context';
import { FilterProps, ThemeProps } from '../types';


const Wrapper = styled.section`
  padding: 0;
  background-color: ${({ theme }: ThemeProps) => theme.backgroundColor};
`;
const TagList = styled.ul`
  padding: 9px 0 9px 10px;
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  margin: 0;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none !important;
  }
`;
const ListItem = styled.li`
  display: inline-block;
  padding: 6px 12px;
  margin-right: 10px;
  ${({ theme }) => theme.typography.bodyMedium};
  color: #333333;
  border: 1px solid ${({ theme }: ThemeProps) => theme.lightGrey};
  border-radius: 6px;
  &:focus {
    outline: none;
  }
  &.active {
    color: ${({ theme }: ThemeProps) => theme.brandPrimary};
    border: solid 1px ${({ theme }: ThemeProps) => theme.brandPrimary};
    background-color: ${({ theme }: ThemeProps) => theme.backgroundColor};
  }
`;
const Filters: React.FC<FilterProps> = ({ options, handleClick, theme }: FilterProps) => (
  <ThemeContext.Provider value={theme}>
    <Wrapper theme={theme}>
      <TagList>
        {options.map((option) => (
          <ListItem
            tabIndex={0}
            role="button"
            className={option.isSelected ? 'active' : ''}
            onClick={() => handleClick(option.id)}
            theme={theme}
          >
            {option.text}
          </ListItem>
        ))}
      </TagList>
    </Wrapper>
  </ThemeContext.Provider>
);

export default Filters;
