import styled from 'styled-components';
import { headerHeight } from './Header.styled';

export const MainPageStyled = styled.div`
  height: calc(100vh - ${headerHeight}px);
  position: sticky;
  z-index: 0;
  top: ${headerHeight}px;
`;

export const MainPageContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: calc(5vw + 4px);
  height: calc(100% - ${headerHeight}px);
  justify-content: center;
  text-align: center;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: 66% auto;
  height: 100%;
`;

export const LogoArea = styled.div`
  align-items: flex-end;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  height: 100%;
`;

export const Logo = styled.img`
  color: white;
  width: 750px;
  max-width: 100%;
  max-height: 100%
`;