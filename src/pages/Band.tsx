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
  photographer?: string;
}

type BandType = {
  name: string;
  image: string;
  description: string;
  photographer?: string;
}

type History = {
  name: string;
  image: string;
  photographer?: string;
}

type Selectable = BandType | Member | History;

const carlstone: BandType = {
  name: 'carlstone',
  image: band,
  description: 'Nachhaltige und handgemachte Live-Musik aus regionalen Produkten seit 2018.',
  photographer: 'Foto: Milena Sprung Fotografie',
}

const history: History = {
  name: 'mehr',
  image: amps,
}

const marc: Member = {
  name: 'marc',
  firstName: 'Marc',
  secondName: 'Hekeler',
  image: marcImg,
  instrument: 'Gesang, Akustikgitarre, E-Gitarre, Mandoline, Mundharmonika, Songwriting',
  since: '2018',
  photographer: 'Foto: Milena Sprung Fotografie',
}

const marcel: Member = {
  name: 'marcel',
  firstName: 'Marcel',
  secondName: 'Lenthe',
  image: marcelImg,
  instrument: 'Cajon, Bass',
  since: '2018',
  photographer: 'Foto: Milena Sprung Fotografie',
}

const juli: Member = {
  name: 'juli',
  firstName: 'Julian',
  secondName: 'Fauth',
  image: juliImg,
  instrument: 'Bass, Cajon',
  since: '2019',
  photographer: 'Foto: Milena Sprung Fotografie',
}

const max: Member = {
  name: 'max',
  firstName: 'Max',
  secondName: 'Heller',
  image: maxImg,
  instrument: 'Keys',
  since: '2021',
  photographer: 'Foto: Milena Sprung Fotografie',
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
          {selected.photographer && <S.Photographer>{selected.photographer}</S.Photographer>}
        </S.ImageSide>
        <S.DescriptionSide>
          {selected === carlstone && <S.Band>
              <S.Top>{selected.name}</S.Top>
              <Paragraph>{(selected as BandType).description}</Paragraph>
              <Paragraph>Wir sind <Link onClick={() =>setSelected(marc)}>{marc.firstName} {marc.secondName}</Link>
                  , <Link onClick={() =>setSelected(marcel)}>{marcel.firstName} {marcel.secondName}</Link>
                  , <Link onClick={() =>setSelected(juli)}>{juli.firstName} {juli.secondName}</Link>
                {' und '} <Link onClick={() =>setSelected(max)}>{max.firstName} {max.secondName}</Link>.
                  Wir kommen aus Weinstadt und treten regelmäßig in den umliegenden Regionen auf.
                  Einige unserer Auftritte sind <Link onClick={() => scrollTo('tour')}>hier</Link> zu finden.
                  Man kann uns übrigens auch <Link onClick={() => scrollTo('contact')}>buchen</Link>!
              </Paragraph>
              <Paragraph>
                  Wir lieben handgemachte Musik, mit Akustikgitarre, E-Gitarre, E-Piano, Cajon und Bass.
                  Wir spielen was wir auch gerne hören: Aktueller Indie-Pop, Singer-Songwriter-Klassiker,
                  ein paar ruhige Rocknummern, ab und zu einen Italo-Schlager, Blues oder Jazz
                  und zwischendurch mal eine selbst geschriebener Titel. <Link onClick={() => scrollTo('videos')}>Hört mal rein.</Link>
              </Paragraph>
              <Paragraph />
          </S.Band> }
          {selected === history && <S.Band>
              <S.Top>{selected.name}</S.Top>
              <Paragraph>
                  Marcel und Marc haben sich bereits 2018 für einen ersten Auftritt als carlstone zusammengetan.
                  2019 waren es dann schon drei Auftritte, an Weihnachten kam Juli am Bass dazu.
                  Trotz Pandemie konnten wir dann 2020 über den Sommer schon ein paar mehr Auftritte spielen.
                  Seit Sommer 2021 verstärkt uns außerdem noch Max am E-Piano. Unsere gemeinsamen musikalischen Wurzeln liegen unter
                  anderem in der Big Band des Remstalgymnasiums. Übers Jahr treten wir regelmäßig auf:
                  Zum Beispiel bei verschiedenen Weingütern im Remstal, am "heiligen Vormittag" oder auf privaten Feiern.
              </Paragraph>
              <Paragraph />
          </S.Band> }
          {selected === marc && <S.Member>
              <S.Top>{marc.firstName}&nbsp;{marc.secondName}</S.Top>
              <Paragraph>{marc.instrument}</Paragraph>
              <Paragraph>Ist bei carlstone am Start seit {marc.since}.</Paragraph>
          </S.Member> }
          {selected === marcel && <S.Member>
              <S.Top>{marcel.firstName}&nbsp;{marcel.secondName}</S.Top>
              <Paragraph>{marcel.instrument}</Paragraph>
              <Paragraph>Ist bei carlstone am Start seit {marcel.since}.</Paragraph>
          </S.Member> }
          {selected === juli && <S.Member>
              <S.Top>{juli.firstName}&nbsp;{juli.secondName}</S.Top>
              <Paragraph>{juli.instrument}</Paragraph>
              <Paragraph>Ist bei carlstone am Start seit {juli.since}.</Paragraph>
          </S.Member> }
          {selected === max && <S.Member>
              <S.Top>{max.firstName}&nbsp;{max.secondName}</S.Top>
              <Paragraph>{max.instrument}</Paragraph>
              <Paragraph>Ist bei carlstone am Start seit {max.since}.</Paragraph>
          </S.Member> }
        </S.DescriptionSide>
      </S.MemberContainer>
    </S.BandStyled>)
}
