// libs
import React, { memo } from 'react';
import { styled } from '@nykaa/ui-components';

// styles
const Container = styled.div`
  min-height: 100vh;
  position: relative;
`;

const Img = styled.div`
  width: 100%;
  padding-top: 133.33%;
  background: #f4f4f4;
`;
const Title = styled.div`
  height: 20px;
  width: 160px;
  background: #f4f4f4;
  margin: 30px 10px 10px;
`;

const SubTitle = styled.div`
  height: 18px;
  width: calc(100% - 16px);
  background: #f4f4f4;
  margin: 10px auto 15px auto;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
  padding: 5px;
  bottom: 0;
  width: 100%;
`;

const Button = styled.div`
  text-transform: uppercase;
  height: 45px;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.typography.type240};
  position: fixed;
  background: #888;
  bottom: 0;
  width: 100%;
`;

const ExtraHeight = styled.div`
  height: 2800px;
`;


// Constants
const BUTTON_TEXT = 'Add to bag';

function Placeholder() {
  return (
    <Container>
      <Img />
      <Title />
      <SubTitle />
      <ButtonWrapper>
        <Button>{BUTTON_TEXT}</Button>
      </ButtonWrapper>
      <ExtraHeight />
    </Container>
  );
}

export default memo(Placeholder);
