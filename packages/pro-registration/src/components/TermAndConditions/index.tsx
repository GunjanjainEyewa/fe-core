import React, { useState } from 'react';
import { styled } from '@eyewa/ui-components';
import Checkbox from '@eyewa/ui-components/Checkbox';
import Button, { KIND, SHAPE, SIZE } from '@eyewa/ui-components/Button';
import Arrow from '../../icons/arrow';
import {
  BUTTON_TEXT,
  CHECKBOX_LABEL,
  CHECKBOX_LABEL_2,
  REGISTRATION_CONTENT_1,
  REGISTRATION_CONTENT_2,
  REGISTRATION_CONTENT_3,
  TERMS_CONDITIONS_CONTENT_1,
  TERMS_CONDITIONS_CONTENT_2,
  TERMS_CONDITIONS_HEADER_1,
  TERMS_CONDITIONS_HEADER_2,
  TERMS_CONDITIONS_HEADER_3,
  TERMS_CONDITIONS_HEADER_4,
  USE_OF_PRODUCT_CONTENT,
  USE_OF_WEBSITE_CONTENT_1,
  USE_OF_WEBSITE_CONTENT_2,
} from '../../constants/termAndCondition';

interface Props {
  email: string;
  phone: string;
  onClick: () => void;
}

const Container = styled.section`
  margin: 0 ${({ theme }) => theme.spacing.spacing80};
  padding-bottom: ${({ theme }) => theme.spacing.spacing80};
`;

const SectionHead = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.spacing80} 0;
`;

const ArrowIcon = styled.div`
  margin-left: ${({ theme }) => theme.spacing.spacing20};
  cursor: pointer;
  svg {
    width: 14px;
    height: 14px;
    margin: 0 ${({ theme }) => theme.spacing.spacing20};
    padding-top: ${({ theme }) => theme.spacing.spacing20};
    transition: transform 0.25s ease-in-out;
  }
  &.expanded svg {
    transform: rotate(180deg);
  }
`;

const OrderedList = styled.ol`
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.25s ease-in-out;
  padding-left: ${({ theme }) => theme.spacing.spacing120};
  border-bottom: ${({ theme }) => {
    const { borders, colors } = theme;
    const { border100 } = borders;
    return `${border100.borderWidth} ${border100.borderStyle} ${colors.surface30}`;
  }};
  margin-bottom: ${({ theme }) => theme.spacing.spacing80};
  li {
    list-style-type: decimal;
    padding-bottom: ${({ theme }) => theme.spacing.spacing80};
    padding-left: ${({ theme }) => theme.spacing.spacing40};
    ${({ theme }) => theme.typography.bodyMedium};
  }
  &.expand {
    max-height: 2000px;
  }
`;

const Title = styled.div`
  ${({ theme }) => theme.typography.titleSmall};
  padding-bottom: ${({ theme }) => theme.spacing.spacing80};
`;

const BoldText = styled.strong`
  margin: 0 ${({ theme }) => theme.spacing.spacing20};
  a {
    color: ${({ theme }) => theme.colors.surfaceInverse};
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const TermAndCondition: React.FunctionComponent<Props> = ({ ...props }: Props) => {
  const { email, phone, onClick } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Container>
      <SectionHead>
        <Checkbox
          checked={isChecked}
          onChangeHandler={(toggle: boolean) => setIsChecked(toggle)}
          label={CHECKBOX_LABEL}
        />
        <ArrowIcon className={isExpanded ? 'expanded' : null} onClick={() => setIsExpanded(!isExpanded)}>
          <strong>{CHECKBOX_LABEL_2}</strong>
          <Arrow />
        </ArrowIcon>
      </SectionHead>
      <OrderedList className={isExpanded ? 'expand' : null}>
        <li>
          <Title>{TERMS_CONDITIONS_HEADER_1}</Title>
          {TERMS_CONDITIONS_CONTENT_1}
          <BoldText>
            <a href={`mailto: ${email}`}>{email}</a>
          </BoldText>
          {TERMS_CONDITIONS_CONTENT_2}
          <BoldText>{phone}</BoldText>
        </li>
        <li>
          <Title>{TERMS_CONDITIONS_HEADER_2}</Title>
          {USE_OF_WEBSITE_CONTENT_1}
          <br />
          {USE_OF_WEBSITE_CONTENT_2}
        </li>
        <li>
          <Title>{TERMS_CONDITIONS_HEADER_3}</Title>
          {REGISTRATION_CONTENT_1}
          <BoldText>
            <a href={`mailto: ${email}`}>{email}</a>
          </BoldText>
          {REGISTRATION_CONTENT_2}
          <BoldText>{phone}</BoldText>
          {REGISTRATION_CONTENT_3}
        </li>
        <li>
          <Title>{TERMS_CONDITIONS_HEADER_4}</Title>
          {USE_OF_PRODUCT_CONTENT}
        </li>
      </OrderedList>
      <Button
        kind={KIND.primary}
        shape={SHAPE.default}
        fullWidth
        size={SIZE.medium}
        disabled={!isChecked}
        onClick={() => onClick()}
      >
        {BUTTON_TEXT}
      </Button>
    </Container>
  );
};

export default TermAndCondition;
