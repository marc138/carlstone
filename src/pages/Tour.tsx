import React from 'react';
import { Link } from '../App.styled';
import * as S from './Tour.styled';

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
  hide?: boolean;
}

const tourDates: TourDate[] = [

  {
    date: '04.05.',
    link: {
      link: 'http://www.weinbau-sigle.de/',
      name: 'Weinbau Sigle',
    },
    heading: 'Besengarten',
    description: 'Ab ca. 18:30 bei %link% im Besengarten in Großheppach',
  },
  {
    date: '17.06.',
    link: {
      link: 'https://www.maier-weingut.de/veranstaltungen/',
      name: 'Weingut Maier',
    },
    heading: 'Wein.Afterwork im %link%',
    description: 'Ab ca. 18:00 im %link% in Schwaikheim',
  },
  {
    date: '27.06.',
    link: {
      link: 'https://weingut-klopfer.de/veranstaltung/ausschank-vinothek-am-steingrueble-69/',
      name: 'Weingut Klopfer',
    },
    heading: 'Ausschank Vinothek am Steingrüble',
    description: 'Ab ca. 17:30 im %link% in Großheppach',
  },
  {
    date: '18.07.',
    link: {
      link: 'https://weingut-idler.de/',
      name: 'Weingut Idler',
    },
    heading: 'Sommer-zeit %link%',
    description: 'Ab ca. 18:00 im %link% Strümpfelbach',
  },
  {
    date: '27.07.',
    link: {
      link: 'https://maps.app.goo.gl/XiCTQ6ipqRrG2k8JA',
      name: 'Pferdehof Diakonie Stetten',
    },
    heading: '50-jähriges Jubiläum %link%',
    description: 'Am Abend auf dem %link%',
  },
  {
    date: '04.08.',
    link: {
      link: 'http://rohrbronn.de/veranstaltungen/',
      name: 'Rohrbronn',
    },
    heading: 'Hocketse %link%',
    description: 'Von 15:30 bis 19:30 in %link%',
  },
  {
    date: '24.12.',
    link: {
      link: 'https://www.zum-gretle.de/',
      name: 'Gretle',
    },
    heading: 'Scheinheiliger Vormittag im %link%',
    description: 'Ab 11:00 im Gasthaus %link% Strümpfelbach',
  },
];

export function Tour(): JSX.Element {
  return (
    <S.TourStyled>
      <S.TourWrapper>
        <S.Heading>2024</S.Heading>
        <S.TableWrapper>
          {tourDates.map((tourDate, index) => {
            return !tourDate.hide && (
              <>
                {index !== 0 && <S.Line/>}
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
            );
          })}
        </S.TableWrapper>
      </S.TourWrapper>
    </S.TourStyled>
    )
}

/*


  {
    date: '25.06.',
    link: {
      link: 'https://weingut-idler.de/',
      name: 'Weingut Idler',
    },
    heading: 'Sommerausschank %link%',
    description: 'Ab ca 18:00 im %link% Strümpfelbach',
  },
  {
    date: '26.08.',
    link: {
      link: 'https://www.kuhnle-neue-scheuer.de/',
      name: 'Kuhnle Neue Scheuer',
    },
    heading: 'Sommerfest im Besa %link%',
    description: 'Den ganzen Abend in Endersbach bei %link%',
  },
  {
    date: '08.09.',
    link: {
      link: 'https://zamma-geradstetten.de/',
      name: '[zamma]',
    },
    heading: 'Open Air im %link%',
    description: 'Ab 19:00 im %link% Geradstetten',
  },
  {
    date: '12.09.',
    link: {
      link: 'https://www.maier-weingut.de/veranstaltungen/',
      name: 'Weingut Maier',
    },
    heading: 'Wein.Afterwork',
    description: 'Beim letzen Wein.Afterwork im %link% in Schwaikheim',
  },
  {
    date: '16.09.',
    link: {
      link: 'https://www.mannschreck-weine.com/',
      name: 'Mannschreck Weine',
    },
    heading: 'Nacht der Keller',
    description: 'Den ganzen Abend im Keller von %link% in Strümpfelbach',
  },
  {
    date: '17.09.',
    link: {
      link: 'http://www.weinfreunde-struempfelbach.de/',
      name: 'Weinfreunde Strümpfelbach',
    },
    heading: 'Nacht der Keller',
    description: 'Mit kleiner Besetzung den ganzen Abend im Keller der %link% in Strümpfelbach',
  },
  {
    date: '23.10.',
    link: {
      link: 'https://www.zum-gretle.de/',
      name: 'Gretle',
    },
    heading: 'Hoffest im %link%',
    description: 'Traditioneller Auftritt im traditionellen Gasthaus %link% Strümpfelbach',
  },

 */
