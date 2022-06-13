import { styled } from '@eyewa/ui-components';

const StyledProIcon: any = styled.i<{ size: number; margin?: boolean; pointer?: boolean}>`
  margin-right: ${(props) => (!props.margin ? (props.theme.spacing.spacing0) : (props.theme.spacing.spacing20))};
  cursor: ${({ pointer }) => (pointer ? 'pointer' : 'default')};
  svg {
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
  }
`;

export default StyledProIcon;
