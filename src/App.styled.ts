import styled, { css } from 'styled-components';
import {dark, grey, white } from './utils/colors';

export const App = styled.div`
  background-color: ${dark};
  color: ${white};
`;

export const Link = styled.a`
  color: inherit;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  
  :hover {
    background-color: ${white};
    color: ${grey};
  }`;

export const Paragraph = styled.div`
  text-align: justify;
  hyphens: auto;
  padding-bottom: 12px;
`;

export const whiteBox = css`
  border: 2px solid #F5F5F5;
  border-radius: 5px;
  box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;