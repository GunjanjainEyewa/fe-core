import React from 'react';
import { styled } from '@nykaa/ui-components';


const ThumbnailVideo = styled.span`
    cursor: pointer;
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    ${({ theme }) => theme.borders.border150};
    border-color: ${({ theme }) => theme.colors.primary};
    margin-top: ${({ theme }) => theme.spacing.spacing20};
    position: relative;

    &:before {
    content: "";
    border-color: transparent;
    display: inline-block;
    ${({ theme }) => theme.borders.border150};
    border-left-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borders.radius10};
    position: absolute;
    top: 7px;
    left: 11px;
    border-width: 6px;
    }
`;

const VideoThumbnail = () => (
  <ThumbnailVideo />
);

export default VideoThumbnail;
