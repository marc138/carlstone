import React from 'react';
import menu from '../resources/svg/menu.svg';
import insta from '../resources/svg/insta.svg';
import * as S from './Header.styled';
import { scrollToTop } from '../utils/jumper';
import { Button } from '../Button';

type HeaderProps = {
  setIsSideMenuOpen: (set: boolean) => void;
  isSideMenuOpen: boolean;
}

export function Header({isSideMenuOpen, setIsSideMenuOpen}: HeaderProps) {
  return (
    <S.HeaderStyled>
      <S.MenuWrapper>
        <Button clickButton={() => setIsSideMenuOpen(!isSideMenuOpen)} src={menu} altText='menu' />
        <S.Heading onClick={() => scrollToTop()}>
          carlstone
        </S.Heading>
        <Button href='https://www.instagram.com/carlstone.music/' target='_blank' src={insta} altText='instagramm' />
      </S.MenuWrapper>
    </S.HeaderStyled>
  );
}