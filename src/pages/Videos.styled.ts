import styled from 'styled-components';
import {white } from '../utils/colors';

type VideoCardProps = {
  portrait?: boolean;
};

export const VideosStyled = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const VideosWrapper = styled.div`
  max-width: 800px;
  width: 100%;
`;

export const VideoCard = styled.div<VideoCardProps>`
  margin-bottom: 24px;
  max-width: ${props => props.portrait ? '360px' : '100%'};
  margin-left: ${props => props.portrait ? 'auto' : '0'};
  margin-right: ${props => props.portrait ? 'auto' : '0'};
`;

export const VideoTitle = styled.div`
  color: ${white};
  font-size: 16px;
  margin-bottom: 8px;
`;

export const VideoFrame = styled.iframe<{ portrait?: boolean }>`
  width: ${props => props.portrait ? '270px' : '100%'};
  height: ${props => props.portrait ? '480px' : 'auto'};
  aspect-ratio: ${props => props.portrait ? 'auto' : '16 / 9'};
  border-radius: 4px;
  border: none;
`;
