import React from 'react';
import * as S from './Button.styled';

type ButtonProps = {
  clickButton: () => void;
  href?: never;
  target?: never
  src: string;
  altText: string
}

type LinkButtonProps = {
  clickButton?: never;
  href: string;
  target: string
  src: string;
  altText: string
}

export function Button({clickButton, href, target, src, altText}: ButtonProps | LinkButtonProps) {
  if(clickButton) {
    return (
      <S.ButtonStyled onClick={clickButton}>
        <S.Image src={src} alt={altText}/>
      </S.ButtonStyled>
    )
  }

  return (
    <S.ButtonStyled href={href} target={target}>
      <S.Image src={src} alt={altText}/>
    </S.ButtonStyled>
  )
}