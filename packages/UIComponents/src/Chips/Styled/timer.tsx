
import React, { useEffect } from 'react';


import styled from '../../styles/styled';


type Props = {
  timer: number;
  onDismiss? : () => void;
};

const Wrapper = styled.div<Props>`
  margin-right: 10px;
  
    position: relative;
    height: 17px;
    width: 17px;
    text-align: center;

  
  
  svg {
    position: absolute;
    right: 0;
    width: 17px;
    height: 17px;
    transform: rotateY(-180deg) rotateZ(-90deg);
  }
  
  svg circle {
    stroke-dasharray: 50px;
    stroke-dashoffset: 0px;
    stroke-linecap: round;
    stroke-width: 1px;
    stroke: ${({ theme }) => theme.colors.primary};
    fill: none;
    animation: countdown ${({ timer }) => timer}s linear infinite forwards;
  }
  
  @keyframes countdown {
    from {
      stroke-dashoffset: 0px;
    }
    to {
      stroke-dashoffset: 50px;
    }
  }

`;


const Number = styled.div`
  color:  ${({ theme }) => theme.colors.white};
  display: inline-block;
  position: relative;
  top: -4px;
 
  ${({ theme }) => theme.typography.bodyXSmall};
`;
const Component = ({ timer, onDismiss }: Props) => {
  useEffect(() => {
    const countdownNumberEl = document.getElementById('countdown-number');
    let countdown = timer;

    countdownNumberEl.textContent = countdown.toString();

    const interval = setInterval(() => {
      if (countdown === 0) {
        clearInterval(interval);
        if (typeof onDismiss === 'function') {
          onDismiss();
          return;
        }
      }
      countdown -= 1;

      countdownNumberEl.textContent = countdown.toString();
    }, 1000);
  });

  return (
    <Wrapper id="countdown" timer={timer}>
      <Number id="countdown-number" />
      <svg>
        <circle r="7" cx="9" cy="9" />
      </svg>
    </Wrapper>
  );
};

export default Component;
