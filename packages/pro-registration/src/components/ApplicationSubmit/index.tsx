import React from 'react';
import { styled } from '@eyewa/ui-components';
import Button, { KIND, SHAPE, SIZE } from '@eyewa/ui-components/Button';
import {
  ALREADY_REGISTERED,
  APPLICATION_SUBMITTED,
  BUTTON_TEXT,
  THANKS_FOR_REGISTER,
} from '../../constants/applicationSubmit';
import SubmitIcon from '../../icons/submitIcon';


interface Prop {
  onClick: () => void;
}

const Container = styled.section`
  padding: ${({ theme }) => theme.spacing.spacing240} ${({ theme }) => theme.spacing.spacing80};
  text-align: center;
`;

const StyledIcon = styled.div`
  svg {
    width: 196px;
    height: 196px;
  }
`;

const Header = styled.div`
  ${({ theme }) => theme.typography.titleLarge};
  color: ${({ theme }) => theme.colors.surfaceInverse};
  padding-top: ${({ theme }) => theme.spacing.spacing120};
  padding-bottom: ${({ theme }) => theme.spacing.spacing80};
`;

const Register = styled.div`
  ${({ theme }) => theme.typography.bodyLarge};
  color: ${({ theme }) => theme.colors.surfaceInverse10};
`;

const Submitted = styled.div`
  ${({ theme }) => theme.typography.bodyLarge};
  color: ${({ theme }) => theme.colors.surfaceInverse10};
  margin: ${({ theme }) => theme.spacing.spacing240} 0;
`;


const ApplicationSubmit: React.FunctionComponent<Prop> = ({ onClick }: Prop) => (
  <Container>
    <StyledIcon>
      <SubmitIcon />
    </StyledIcon>
    <Header>{APPLICATION_SUBMITTED}</Header>
    <Register>{THANKS_FOR_REGISTER}</Register>
    <Submitted>{ALREADY_REGISTERED}</Submitted>
    <Button
      kind={KIND.primary}
      shape={SHAPE.default}
      fullWidth
      size={SIZE.medium}
      onClick={() => onClick()}
    >
      {BUTTON_TEXT}
    </Button>
  </Container>
);

export default ApplicationSubmit;
