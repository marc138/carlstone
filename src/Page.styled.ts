import styled, { css } from 'styled-components';
import { headerHeight } from './pages/Header.styled';

export const tabSpacer = 48;

type PageWrapperProps = {
  isLastPage: boolean;
};
type PageStyledProps = {
  numberOfTabSpaces: number;
  cardColor: string;
};

export const PageWrapper = styled.div<PageWrapperProps>`
  padding-top: ${headerHeight}px;
  ${({isLastPage}) => !isLastPage && css`margin-bottom: 60px;`};
`;

export const PageStyled = styled.div<PageStyledProps>`
  box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding-bottom: 16px;
  pointer-events: auto;

  ${({cardColor}) => css`background-color: ${cardColor}`};
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