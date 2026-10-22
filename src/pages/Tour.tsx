import React from 'react';
import { Link } from '../App.styled';
import replaceString from 'react-string-replace';
import * as S from './Tour.styled';

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
  hide?: boolean;
}

const tourDates2026: TourDate[] = [
  {
    date: '03.06.',
    link: {
      link: 'https://weingut-idler.de/',
      name: 'Weingut Idler',
    },
    heading: 'Sommer-Zeit im %link%',
    description: 'Ab ca. 18:00 im %link% Strümpfelbach',
  },
  {
    date: '29.06.',
    link: {
      link: 'https://www.maier-weingut.de/veranstaltungen/',
      name: 'Weingut Maier',
    },
    heading: 'Wein.Afterwork im %link%',
    description: 'Ab ca. 18:00 im %link% in Schwaikheim',
  },
  {
    date: '27.08.',
    link: {
      link: 'https://www.kuhnle-neue-scheuer.de/',
      name: 'Kuhnle Neue Scheuer',
    },
    heading: 'Sommerfest im Besa %link%',
    description: 'Den ganzen Abend in Endersbach bei %link%',
  },
  {
    date: '07.11.',
    heading: '100-Jähriges Jubiläum der Skizunft Endersbach',
    description: 'Jahnhalle Weinstadt-Endersbach',
  },
  {
    date: '24.12.',
    heading: 'Heiliger Vormittag',
    description: 'Ort wird noch bekannt gegeben',
  },
];

const tourDates2027: TourDate[] = [
  {
    date: '26.05.',
    link: {
      link: 'https://weingut-idler.de/',
      name: 'Weingut Idler',
    },
    heading: 'Sommer-Zeit im %link%',
    description: 'Weingut Idler Strümpfelbach',
  },
  {
    date: '28.05.',
    link: {
      link: 'https://www.weingut-klopfer.de/',
      name: 'Weingut Klopfer',
    },
    heading: '%link%',
    description: 'Weingut Klopfer Großheppach',
  },
  {
    date: '24.12.',
    heading: 'Heiliger Vormittag',
    description: 'Ort wird noch bekannt gegeben',
  },
];

function renderTourDates(dates: TourDate[], startIndex: number) {
  return dates.map((tourDate, i) => {
    const index = startIndex + i;
    return !tourDate.hide && (
      <>
        {index !== 0 && <S.Line/>}
        <S.Entry>
          <S.DateField>{tourDate.date}</S.DateField>
          <S.HeadingField>
            {replaceString(tourDate.heading, '%link%', (match, i) => tourDate.link && (
              <Link onClick={openLink(tourDate.link.link)}>{tourDate.link.name}</Link>
            ))}</S.HeadingField>
          <S.DescriptionField>
            {replaceString(tourDate.description, '%link%', (match, i) => tourDate.link && (
              <Link onClick={openLink(tourDate.link.link)}>{tourDate.link.name}</Link>
            ))}
          </S.DescriptionField>
        </S.Entry>
      </>
    );
  });
}

export function Tour(): JSX.Element {
  return (
    <S.TourStyled>
      <S.TourWrapper>
        <S.Heading>2026</S.Heading>
        <S.TableWrapper>
          {renderTourDates(tourDates2026, 0)}
        </S.TableWrapper>
        <S.Heading>2027</S.Heading>
        <S.TableWrapper>
          {renderTourDates(tourDates2027, tourDates2026.length)}
        </S.TableWrapper>
      </S.TourWrapper>
    </S.TourStyled>
    )
}
