import React from 'react';
import { Link } from '../App.styled';
import * as S from './Tour.styled';
import {dark, grey, white } from './../utils/colors';

const reactStringReplace = require('react-string-replace');

function openLink(link: string) {
  return () => window.open(link, '_blank');
}

type TourDate = {
  date: string;
  link?: {
    link: string;
    name: string;
  };
  heading: string;
  description: string;
}

const tourDates: TourDate[] = [
  {
    date: '05.03',
    link: {
      link: 'https://www.kuhnle-neue-scheuer.de/',
      name: 'Kuhnle Neue Scheuer',
    },
    heading: 'Straßenmusik im Besa',
    description: 'Ab 16:00 bei %link%',
  },
  {
    date: '08.05',
    link: {
      link: 'https://www.hho-stetten.de/',
      name: 'Handharmonika Orchester Stetten',
    },
    heading: 'Muttertagsfest',
    description: 'Ab 19:30 beim %link% in Stetten',
  },
  {
    date: '21.06',
    heading: 'Fête de la Musique',
    description: 'Vor der Kelter Strümpfelbach',
  },
  {
    date: '25.06',
    link: {
      link: 'https://weingut-idler.de/',
      name: 'Weingut Idler',
    },
    heading: 'Sommerausschank %link%',
    description: 'Ab ca 18:00 im %link% Strümpfelbach',
  },
  {
    date: '08.09',
    link: {
      link: 'https://zamma-geradstetten.de/',
      name: 'Weingut Idler',
    },
    heading: 'Open Air im %link%',
    description: 'Ab 19:00 im %link% Geradstetten',
  },
  {
    date: '03.10',
    link: {
      link: 'https://www.zum-gretle.de/',
      name: 'Gretle',
    },
    heading: 'Weißwurstfrühstück im %link%',
    description: 'Ab 11:00 im Gasthaus %link% Strümpfelbach',
  },
  {
    date: '15.10',
    link: {
      link: 'https://www.tcgeradstetten.de/',
      name: 'Tennisclub Geradstetten',
    },
    heading: '50-jähriges Jubiläum %link%',
    description: 'Clubheim des %link%',
  },
  {
    date: '24.12',
    link: {
      link: 'https://www.zum-gretle.de/',
      name: 'Gretle',
    },
    heading: 'Scheinheiliger Vormittag im %link%',
    description: 'Ab 11:00 im Gasthaus %link% Strümpfelbach',
  },
];

export function Tour() {
  return (
    <S.TourStyled>
      <S.TourWrapper>
        <S.Heading>2022</S.Heading>
        <S.TableWrapper>
          {tourDates.map((tourDate, index) =>
            <>
              { index !== 0 && <S.Line/>}
              <S.Entry>
                <S.DateField>{tourDate.date}</S.DateField>
                <S.HeadingField>
                  {reactStringReplace(tourDate.heading, '%link%', (match, i) => tourDate.link && (
                    <Link onClick={openLink(tourDate.link.link)}>{tourDate.link.name}</Link>
                  ))}</S.HeadingField>
                <S.DescriptionField>
                  {reactStringReplace(tourDate.description, '%link%', (match, i) => tourDate.link && (
                    <Link onClick={openLink(tourDate.link.link)}>{tourDate.link.name}</Link>
                  ))}
                </S.DescriptionField>
              </S.Entry>
            </>
          )}
        </S.TableWrapper>
      </S.TourWrapper>
    </S.TourStyled>)
}
