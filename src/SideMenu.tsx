import React from 'react';
import { Button } from './Button';
import close from './resources/svg/close.svg';
import { scrollTo, scrollToTop } from './utils/jumper';
import * as S from './SideMenu.styled';


type SideMenuProps = {
  closeSideMenu: () => void;
  setIsImpressumOpen: (set: boolean) => void;
}
export function SideMenu({closeSideMenu, setIsImpressumOpen}: SideMenuProps) {
  return (
    <>
      <S.BackGround  onClick={() => closeSideMenu()} />
      <S.SideMenuStyled>
        <S.SideMenuWrapper>
          <S.SideMenuTop>
            <Button clickButton={() => closeSideMenu()} src={close} altText='close' />
          </S.SideMenuTop>
          <S.Entry onClick={() => {
            closeSideMenu();
            scrollToTop();
          }}>
            home</S.Entry>
          <S.Entry onClick={() => {
            closeSideMenu();
            scrollTo('info');
          }}>
            die band</S.Entry>
          <S.Entry onClick={() => {
            closeSideMenu();
            scrollTo('gallery');
          }}>
            gallerie</S.Entry>
          <S.Entry onClick={() => {
            closeSideMenu();
            scrollTo('repertoire');
          }}>
            repertoire</S.Entry>
          <S.Entry onClick={() => {
            closeSideMenu();
            scrollTo('tour');
          }}>
            auftritte</S.Entry>
          <S.Entry onClick={() => {
            closeSideMenu();
            scrollTo('contact');
          }}>
            kontakt</S.Entry>
          <S.LastEntry onClick={() => {
            setIsImpressumOpen(true);
            closeSideMenu();
            scrollTo('contact');
          }}>
            impressum</S.LastEntry>
        </S.SideMenuWrapper>
      </S.SideMenuStyled>
    </>
  )
}