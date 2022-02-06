import React from 'react';
import { Link, Paragraph } from '../App.styled';
import * as S from './Contact.styled';

type ContactProps = {
  isImpressumOpen: boolean;
  setIsImpressumOpen: (set: boolean) => void;
}

export function Contact({ isImpressumOpen, setIsImpressumOpen }: ContactProps) {
  return (
    <S.ContactStyled>
      <S.ContactWrapper>
        <Paragraph>
          Du suchst Livemusik für dein nächstes Event?
          Wir spielen zu viert oder auch in kleinerer Besetzung für zwei bis vier Stunden und bringen unsere eigene Soundanlage mit.
          Nimm gerne Kontakt mit uns auf, um ganz unverbindlich eine Buchung anzufragen. Am besten direkt an unsere Mailadresse:
        </Paragraph>
        <Paragraph>
          <Link href='mailto:info@carlstone.de'>info@carlstone.de</Link>
        </Paragraph>
        <S.ImpressumStyled>
          <S.ImpressumHead onClick={() => setIsImpressumOpen(!isImpressumOpen)}>
            impressum {isImpressumOpen ? 'schließen' : 'öffnen'}
          </S.ImpressumHead>
          {isImpressumOpen && <S.ImpressumBody>
            <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
            <h3>Verantwortlicher</h3>
            <p>Marc Hekeler<br />
              M&uuml;llergasse 3<br />
              71384 Weinstadt</p>

            <h3>Kontakt</h3>
              <p><Link href='mailto:info@carlstone.de'>info@carlstone.de</Link></p>
              <p><Link href='mailto:marc.hekeler@gmail.com'>marc.hekeler@gmail.com</Link></p>

            <br />
            <h2>Webdesign & Programmierung</h2>
            <p>Marc Hekeler</p>
            <br />
            <h2>Bilder</h2>
            <ul>
              <li>Privat</li>
              <li>Paul Mang</li>
            </ul>
          </S.ImpressumBody>}
        </S.ImpressumStyled>
      </S.ContactWrapper>
    </S.ContactStyled>)
}