import React from 'react';
import { Link } from '../App.styled';
import * as S from './Tour.styled';

export function Tour() {
  return (
    <S.TourStyled>
      <S.TourWrapper>
        <S.Heading>2022</S.Heading>
        <S.TableWrapper>
          <S.TableStyled>
            <S.TBody>
              <S.TR>
                <S.TD>21.06</S.TD>
                <S.TD>Fête de la Musique</S.TD>
                <S.TD>Vor der Kelter Strümpfelbach</S.TD>
              </S.TR>
              <S.TR>
                <S.TD>03.10</S.TD>
                <S.TD>Weißwurstfrühstück im Gretle</S.TD>
                <S.TD>Gasthaus <Link href='https://www.zum-gretle.de/' target='_blank'>Zum Gretle</Link> Strümpfelbach</S.TD>
              </S.TR>
              <S.TR>
                <S.TD>15.10</S.TD>
                <S.TD>50-jähriges Jubiläum Tennisclub Geradstetten</S.TD>
                <S.TD>Clubheim des <Link href='https://www.tcgeradstetten.de/' target='_blank'>TC Geradstetten</Link></S.TD>
              </S.TR>
              <S.TR>
                <S.TD isLast={true}>24.12.</S.TD>
                <S.TD isLast={true}>Scheinheiliger Vormittag im Gretle</S.TD>
                <S.TD isLast={true}>Gasthaus <Link href='https://www.zum-gretle.de/' target='_blank'>Zum Gretle</Link> Strümpfelbach</S.TD>
              </S.TR>
            </S.TBody>
          </S.TableStyled>
        </S.TableWrapper>
      </S.TourWrapper>
    </S.TourStyled>)
}