import React, { useState } from 'react';
import logo from '../resources/svg/logo_white_big.svg';
import * as S from './MainPage.styled';
import ContentContainer from '../ContentContainer';
import { Header } from './Header';
import { SideMenu } from '../SideMenu';

type MainPageProps = {
  setIsImpressumOpen: (set: boolean) => void;
}

export function MainPage({setIsImpressumOpen}: MainPageProps) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  
  return (
    <>
      <S.MainPageStyled>
        <ContentContainer>
          <Header setIsSideMenuOpen={setIsSideMenuOpen} isSideMenuOpen={isSideMenuOpen}/>
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
      {isSideMenuOpen && <SideMenu closeSideMenu={() => setIsSideMenuOpen(false)} setIsImpressumOpen={setIsImpressumOpen}/>}
    </>
  )
}