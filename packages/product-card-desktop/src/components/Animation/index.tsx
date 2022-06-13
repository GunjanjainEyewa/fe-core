import { styled } from '@eyewa/ui-components';

export const ProgressStrip: any = styled.button`
  &.progress-striped {
    background: ${({ theme }) => theme.colors.primary30};
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-size: 40px 40px;
    animation: progress-bar-stripes 0.5s linear infinite;
  }
  @keyframes progress-bar-stripes {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 40px 0;
    }
  }
`;

export const AnimatedLoader: any = styled.div`
  display: block;

  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0
    }
    100% {
      background-position: 468px 0
    }
  }
  &.client {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background-size: 800px 104px;
    position: relative;
  }
`;
