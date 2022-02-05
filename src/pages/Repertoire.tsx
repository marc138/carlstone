import React from 'react';
import * as S from './Repertoire.styled';

const songs = [
  'All the small things - Blink 128',
  'Angels - Robbie Williams',
  'Chicago - Clueso',
  'Das schöne Leben - Steiner und Madlaina',
  'Dear Mr. President - P!nk',
  'Desparado - Eagles',
  'Don‘t look back in Anger - Oasis',
  'Folsom Prison Blues - Johnny Cash',
  'Free Fallin - Tom Petty',
  'Great Expectations - The Gaslight Anthem',
  'Heart of Gold - Neil Young',
  'Hotel california - Eagles',
  'House of the rising sun - Animals',
  'I will wait - Mumford & Sons',
  'In Paris brennen Autos - Faber',
  'Jolene - Dolly Parton',
  'Knockin on heavens door - Bob Dylan',
  'Let it be - Beatles',
  'Mr Brightside - The Killers',
  'Mr Tillman - Father John Misty',
  'Riptide - Vance Joy',
  'Sweet child o mine - Guns n roses',
  'Tanz - Stoppok',
  'Times like these - Foo Fighters',
  'Under the Bridge - Red Hot Chili Peppers',
  'Van Diemans Land - U2',
  'Vincent - Sarah Connor',
  'Wonderful tonight - Eric Clapton',
  'Wonderwall - Oasis',
  'Wish you were here - Pink Floyd',
];

export function Repertoire() {
  return (
    <S.RepertoireStyled>
      <div>Einige unserer Cover-Songs:
        <ul>
          {songs.map( song => <li>{song}</li>)}
        </ul>
      </div>
    </S.RepertoireStyled>)
}