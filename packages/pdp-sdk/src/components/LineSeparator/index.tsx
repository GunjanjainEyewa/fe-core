import { styled } from '@eyewa/ui-components';
import { hexToRgb } from '@eyewa/ui-components/styles/utils';

export default styled.hr`
  margin: ${({ theme }) => theme.spacing.spacing60} 0;
  border-color: ${({ theme }) => hexToRgb(theme.colors.white, 0.12)};
  height: 1px;
  box-shadow: none;
`;
