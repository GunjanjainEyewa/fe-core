// libs
import React, { memo } from 'react';
import { styled } from '@nykaa/ui-components';

// components
import Button from '@nykaa/ui-components/Button';
import BrokenLink from './icons/BrokenLink';

type Kind = '4XX' | '5XX';
export interface Props {
  onBack?: VoidFunction;
  kind?: Kind;
}

// constants
const TEXT = {
  TITLE_5XX: 'Oops! Something went wrong.',
  TITLE_4XX: "Oops! We couldn't find the page you are looking for.",
  INFO: 'The link may be corrupted or the page may have been removed.',
  BACK_LINK_LABEL: 'GO BACK',
};

// styles
const Container = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: ${({ theme }) => theme.spacing.spacing80};
    padding-top: ${({ theme }) => theme.spacing.spacing160};
    padding-bottom: ${({ theme }) => theme.spacing.spacing160};
`;

const Icon = styled(BrokenLink)`
    display: inline-block;
    ${({ theme }) => theme.typography.titleXLarge};
    margin-top: ${({ theme }) => theme.spacing.spacing200};
    margin-bottom: ${({ theme }) => theme.spacing.spacing60};
`;

const Title = styled.p`
    ${({ theme }) => theme.typography.titleMedium};
    margin-bottom: ${({ theme }) => theme.spacing.spacing200};
`;

const Info = styled.p`
    ${({ theme }) => theme.typography.bodySmall};
    margin-bottom: ${({ theme }) => theme.spacing.spacing60};
`;

function ErrorPage({ onBack, kind = '4XX' }: Props) {
  const clickHandler = () => {
    if (onBack) {
      onBack();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <Container>
      <Icon />
      <Title>{kind === '4XX' ? TEXT.TITLE_4XX : TEXT.TITLE_5XX}</Title>
      <Info>{TEXT.INFO}</Info>
      <Button kind="primary" size="medium" shape="default" onClick={clickHandler}>
        {TEXT.BACK_LINK_LABEL}
      </Button>
    </Container>
  );
}

export default memo(ErrorPage);
