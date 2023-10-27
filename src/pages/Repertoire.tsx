import React from 'react';
import * as S from './Repertoire.styled';

const songs = [
  'Beatles',
  'Betterov',
  'Blink 128',
  'Bright Eyes',
  'Clueso',
  'Dolly Parton',
  'Eagles',
  'Eels',
  'Eric Clapton',
  'Faber',
  'Father John Misty',
  'Foo Fighters',
  'Fortuna Ehrenfeld',
  'Guns n roses',
  'John Butler Trio',
  'Johnny Cash',
  'Mumford & Sons',
  'Neil Young',
  'Oasis',
  'Red Hot Chili Peppers',
  'REM',
  'Roy Bianco und die Abbrunzati Boys',
  'Steiner und Madlaina',
  'Stoppok',
  'The Dead South',
  'The Gaslight Anthem',
  'The Killers',
  'The Mountain Goats',
  'The Verve',
  'Tom Petty',
  'U2'
];

export function Repertoire() {
  return (
    <S.RepertoireStyled>
      <div>Wir Covern unter anderem von diesen Künstlern:
        <ul>
          {songs.map( song => <li>{song}</li>)}
        </ul>
      </div>
    </S.RepertoireStyled>)
}
