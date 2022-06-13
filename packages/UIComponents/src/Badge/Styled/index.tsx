import React from 'react';
import { VARIANT, MAX_NUMBER } from '../constants';
import styled from '../../styles/styled';
import { Props } from '../types';
import {
  getBackGroundColor,
  getBorder,
  getBorderRadius,
  getColor,
  getFontStyles,
  getSizing,
} from './helpers';
import StyledIcon from './icon';

const BadgeContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  ${(props) => {
    const {
      theme,
      variant,
      kind,
      content,
    } = props;

    const background = getBackGroundColor({ kind, variant, theme });
    const borderRadius = getBorderRadius({ variant, theme });
    const fontStyles = getFontStyles({ variant, theme, content });
    const sizing = getSizing({ variant, theme });
    const color = getColor({ variant, kind, theme });
    const border = getBorder({ variant, theme });

    return {
      ...background,
      ...borderRadius,
      ...border,
      ...fontStyles,
      ...sizing,
      color,
    };
  }}
`;

const StyledBadge: React.FunctionComponent<Props> = ({ ...props }: Props) => {
  const { content, variant, withIcon } = props;

  const labelContent = () => (
    <>
      {withIcon && <StyledIcon {...props}>{ withIcon }</StyledIcon>}
      {content}
    </>
  );

  const numberContent = () => (content && content > MAX_NUMBER ? ':)' : content);

  return (
    <BadgeContainer {...props}>
      {(variant === VARIANT.label) && labelContent()}
      {(variant === VARIANT.number) && numberContent()}
    </BadgeContainer>
  );
};

export default StyledBadge;
