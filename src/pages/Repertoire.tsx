import React from 'react';
import * as S from './Repertoire.styled';

const songs = [
  'Beatles',
  'Betterov',
  'Blink 128',
  'Bright Eyes',
  'Clueso',
  'Danger Dan',
  'Der Nino aus Wien',
  'Eagles',
  'Eels',
  'Elliot Smith',
  'Eric Clapton',
  'Faber',
  'Father John Misty',
  'Foo Fighters',
  'Fortuna Ehrenfeld',
  'John Butler Trio',
  'Johnny Cash',
  'Mumford & Sons',
  'Neil Young',
  'Oasis',
  'Red Hot Chili Peppers',
  'REM',
  'Roy Bianco und die Abbrunzati Boys',
  'Selig',
  'Steiner und Madlaina',
  'Stoppok',
  'The Dead South',
  'The Gaslight Anthem',
  'The Mountain Goats',
  'The Verve',
  'Tom Petty',
  'U2'
];

export function Repertoire() {
  return (
    <S.RepertoireStyled>
      <div>Neben eigenen Songs covern wir unter anderem von diesen Künstlern:
        <ul>
          {songs.map( song => <li>{song}</li>)}
        </ul>
      </div>
    </S.RepertoireStyled>)
}
