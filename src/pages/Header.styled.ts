import styled from 'styled-components';

export const headerHeight = 60;

export const HeaderStyled = styled.header`
  height: ${headerHeight}px;
  width: 100%;
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
  font-size: 1.5em;
`;