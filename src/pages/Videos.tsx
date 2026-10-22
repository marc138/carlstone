import React from 'react';
import * as S from './Videos.styled';

type Video = {
  id: string;
  title: string;
  portrait?: boolean;
};

const videos: Video[] = [
  {
    id: 'PW4mAz2agXM',
    title: 'Persona Non Grata (Bright Eyes Cover)',
  },
  {
    id: 'kVDnDm3bRtk',
    title: 'Under the Bridge (Red Hot Chili Peppers Cover)',
    portrait: true,
  },
];

export function Videos() {
  return (
    <S.VideosStyled>
      <S.VideosWrapper>
        {videos.map((video) => (
          <S.VideoCard key={video.id} portrait={video.portrait}>
            <S.VideoTitle>{video.title}</S.VideoTitle>
            <S.VideoFrame
              portrait={video.portrait}
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </S.VideoCard>
        ))}
      </S.VideosWrapper>
    </S.VideosStyled>
  );
}