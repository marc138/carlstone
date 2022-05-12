import styled from 'styled-components';
import { dark } from '../utils/colors';

export const headerHeight = 60;

export const HeaderStyled = styled.header`
  background-color: ${dark};
  height: ${headerHeight}px;
  position: fixed;
  box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  top: 0;
  width: 100%;
  z-index: 90;
`;

export const MenuWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 12px 0;
`;

export const Heading = styled.div`
  cursor: pointer;
  align-items: center;
  display: flex;
  font-size: 28px;
`;