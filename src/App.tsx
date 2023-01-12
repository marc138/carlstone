import React, { useState } from 'react';
import * as S from './App.styled';
import Page from './Page';
import { Gallery } from './pages/Gallery';
import { MainPage } from './pages/MainPage';
import { Band } from './pages/Band';
import { Tour } from './pages/Tour';
import {blue, grey } from './utils/colors';
import { Repertoire } from './pages/Repertoire';
import { Contact } from './pages/Contact';
import { Header } from './pages/Header';
import { SideMenu } from './SideMenu';
import { FirstPage } from './pages/FirstPage';

function App(): JSX.Element {
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
      <S.App>
        <Header setIsSideMenuOpen={setIsSideMenuOpen} isSideMenuOpen={isSideMenuOpen}/>
        <MainPage />
        <S.PagesContent>
          {/*<Page numberOfTabSpaces={0} cardColor={grey} title='' id='intro'>
            <FirstPage />
          </Page>*/}
          <Page numberOfTabSpaces={1} cardColor={blue} title='die band' id='info'>
            <Band />
          </Page>
          <Page numberOfTabSpaces={2} cardColor={grey} title='auftritte' id='tour'>
            <Tour />
          </Page>
          <Page numberOfTabSpaces={3} cardColor={blue} title='galerie' id='gallery'>
            <Gallery />
          </Page>
          <Page numberOfTabSpaces={4} cardColor={grey} title='repertoire' id='repertoire'>
            <Repertoire />
          </Page>
          <Page numberOfTabSpaces={5} cardColor={blue} title='kontakt' id='contact' isLastPage={true} >
            <Contact isImpressumOpen={isImpressumOpen} setIsImpressumOpen={setIsImpressumOpen}/>
          </Page>
        </S.PagesContent>
        {isSideMenuOpen && <SideMenu closeSideMenu={() => setIsSideMenuOpen(false)} setIsImpressumOpen={setIsImpressumOpen}/>}
      </S.App>
  );
}

export default App;
