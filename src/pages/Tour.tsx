import React from 'react';
import { Link } from '../App.styled';
import * as S from './Tour.styled';
import {dark, grey, white } from './../utils/colors';

function openLink(link: string) {
  return () => window.open(link, '_blank');
}

export function Tour() {
  return (
    <S.TourStyled>
      <S.TourWrapper>
        <S.Heading>2022</S.Heading>
        <S.TableWrapper>
          <S.TableStyled>
            <S.TBody>
              <S.TR onClick={openLink('https://www.kuhnle-neue-scheuer.de/')}>
                <S.TD>05.03</S.TD>
                <S.TD>Straßenmusik im Besa</S.TD>
                <S.TD>Ab 16:00 bei <Link>Kuhnle Neue Scheuer</Link></S.TD>
              </S.TR>
              <S.TR>
                <S.TD>21.06</S.TD>
                <S.TD>Fête de la Musique</S.TD>
                <S.TD>Vor der Kelter Strümpfelbach</S.TD>
              </S.TR>
              <S.TR onClick={openLink('https://weingut-idler.de/')}>
                <S.TD>25.06</S.TD>
                <S.TD>Sommer Ausschank Weinugt Idler</S.TD>
                <S.TD>Ab ca 18:00 im <Link >Weingut Idler</Link></S.TD>
              </S.TR>
              <S.TR onClick={openLink('https://zamma-geradstetten.de/')}>
                <S.TD>08.09</S.TD>
                <S.TD>Open Air im [zamma]</S.TD>
                <S.TD>Ab 19:00 im <Link>[zamma]</Link> Geradstetten</S.TD>
              </S.TR>
              <S.TR onClick={openLink('https://www.zum-gretle.de/')}>
                <S.TD>03.10</S.TD>
                <S.TD>Weißwurstfrühstück im Gretle</S.TD>
                <S.TD>Gasthaus <Link>Zum Gretle</Link> Strümpfelbach</S.TD>
              </S.TR>
              <S.TR onClick={openLink('https://www.tcgeradstetten.de/')}>
                <S.TD>15.10</S.TD>
                <S.TD>50-jähriges Jubiläum Tennisclub Geradstetten</S.TD>
                <S.TD>Clubheim des <Link>TC Geradstetten</Link></S.TD>
              </S.TR>
              <S.TR onClick={openLink('https://www.zum-gretle.de/')}>
                <S.TD isLast={true}>24.12.</S.TD>
                <S.TD isLast={true}>Scheinheiliger Vormittag im Gretle</S.TD>
                <S.TD isLast={true}>Gasthaus <Link>Zum Gretle</Link> Strümpfelbach</S.TD>
              </S.TR>
            </S.TBody>
          </S.TableStyled>
        </S.TableWrapper>
      </S.TourWrapper>
    </S.TourStyled>)
}
