import styled from '../../styles/styled';
import { getColor } from './helpers';
import { Props } from '../types';

const StyledIcon = styled.i<Props>`
  margin-right: ${(props) => props.theme.spacing.spacing20};
  svg {
    width: 12px;
    height: 12px;
  }
  svg path {
    fill: ${(props) => {
    const { theme, kind, variant } = props;
    const color = getColor({ variant, kind, theme });
    return color;
  }}
  }
`;

export default StyledIcon;
