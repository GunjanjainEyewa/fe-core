import styled from '../../styles/styled';
import { Props } from '../types';

const StyledSvg = styled.svg<Props>`

  ${(props) => {
    const {
      size,
      color,
    } = props;

    return {
      display: 'inline-block',
      fill: color,
      color,
      height: size,
      width: size,
    };
  }}

`;

export default StyledSvg;
