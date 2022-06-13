/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import styled from '../../styles/styled';
import Button from '../../Button';

import {
  Props,
} from '../types';

import {
  getBottomLineStyles,
  getStyles,
  getLabelStyles,
  getTextStyles,
  getPreTextStyles,
  getSuffixTextStyles,
  getContainerStyles,
  getSupportiveTextStyles,
  getIcon,
  getPlaceholderStyle,
  getHoverStyle,
} from './helpers';


import { VARIANT, STATE } from '../constants';


const Label = styled.span<Props>`
  ${(props) => {
    const {
      theme,
      state,
      variant,
      disabled,
    } = props;

    const style = getLabelStyles({
      variant,
      state,
      theme,
      disabled,
    });


    return {
      ...style,
    };
  }}

`;

// const Label = styled.div`
//   margin-bottom: 4px;
//   ${(props) => {
//     const {
//       theme,
//     } = props;

//     const style = getTitleStyles({ theme });


//     return {
//       ...style,
//     };
//   }}
// `;

const Wrapper = styled.div<Props>`
  position: relative;
  margin: 0;
  border: none;
  text-decoration: none;
  overflow: hidden;
  display: flex;
    ${(props) => {
    const {
      theme,
      state,
      variant,
      disabled,
    } = props;

    const style = getStyles({
      theme,
      state,
      variant,
      disabled,
    });


    return {
      ...style,
    };
  }}
  button {
    ${(props) => {
    const {
      variant,
    } = props;

    const style = {
      margin: (variant === VARIANT.compact) ? ('8px 12px 8px 0') : ('12px 12px 12px 0'),
    };

    return {
      ...style,
    };
  }}
    background-color: inherit;
    padding-left: 0;
    &:hover::before {
      content: none;
    }
  }
  &:focus {
    box-shadow: 0 0 0 2px   ${({ theme }) => theme.colors.info};
  }
  &:hover {
    background: ${(props) => {
    const {
      state,
      theme,
      disabled,
    } = props;

    return getHoverStyle({ state, theme, disabled });
  }}
};

 
`;
const BottomLine = styled.span<Props>`
  position: absolute;
  bottom: 0;
  width: 100%;
  ${(props) => {
    const {
      theme,
      state,
      disabled,
    } = props;

    const style = getBottomLineStyles({ state, theme, disabled });


    return {
      ...style,
    };
  }}

`;

const Container = styled.div<Props>`
  margin: 6px 12px;
  position: relative;
  width: 100%;
  ${(props) => {
    const {
      theme,
      icon,
    } = props;

    const style = getContainerStyles({ icon, theme });


    return {
      ...style,
    };
  }}
`;
const Input = styled.input<Props>`
  ${(props) => {
    const {
      theme,
      state,
      prefixText,
      disabled,
    } = props;

    const style = getTextStyles({
      prefixText,
      state,
      theme,
      disabled,
    });


    return {
      ...style,
    };
  }}
  ::placeholder {
    ${(props) => {
    const {
      theme,
    } = props;

    const style = getPlaceholderStyle({ theme });


    return {
      ...style,
    };
  }}
  }
`;
const PrefixText = styled.span<Props>`
  ${(props) => {
    const {
      theme,
      state,
      disabled,
    } = props;

    const style = getPreTextStyles({ state, theme, disabled });


    return {
      ...style,
    };
  }}
`;
const SuffixText = styled.span<Props>`
  ${(props) => {
    const {
      theme,
      state,
      disabled,
    } = props;

    const style = getSuffixTextStyles({ state, theme, disabled });


    return {
      ...style,
    };
  }}
`;
const Icon = styled.div<Props>`
  ${(props) => {
    const {
      variant,
    } = props;

    const style = {
      margin: (variant === VARIANT.compact) ? ('8px 12px') : ('12px'),
    };


    return {
      ...style,
    };
  }}
`;

