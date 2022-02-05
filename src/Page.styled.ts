import styled, { css } from 'styled-components';
import { headerHeight } from './pages/Header.styled';

export const tabSpacer = 48;

type TopSpacerProps = {
  numberOfTabSpaces: number;
}

type PageStyledProps = {
  numberOfTabSpaces: number;
  cardColor: string;
};

export const Id = styled.div`
  pointer-events: none;
`;

export const TopSpacer = styled.div<TopSpacerProps>`
  ${({numberOfTabSpaces}) => css`
    padding-bottom: calc(${headerHeight}px + ${numberOfTabSpaces} * ${tabSpacer}px);
  `}
`;

export const PageStyled = styled.div<PageStyledProps>`
  border-radius: 16px 16px 0 0;
  box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  pointer-events: auto;
  position: sticky;

  ${({cardColor}) => css`background-color: ${cardColor}`};
  ${({numberOfTabSpaces}) => css`
    height: calc(100vh - ${headerHeight}px - ${numberOfTabSpaces} * ${tabSpacer}px);
    margin-left: ${16 - numberOfTabSpaces * 2}px;
    margin-right: ${8 + numberOfTabSpaces * 4}px;
    top: calc(${headerHeight}px + ${numberOfTabSpaces} * ${tabSpacer}px);
  `}
`;

export const Card = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: ${tabSpacer}px 1fr;
`;

export const PageHeading = styled.div`
  cursor: pointer;
  height: ${tabSpacer};
`;

export const CardTitle = styled.div`
  align-items: center;
  display: flex;
  height: ${tabSpacer}px;
`;

export const AutoOverflow = styled.div`
  overflow: auto;
`;