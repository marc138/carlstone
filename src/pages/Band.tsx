import React, { useState } from 'react';
import band from '../resources/images/band.jpg';
import marcImg from '../resources/images/marc.jpg';
import marcelImg from '../resources/images/marcel.jpg';
import juliImg from '../resources/images/juli.jpg';
import maxImg from '../resources/images/max.jpg';
import amps from '../resources/images/amps.jpg';
import { scrollTo } from '../utils/jumper';
import * as S from './Band.styled';
import {Link, Paragraph } from '../App.styled';

type Member = {
  name: string;
  firstName: string;
  secondName: string;
  image: string;
  instrument: string;
  since: string;
}

type Band = {
  name: string;
  image: string;
  description: string;
}

type Selectable = Band | Member;

const carlstone: Band = {
  name: 'carlstone',
  image: band,
  description: 'Nachhaltige und handgemachte Live-Musik seit 2018.',
}

const history: Band = {
  name: 'mehr',
  image: amps,
  description: 'kurze geschichte',
}

const marc: Member = {
  name: 'marc',
  firstName: 'Marc',
  secondName: 'Hekeler',
  image: marcImg,
  instrument: 'Gesang, Akustikgitarre, E-Gitarre, Mandoline, Mundharmonika, Songwriting',
  since: '2018',
}

const marcel: Member = {
  name: 'marcel',
  firstName: 'Marcel',
  secondName: 'Lenthe',
  image: marcelImg,
  instrument: 'Cajon, Bass',
  since: '2018',
}

const juli: Member = {
  name: 'juli',
  firstName: 'Julian',
  secondName: 'Fauth',
  image: juliImg,
  instrument: 'Bass, Cajon',
  since: '2019',
}

const max: Member = {
  name: 'max',
  firstName: 'Max',
  secondName: 'Heller',
  image: maxImg,
  instrument: 'Keys',
  since: '2021',
}

const members = [marc, marcel, juli, max];

const selectables = [carlstone, ...members, history];

type MemberSelectorProps = {
  memberName: string;
  onClick: () => void;
  isSelected: boolean;
}

function MemberSelector({memberName, onClick, isSelected}: MemberSelectorProps) {
  return (
    <S.MemberSelector isSelected={isSelected} onClick={onClick}>{memberName}</S.MemberSelector>
  );
}

export function Band() {
  const [selected, setSelected] = useState<Selectable>(carlstone);

  return (
    <S.BandStyled>
      <S.MemberSelectorContainer>
        {selectables.map( selectable => <MemberSelector isSelected={selectable === selected} memberName={selectable.name} onClick={() =>setSelected(selectable)}/>)}
      </S.MemberSelectorContainer>
      <S.MemberContainer>
        <S.ImageSide>
          <S.Image src={selected.image} alt={selected.name} />
        </S.ImageSide>
        <S.DescriptionSide>
          {selected === carlstone && <S.Band>
              <S.Top>{selected.name}</S.Top>
              <Paragraph>{selected.description}</Paragraph>
              <Paragraph>Wir sind <Link onClick={() =>setSelected(marc)}>{marc.firstName} {marc.secondName}</Link>
                  , <Link onClick={() =>setSelected(marcel)}>{marcel.firstName} {marcel.secondName}</Link>
                  , <Link onClick={() =>setSelected(juli)}>{juli.firstName} {juli.secondName}</Link>
                {' und '} <Link onClick={() =>setSelected(max)}>{max.firstName} {max.secondName}</Link>.
                  Wir kommen aus Weinstadt und machen regelmäßig in Weinstadt und Umgebung gemütliche Livemusik.
                  Einige unserer Auftritte sind <Link onClick={() => scrollTo('tour')}>hier</Link> zu finden.
                  Man kann uns übrigens auch <Link onClick={() => scrollTo('contact')}>buchen</Link>!
              </Paragraph>
              <Paragraph>
                  Wir spielen eher ruhige Musik mit Akustikgitarre oder entspannter E-Gitarre, E-Piano, Cajon und Bass.
                  Dabei suchen wir uns querbeet aus, worauf wir Lust haben. <Link onClick={() => scrollTo('repertoire')}>Unser Repertoire</Link> reicht
                  von aktuellem Indie-Pop, über Cover von Singer-Songwriter-Klassikern, bis hin zu einigen selbst geschriebenen Titeln.
              </Paragraph>
              <Paragraph />
          </S.Band> }
          {selected === history && <S.Band>
              <S.Top>{selected.name}</S.Top>
              <Paragraph>
                  Marcel und Marc haben sich bereits 2018 für einen ersten Auftritt als carlstone zusammengetan.
                  2019 waren es dann schon drei Auftritte, wobei zu Weihnachten im Gretle Juli dazu gekommen ist.
                  Trotz Pandemie konnten wir dann 2020 über den Sommer schon ein paar mehr Auftritte spielen.
                  Seit Sommer 2021 verstärkt uns außerdem noch Max am E-Piano. In diesem Jahr traten wir regelmäßig auf:
                  Mehrfach im Gretle in Strümpfelbach, in der Kelter Strümpfelbach, auf privaten Feiern oder auch in Plochingen auf dem Marktplatz.
              </Paragraph>
              <Paragraph />
          </S.Band> }
          {(selected === marc || selected === marcel || selected === juli || selected === max) && <S.Member>
              <S.Top>{selected.firstName}&nbsp;{selected.secondName}</S.Top>
              <Paragraph>{selected.instrument}</Paragraph>
              <Paragraph>Ist bei carlstone am Start seit {selected.since}.</Paragraph>
          </S.Member> }
        </S.DescriptionSide>
      </S.MemberContainer>
    </S.BandStyled>)
}