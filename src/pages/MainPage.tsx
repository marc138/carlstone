import React from 'react';
import logo from '../resources/svg/logo_white_big.svg';
import * as S from './MainPage.styled';
import ContentContainer from '../ContentContainer';

export function MainPage() {
  
  return (
    <>
      <S.MainPageStyled>
        <ContentContainer>
          <S.MainPageContent>
            <S.GridWrapper>
              <S.LogoArea>
                <S.LogoWrapper>
                  <S.Logo src={logo} alt='logo' />
                </S.LogoWrapper>
              </S.LogoArea>
              <div>
                live music
              </div>
            </S.GridWrapper>
          </S.MainPageContent>
        </ContentContainer>
      </S.MainPageStyled>
    </>
  )
}