const TrailingIcon = styled.div<Props>`
  ${(props) => {
    const {
      variant,
    } = props;

    const style = {
      margin: (variant === VARIANT.compact) ? ('8px 12px 8px') : ('14px 16.5px 14px'),
    };


    return {
      ...style,
    };
  }}
`;
const InputPrefix = styled.div`
  position: absolute;
  bottom: 0;
`;
const SupportiveContainer = styled.div<Props>`
  height: 20px;
  min-width: 320px;
  padding: 4px 12px 0 12px;
  position: relative;
  svg {
    position: absolute;
    right: 12px;
  }
  ${(props) => {
    const {
      theme,
      state,
      disabled,
    } = props;

    const style = getSupportiveTextStyles({ state, theme, disabled });


    return {
      ...style,
    };
  }}
`;
const LabelWrapper = styled.div`
  height: 16px;
  margin-bottom: 4px;
  margin-left: 2px;
`;
const CompactContainer = styled.div`
  height: 60px;
`;
const Component = (props :Props) => {
  const {
    value,
    state: propState,
    placeholder,
    onChange,
  } = props;
  const [focused, setFocused] = useState(false);
  const [inputText, setInputText] = useState(value || '');
  const handleChange = (e:any) => {
    setInputText(e.target.value);
    if (onChange && typeof onChange === 'function') {
      onChange(e);
    }
  };
  const customProps = { ...props, state: focused ? STATE.focus : propState };
  const {
    label,
    icon,
    prefixText,
    suffixText,
    trailingIcon,
    trailingIconAction,
    inlineAction,
    inlineActionText,
    supportiveText,
    disabled,
    state,
    variant,
  } = customProps;
  const getComponent = () => (
    <>
      <Wrapper {...customProps}>
        {icon && <Icon variant={variant}>{icon}</Icon>}
        <Container
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...customProps}
        >
          <InputPrefix>
            {
            prefixText && (focused || inputText)
            && <PrefixText disabled={disabled}>{prefixText}</PrefixText>
          }
            <Input
              {...customProps}
              onChange={(e: any) => handleChange(e)}
              value={inputText}
              placeholder={(focused ? (!value && placeholder) : '')}
            />
          </InputPrefix>
          {
            (variant !== VARIANT.compact)
              && (
              <Label
                state={((focused || inputText) ? STATE.focus : STATE.default)}
                disabled={disabled}
              >
                {label}
              </Label>
              )
          }
          {
            suffixText
              && (!trailingIcon && !inlineActionText)
              && (focused || inputText) && <SuffixText disabled={disabled}>{suffixText}</SuffixText>
          }
        </Container>
        {
          (!inlineActionText && trailingIcon)
            && (
            <TrailingIcon
              variant={variant}
              onClick={trailingIconAction}
            >
              {trailingIcon}
            </TrailingIcon>
            )
        }
        {
          inlineActionText && inlineAction && (
          <Button
            kind="tertiary"
            size="small"
            shape="default"
            onClick={inlineAction}
            disabled={(inputText && (state !== STATE.focus)) ? false : (!focused)}
          >
            {inlineActionText}
          </Button>
          )
       }
        <BottomLine
          state={((focused && (state !== STATE.error)) ? STATE.focus : state)}
          disabled={disabled}
        />
      </Wrapper>
      {supportiveText && (focused || inputText || disabled) && (
      <SupportiveContainer {...customProps}>
        {supportiveText}
        {
         (!disabled) && getIcon(state)
        }
      </SupportiveContainer>

      )}
    </>

  );
  if (variant === VARIANT.compact) {
    return (
      <CompactContainer>
        <LabelWrapper>
          <Label
            state={((focused || inputText) ? STATE.focus : STATE.default)}
            variant={variant}
          >
            {label}
          </Label>
        </LabelWrapper>

        {
          getComponent()
        }
      </CompactContainer>
    );
  }
  return getComponent();
};

export default Component;
