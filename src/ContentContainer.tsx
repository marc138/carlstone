import React, { ReactNode } from 'react';
import * as S from './ContentContainer.styled';

type ContentContainerProps = {
  children: ReactNode,
};

function ContentContainer({children}: ContentContainerProps) {
  return (
      <S.ContentContainer>
        {children}
      </S.ContentContainer>
  );
}

export default ContentContainer;
