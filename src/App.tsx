import React, { useState } from 'react';
import * as S from './App.styled';
import Page from './Page';
import { Gallery } from './pages/Gallery';
import { Info } from './pages/Info';
import { MainPage } from './pages/MainPage';
import { Band } from './pages/Band';
import { Tour } from './pages/Tour';
import {blue, dark, grey } from './utils/colors';
import { Repertoire } from './pages/Repertoire';
import { Contact } from './pages/Contact';

function App() {
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);

  return (
      <S.App>
        <MainPage setIsImpressumOpen={setIsImpressumOpen}/>
        <div>
          <Page numberOfTabSpaces={0} cardColor={blue} title='die band' id='info'>
            <Band />
          </Page>
          <Page numberOfTabSpaces={1} cardColor={grey} title='auftritte' id='tour'>
            <Tour />
          </Page>
          <Page numberOfTabSpaces={2} cardColor={blue} title='galerie' id='gallery'>
            <Gallery />
          </Page>
          <Page numberOfTabSpaces={3} cardColor={grey} title='repertoire' id='repertoire'>
            <Repertoire />
          </Page>
          <Page numberOfTabSpaces={4} cardColor={blue} title='kontakt' id='contact'>
            <Contact isImpressumOpen={isImpressumOpen} setIsImpressumOpen={setIsImpressumOpen}/>
          </Page>
        </div>
      </S.App>
  );
}

export default App;
