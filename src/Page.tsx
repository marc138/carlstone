import React, { ReactNode } from 'react';
import ContentContainer from './ContentContainer';
import * as S from './Page.styled';
import { scrollTo } from './utils/jumper';

type PageProps = {
  children: ReactNode,
  numberOfTabSpaces: number,
  cardColor: string;
  title: string;
  id: string;
  isLastPage?: boolean;
};

function Page({children, numberOfTabSpaces, cardColor, title, id, isLastPage = false}: PageProps) {
  return (
    <S.PageWrapper id={id} isLastPage={isLastPage}>
      <S.PageStyled numberOfTabSpaces={numberOfTabSpaces} cardColor={cardColor}>
        <ContentContainer>
          <S.Card>
            <S.PageHeading onClick={() => scrollTo(id)}>
              <S.CardTitle>
                {title}
              </S.CardTitle>
            </S.PageHeading>
            <S.AutoOverflow>
              {children}
            </S.AutoOverflow>
          </S.Card>
        </ContentContainer>
      </S.PageStyled>
    </S.PageWrapper>
  );
}

export default Page;
