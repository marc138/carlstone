import styled, { css } from 'styled-components';
import { Paragraph, whiteBox } from '../App.styled';
import {grey, white } from '../utils/colors';

export const BandStyled = styled.div`
  align-items: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 8px;
`;

export const MemberSelectorContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  max-width: 800px;
  overflow: auto;
  margin-bottom: 8px;
  padding: 8px 0;
  width: 100%;
`;

type MemberSelectorStyledProps = {
  isSelected: boolean;
}

export const marked = css`
    background-color: ${white};
    color: ${grey};
  `

export const MemberSelector = styled.div<MemberSelectorStyledProps>`
  ${whiteBox}
  cursor: pointer;
  flex: 1 0 80px;
  margin: 0 8px;
  padding: 2px;
  text-align: center;
  
  ${({isSelected}) => isSelected && marked}
  :hover {${marked}}
`;

export const MemberContainer = styled.div`
  flex-grow: 0;
  max-width: 800px;
  overflow: auto;
  width: 100%;
`;

export const ImageSide = styled.div`
  float: left;
  min-width: 286px;
  width: calc(50% + 12px);
`;

export const Image = styled.img`
  box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-width: calc(100% - 16px);
  margin: 16px 16px 16px 0;
  min-width: 250px;
`;

export const DescriptionSide = styled.div`
  margin: 16px;
`;

export const Band = styled.div`
`;

export const Member = styled.div`
`;

export const Top = styled(Paragraph)`
  hyphens: none;
  font-size: 28px;
`;